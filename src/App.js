import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; //file css cua bootstrap
import 'jquery'; //import jquery
import 'popper.js'; //import popper.js
import 'bootstrap';//import js cua bootstrap vao app.js
import DanhSachSanPham from './component/DanhSachSanPham';
import Modal from './component/Modal';
function App() {
  let dssp = [{
    MaSP: 1, TenSP: 'IphoneX', Gia: 10000
  },
  {
    MaSP: 2, TenSP: 'Sony XZ', Gia: 20000
  },
  {
    MaSP: 3, TenSP: 'HTC One', Gia: 30000
  }];
  return (
    <div className="App">
      <DanhSachSanPham dssp={dssp}></DanhSachSanPham>
      <Modal></Modal>
    </div>
  );
}

export default App;
