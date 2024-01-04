import { useEffect, useState } from "react"
import { Button, Typography, Container } from '@mui/material';
import { Link } from "react-router-dom";
import { Grid, Paper } from "@mui/material";
import NoteCard from "../components/NoteCard";
import Masonry from '@mui/lab/Masonry'

export default function Notes() {

  const [notes, setNotes] = useState([])
  
  async function handleDelete(id) {
    const url = 'http://localhost:3000/notes/' + id
    await fetch(url, { method : 'DELETE' })
      .then((res) => {
        if (res.ok) {
          console.log('note deleted successfully')
          const newNotes = notes.filter(note => note.id != id)
          setNotes(newNotes)

        } else {
          console.log('could not delete note successfully')
        }
      })
      .catch((err) => {
        console.log('error deleting note: ' + err.message)
      })
    
    
  }

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
      <Masonry columns={{xs:1, sm:1, md:2, lg:3}} spacing={2}>
        {notes.map(note => (
          <Grid item key={note.id} xs={12} md={6} lg={4}>
            <NoteCard note={note} handleDelete={handleDelete}>
              { note.title }
            </NoteCard>
          </Grid>
        ))}
      </Masonry>
    </Container>
  )
}