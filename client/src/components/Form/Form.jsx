import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';

import styleComponent from './styles';
const Form = () => {
  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    tags: '',
    selectedFile: '',
  });

  const handleSubmit = () => {};

  return (
    <Paper style={styleComponent.paper}>
      <form
        autoComplete="off"
        noValidate
        style={styleComponent.form}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Creating a Memory</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) => setPostData({ creator: e.target.value })}
        />
      </form>
    </Paper>
  );
};

export default Form;
