import React, { Component } from 'react';
import {connect} from 'react-redux';

class SanPham extends Component {
    render() {
        let {MaSP, TenSP, Gia} = this.props.sanPham;
        return (
            <div className="card" style={{ width: 400 }}>
                <img className="card-img-top" src="img_avatar1.png" alt="Card image" />
                <div className="card-body">
                    <h4 className="card-title">{TenSP}</h4>
                    <p className="card-text">{Gia}</p>
                    <button onClick={() => this.props.showInfo(this.props.sanPham)} className="btn btn-primary" data-toggle="modal" data-target="#myModal">Xem chi tiet</button>
                </div>
            </div>
        );
    }
}

//Hàm đưa giá trị lên store của redux
const mapDispatchToProps = (dispatch) => {
    return {
        showInfo: (objectSP) => {
            dispatch({
                type: 'GUI_THONG_TIN_SAN_PHAM', //thuộc tính bắt buộc tên type để xác định gói tin từ action nào gửi lên
                sanPham: objectSP //Giá trị gửi lên redux
            })
        }
    }
}


//Hàm connect chạy trước --> connect tới redux (đã provide trong file index.js) --> trả về 1 cái hàm dispatch (hàm của redux) cho callback func mapDispatchToProps, hàm dispatch này có nhiệm vụ gửi cái dữ liệu trong object truyền vào nó lên store -->  đồng thời biến showInfo thành 1 callback nằm trong props của component mà nó liên kết (ở đây là SanPham component), thay vì nhận từ component cha
export default connect(null, mapDispatchToProps)(SanPham);