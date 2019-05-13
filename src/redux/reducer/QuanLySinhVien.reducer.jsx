

const stateDefault = {
    DSSV: [
        {MaSV: 1, HoTen: "Nguyen Van A", Tuoi: 18, Email: "nguyenvana@gmail.com"}
    ]
}

const storeQLSVReducer = (state = stateDefault, action) => {
    return {...state};
}

export default storeQLSVReducer;