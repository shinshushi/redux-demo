//Giống như service truyền dữ liệu bên angular

const stateDefault = {
    content: 'Giá trị mặc định',
    title: 'Title mặc định'
};
//Giá trị ban đầu trong store (reducer)


const storeModalReducer = (state = stateDefault, action) => {
    switch(action.type){
        case 'GUI_THONG_TIN_SAN_PHAM':{
            state.title = action.sanPham.TenSP;
            state.content = action.sanPham.Gia;
            return {...state};
        };break;
        default: return {...state};
    }
}

export default storeModalReducer;