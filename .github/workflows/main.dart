import 'package:flutter/material.dart';
import 'package:firebase_core/firebase_core.dart';
import 'screens/home_screen.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp();
  runApp(LemmaApp());
}

class LemmaApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'لمة بيت العز',
      theme: ThemeData(
        primaryColor: Color(0xFFB33A3A),
        scaffoldBackgroundColor: Color(0xFFF5E9DC),
        fontFamily: 'Cairo',
      ),
      home: HomeScreen(),
      debugShowCheckedModeBanner: false,
    );
  }
}
