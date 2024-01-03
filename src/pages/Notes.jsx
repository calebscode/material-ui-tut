import { useEffect, useState } from "react"
import { Button, Typography, Container } from '@mui/material';
import { Link } from "react-router-dom";


export default function Notes() {

  const [notes, setNotes] = useState([])

  useEffect(() => {

    const url = 'http://localhost:3000/notes'
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        setNotes(data)
      })
    },[])

  return (
    <Container>
      <h2>Notes page</h2>
      {notes.map((note) => (
        <div className="note" key={note.id}>
          <Typography variant='h5'>{note.title}</Typography>
          <Typography variant='h6'>{note.category} category</Typography>
          <Typography gutterBottom variant='body1'>{note.details}</Typography>
        </div>
      ))}
        <Link to='/create'>
          <Button>Add New Note</Button>
        </Link>
    </Container>
  )
}