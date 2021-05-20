import React from "react";
import { Button, Modal, TextareaAutosize, TextField } from "@material-ui/core";
import FileBase64 from "react-file-base64";
import { useSelector, useDispatch } from "react-redux";
import { modalState$ , userRegisterState$} from "../../redux/selectors";
import useStytes from "./style";
import { hideModal } from "../../redux/actions";
import { createPosts } from "../../redux/actions";
export default function CreatPostModel() {
  const classes = useStytes();
  const dispatch = useDispatch();
  const { isShow } = useSelector(modalState$);
  const [data, setData] = React.useState({
    secret_key:"",
    title: "",
    content: "",
    attachment: "",
  });
  const token = localStorage.getItem('token');
  const onClose = React.useCallback(() => {
    dispatch(hideModal());
    setData({
      ...data,
      title: "",
      content: "",
      attachment: "",
    });
  }, [dispatch]);
  const onSubmit = React.useCallback(() => {
    console.log(data)
    dispatch(createPosts.createPostRequest(data));
    onClose();
  }, [setData,data, dispatch, onClose]);
  const body = (
    <div className={classes.paper} id="simple-modal-title">
      <h2>Create New Post</h2>
      <form noValidate autoComplete="off" className={classes.form}>
        <TextField
          className={classes.title}
          required
          label="Title"
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value ,secret_key:token})}
        />
        <TextareaAutosize
          className={classes.textarea}
          rowsMin={10}
          rowsMax={15}
          placeholder="Content..."
          value={data.content}
          onChange={(e) => setData({ ...data, content: e.target.value })}
        />
        <FileBase64
          accept="image/*"
          multiple={false}
          type="file"
          value={data.attachment}
          onDone={({ base64 }) => setData({ ...data, attachment: base64 })}
        />
        <div className={classes.footer}>
          <Button
            variant="contained"
            color="primary"
            component="span"
            fullWidth
            onClick={onSubmit}
          >
            Create
          </Button>
        </div>
      </form>
    </div>
  );
  return (
    <div>
      <Modal open={isShow} onClose={onClose}>
        {body}
      </Modal>
    </div>
  );
}
