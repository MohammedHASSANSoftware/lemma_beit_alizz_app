import 'package:flutter/material.dart';

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('لمة بيت العز'),
      ),
      body: Center(child: Text('الصفحة الرئيسية — جاهزة لإضافة المنيو')),
      floatingActionButton: FloatingActionButton(
        onPressed: () {},
        child: Icon(Icons.shopping_cart),
      ),
    );
  }
}
