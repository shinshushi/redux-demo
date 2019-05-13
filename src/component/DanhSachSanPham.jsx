import React, { Component } from 'react';
import SanPham from './SanPham';

class DanhSachSanPham extends Component {
    renderSanPham = () => {
        return this.props.dssp.map((sanPham, index)=>{
            return(
                <div className="col-md-4">
                    <SanPham key={index} sanPham={sanPham}></SanPham>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="container">
                <h3>Danh sách sản phẩm</h3>
                <div className="row">
                    {this.renderSanPham()}
                </div>
            </div>
        );
    }
}

export default DanhSachSanPham;