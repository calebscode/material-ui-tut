import SendIcon from '@mui/icons-material/Send';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import { Container } from '@mui/material';
import { Button } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function Create() {
  return (
    <Container>
      <AcUnitOutlinedIcon />
      <AcUnitOutlinedIcon color='primary'/>
      <AcUnitOutlinedIcon color='secondary' fontSize='large'/>
      <AcUnitOutlinedIcon color='action' fontSize='small'/>
      <AcUnitOutlinedIcon color='error'/>
      <AcUnitOutlinedIcon color='disabled'/>

      <br></br>

      <Button
        type='submit'
        color='secondary'
        variant='contained'
        endIcon={<SendIcon />}>
        Submit
      </Button>

      <Button
        variant='outlined'
        color='primary'
        startIcon={<DeleteOutlineIcon/>}>
        Delete
      </Button>
    </Container>
  )
}