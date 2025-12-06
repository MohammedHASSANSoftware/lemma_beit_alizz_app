const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const riyadh = { lat: 24.7136, lng: 46.6753 };
const ALLOWED_KM = 80;

function haversineKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const toRad = x => x * Math.PI / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a = Math.sin(dLat/2)*Math.sin(dLat/2) +
            Math.cos(toRad(lat1))*Math.cos(toRad(lat2)) *
            Math.sin(dLon/2)*Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

exports.createOrder = functions.https.onCall(async (data, context) => {
  const { userId, items, total, lat, lng, paymentMethod } = data;
  if (lat == null || lng == null) {
    throw new functions.https.HttpsError('invalid-argument', 'Location required');
  }
  const distance = haversineKm(lat, lng, riyadh.lat, riyadh.lng);
  if (distance > ALLOWED_KM) {
    throw new functions.https.HttpsError('permission-denied', 'Service available in Riyadh only.');
  }
  const order = {
    userId: userId || 'guest',
    items,
    total,
    paymentMethod,
    status: paymentMethod === 'cash' ? 'pending_payment' : 'paid',
    location: new admin.firestore.GeoPoint(lat, lng),
    createdAt: admin.firestore.FieldValue.serverTimestamp()
  };
  const docRef = await admin.firestore().collection('orders').add(order);
  return { orderId: docRef.id, success: true };
});
