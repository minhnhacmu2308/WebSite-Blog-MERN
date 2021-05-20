import React from "react";
import { Button, Modal, TextareaAutosize, TextField } from "@material-ui/core";
import FileBase64 from "react-file-base64";
import useStytes from "./style";
import { useSelector, useDispatch } from "react-redux";
import { modalState$, userRegisterState$ } from "../../../redux/selectors";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import * as action from "../../../redux/actions";


export default function RegisterModal() {
  const classes = useStytes();
  const [data, setData] = React.useState({
    username: "",
    password: "",
    avatar: "",
    email: "",
  });
  const dispatch = useDispatch();
  const { isShowLogin } = useSelector(modalState$);
  const onClose = React.useCallback(() => {
    dispatch(action.hideModalLogin());
    setData({
      password: "",
      email: "",
    });
  }, [dispatch]);
  const onSubmit = React.useCallback(() => {
    dispatch(action.loginUsers.loginUsersRequest(data));
    onClose();
  }, [data, dispatch, onClose]);
  const body = (
    <div className={classes.paper} id="simple-modal-title">
      <h2>Login</h2>
      <form noValidate autoComplete="off" className={classes.form}>
        <TextField
          className={classes.title}
          required
          label="Email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <TextField
          className={classes.title}
          required
          label="Password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <div className={classes.footer}>
          <Button
            variant="contained"
            color="primary"
            component="span"
            fullWidth
            onClick={onSubmit}
          >
            Login
          </Button>
        </div>
      </form>
    </div>
  );
  return (
    <Modal open={isShowLogin} onClose={onClose}>
      {body}
    </Modal>
  );
}
