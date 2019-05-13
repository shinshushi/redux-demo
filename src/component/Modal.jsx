import React, { Component } from 'react';
import {connect} from 'react-redux'; // Thư viện kết nối giữa component cua react và reducer (store modal) của redux

class Modal extends Component {
    render() {
        return (
            //Modal
            <div className="modal fade" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                            <h4 className="modal-title">{this.props.titleModal}</h4>
                            <button type="button" className="close" data-dismiss="modal">×</button>
                        </div>
                        {/* Modal body */}
                        <div className="modal-body">
                            {this.props.contentModal}
                        </div>
                        {/* Modal footer */}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


//Viết phương thức lấy giá trị từ store ra (giống hàm subscribe bên angular)
const mapStateToProps = (state) => {//state: là biến chứa nội dung của rootReducer (store tổng)
    return {
        contentModal: state.storeModalReducer.content, //Lấy giá trị từ store chuyển nó thành props của component
        titleModal: state.storeModalReducer.title
    }
} 

//Hàm connect chạy trước --> connect tới redux (đã provide trong file index.js) --> trả về 1 cái rootReducer (store tổng) cho callback func mapStateToProps -->  đồng thời biến contentModal, titleModal thành props của component mà nó liên kết (ở đây là Modal component)
//mapStateToProps: là hàm nhận giá trị từ store của redux để map thành 1 prop của component
//mapDispatchToProps: là hàm đưa giá trị từ component lên store
//tham số thứ 3: component liên kết với redux (Modal)
export default connect(mapStateToProps, null)(Modal)