import { Container, TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useState } from 'react';

const classes = {
  field : {
    marginTop: '20px',
    marginBottom: '20px',
    display: 'block',
  }
}

export default function Create() {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()

    setTitleError(!(title))
    setDetailsError(!(details))
  
    if (title && details) {
      const note = {
        title : title,
        details : details,
        id : crypto.randomUUID()
      }

      setTitle('')
      setDetails('')
      console.log(note)
    } else {
      console.log('failed to create new note')
    }
  
  }

  return (
    <Container>
      <Typography
        variant='h5'
        component='h2'
        gutterBottom>
        Create Note
      </Typography>

      <form
        onSubmit={handleSubmit}
        noValidate
        autoComplete='off'>
        <TextField
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={classes.field}
          variant='outlined'
          color='secondary'
          label='Note Title'
          required
          fullWidth
          error={titleError}
          >

        </TextField>
        <TextField
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          sx={classes.field}
          variant='outlined'
          color='secondary'
          label='Details'
          required
          fullWidth
          multiline
          rows={4}
          error={detailsError}
          >
        </TextField>
        <Button
          type='submit'
          color='primary'
          variant='contained'
          endIcon={<KeyboardArrowRightIcon />}>
          Submit
        </Button>
      </form>

    </Container>
  )
}