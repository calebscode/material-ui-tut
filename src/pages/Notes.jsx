import { useEffect, useState } from "react"
import { Button, Typography, Container } from '@mui/material';
import { Link } from "react-router-dom";
import { Grid, Paper } from "@mui/material";

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
      <Grid container>
        {notes.map(note => (
          <Grid item key={note.id} xs={12} md={6} lg={4}>
            <Paper>
              { note.title }
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}