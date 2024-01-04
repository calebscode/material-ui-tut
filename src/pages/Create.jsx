import { Container, FormControl, FormControlLabel, FormLabel, RadioGroup, TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useState } from 'react';
import { Radio } from '@mui/material';
import { useNavigate } from 'react-router-dom';

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
  const [category, setCategory] = useState('todos')

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault()

    setTitleError(!(title))
    setDetailsError(!(details))
  
    if (title && details) {
      const note = {
        title : title,
        details : details,
        category : category,
        id : crypto.randomUUID()
      }

      setTitle('')
      setDetails('')
      setCategory('todos')
      console.log(note)

      // post it to the db
      const url = 'http://localhost:3000/notes'
      fetch(url, {
        method : 'POST',
        headers : {
          'Content-type' : 'application/json'
        },
        body : JSON.stringify(note)
      }).then(() => {
        navigate('/')
      })
      
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
        New Note
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
          label='Title'
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

        <FormControl sx={classes.field}>
          <FormLabel>Note Category</FormLabel>
            <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
              <FormControlLabel value='todos' control={<Radio />} label='Todo'/>
              <FormControlLabel value='reminders' control={<Radio />} label='Reminder'/>
              <FormControlLabel value='work' control={<Radio />} label='Work'/>
              <FormControlLabel value='money' control={<Radio />} label='Money'/>
            </RadioGroup>
        </FormControl>
        
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