
const token = localStorage.getItem('token');
export const INIT_STATE = {
    posts:{
        isLoading:false,
        data:[]
    },
    modal:{
        isShow:false,
        isShowRegister: false,
        isShowLogin:false
    },
    user:{
        notice:"",
        status:false,
        type:"",
        token:token == null ? localStorage.getItem('token') : token
    },
}