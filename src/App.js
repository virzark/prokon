import React, { useState, useEffect } from 'react';
//import axios from 'axios';
//import Web3 from 'web3';
import NavigationBar from "./components/NavigationBar";
import "./style/penerbit.css";
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="myBG">
      <div>
        < NavigationBar />
      </div>

      <div className='full-container'>
        <div className='sidebar'>
          {/* content */}
          <h3>This is sidebar menu</h3>
          <h3>This is sidebar menu</h3>
          <h3>This is sidebar menu</h3>
        </div>

        <div className='content'>
          {/* content */}
          <p>This is content</p>
          <p>This is content</p>
          <p>This is content</p>
        </div>
      </div>
      
      <h2>Register Company</h2>
      <div>
        <label>Nama Penerbit:</label>
        <input type="text" />
      </div>
      <button>Register Company</button>

      <h2>Tambah Produk</h2>
      <div>
        <label>Product ID:</label>
        <input type="number"/>
      </div>
      <div>
        <label>Nama Produk:</label>
        <input
          type="text"
        />
      </div>
      <div>
        <label>Deskripsi Produk:</label>
        <input
          type="text"
        />
      </div>
      <div>
        <label>Jumlah:</label>
        <input type="number"/>
      </div>
      <div>
        <label>ISBN:</label>
        <input type="text"/>
      </div>
      <div>
        <label>Penulis:</label>
        <input type="text"/>
      </div>
      <div>
        <label>Penerbit:</label>
        <input type="text"/>
      </div>
      <button>Tambah Produk</button>

      <h2>Transfer Produk</h2>
      <div>
        <label>Product ID:</label>
        <input type="number"/>
      </div>
      <div>
        <label>Jumlah Transfer:</label>
        <input type="number"/>
      </div>
      <button>Transfer Produk</button>

      <h2>Dapatkan Produk</h2>
      <div>
        <label>Product ID:</label>
        <input type="number"/>
      </div>
      <button>Dapatkan Produk</button>
    </div>
    
  );
}

export default App;
