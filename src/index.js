import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styles from "./style/main.module.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className={styles.content_main}>
    <Header />
    <div className={styles.main}>
      <Home />
    </div>
    <Footer />
  </div>

);