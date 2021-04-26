import React from 'react';
import {Typography} from '@material-ui/core'
import useStytes from './style';
export default function Header(){
    const classes = useStytes();
    return <Typography variant="h4" align="center" className={classes.container} >Blog</Typography>;
}