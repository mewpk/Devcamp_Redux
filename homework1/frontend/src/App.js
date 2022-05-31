import React from 'react';
import "./App.css"
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Navbar from './Components/Navbar';
import Profile from './Components/Profile'
import Cart from './Components/Cart'
import ProductList from './Components/ProductList'
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
const { Footer } = Layout;

const App = () => (
  <Layout>
    <Router>

      <Navbar />
      <Routes>
        <Route path="/" element={<Profile />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/productlist" element={<ProductList />}></Route>
      </Routes>
    </Router>
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      Create By MicroMew !
    </Footer>
  </Layout>
);

export default App;