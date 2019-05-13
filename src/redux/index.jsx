//index se la store tong cua ung dung chua tat ca cac reducer (store_con)
import {combineReducers} from 'redux';
import storeModalReducer from '../redux/reducer/Modal.reducer';
import storeQLSVReducer from '../redux/reducer/QuanLySinhVien.reducer';

const rootReducer = new combineReducers({
    //Sau nay se import cac reducer con vao (store_con)

    //storeModalReducer: storeModalReducer
    storeModalReducer,

    storeQLSVReducer

})

export default rootReducer;