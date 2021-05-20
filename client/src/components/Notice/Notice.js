import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from "react-redux";
import { modalState$, userRegisterState$ } from "../../redux/selectors";
import Alert from "../Alert/Alert.js"
import * as action from '../../redux/actions/index.js'

export default function Notice(){
    const dispatch = useDispatch();
    const { status, type, notice} = useSelector(userRegisterState$);
     const handleClose = React.useCallback((event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(action.hideNotice());
      }, [dispatch]);  
    return(
      <Snackbar open={status} autoHideDuration={6000} onClose={handleClose} >
        <Alert onClose={handleClose}  severity={type=="success" ? "success" : "error"}>
        {notice}
        </Alert>
      </Snackbar>
    )
}