import React from 'react';
import { Button, Modal, TextareaAutosize, TextField } from '@material-ui/core';
import FileBase64 from 'react-file-base64';
import useStytes from './style';
export default function RegisterModal(isCheck,hideModal){
    const classes = useStytes();
      const [data, setData] = React.useState({
        title: '',
        content: '',
        attachment: '',
      });
      const body = (
        <div className={classes.paper} id='simple-modal-title'>
          <h2>Register New User</h2>
          <form noValidate autoComplete='off' className={classes.form}>
            <TextField
              className={classes.title}
              required
              label='UserName'
              value={data.title}
              onChange={(e) => setData({ ...data, title: e.target.value })}
            />
            <TextField
              className={classes.title}
              required
              label='Password'
              value={data.title}
              onChange={(e) => setData({ ...data, title: e.target.value })}
            />
             <TextField
              className={classes.title}
              required
              label='Email'
              value={data.title}
              onChange={(e) => setData({ ...data, title: e.target.value })}
            />
            <p>Avatar</p>
            <FileBase64
              accept='image/*'
              multiple={false}
              type='file'
              value={data.attachment}
              onDone={({ base64 }) => setData({ ...data, attachment: base64 })}
            />
            <div className={classes.footer}>
              <Button
                variant='contained'
                color='primary'
                component='span'
                fullWidth
                
              >
                Register
              </Button>
            </div>
          </form>
        </div>
      );
    
    return ( 
          <Modal open={isCheck.isCheck}>
            {body}
          </Modal>
    )
}  