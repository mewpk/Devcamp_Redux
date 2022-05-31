import React from 'react';
import "./App.css"
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Navbar from './Components/Navbar';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
const { Content, Footer } = Layout;

const App = () => (
  <Layout>
    <Navbar />
    <Router>
      <Routes>


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