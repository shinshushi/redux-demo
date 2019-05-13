import React, { Component } from 'react';
import {connect} from 'react-redux';

class DanhSachSinhVien extends Component {
    renderDSSV = () => {
        return this.props.DSSV.map((sinhVien, index) => {
            return(
                <tr key={index}>
                    <td>{sinhVien.MaSV}</td>
                    <td>{sinhVien.HoTen}</td>
                    <td>{sinhVien.Tuoi}</td>
                    <td>{sinhVien.Email}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        DSSV : state.storeQLSVReducer.DSSV
    }
}

export default connect(mapStateToProps, null) (DanhSachSinhVien);