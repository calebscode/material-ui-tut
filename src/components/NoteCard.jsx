import { DeleteOutline } from "@mui/icons-material";
import { Avatar, Card, CardContent, CardHeader, IconButton, Typography } from "@mui/material";
import { cyan, indigo, lime, red } from "@mui/material/colors";

export default function NoteCard({ note, handleDelete }) {

  const colors = {
    reminder : red[500],
    todo : cyan[500],
    work : indigo[500],
    money : lime[500]
  }

  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          avatar={
            <Avatar sx={
              note.category[0] == 'r' ? {bgcolor: colors.reminder} :
              note.category[0] == 'w' ? {bgcolor: colors.work} :
              note.category[0] == 't' ? {bgcolor: colors.todo} :
              {bgcolor: colors.money}
            }>
              {note.category[0].toUpperCase()}
            </Avatar>
          }
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