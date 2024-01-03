import { DeleteOutline } from "@mui/icons-material";
import { Card, CardContent, CardHeader, IconButton, Typography } from "@mui/material";

export default function NoteCard({ note, handleDelete }) {

  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          title={note.title}
          subheader={note.category}
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
                <DeleteOutline />
            </IconButton>
          }
           />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}