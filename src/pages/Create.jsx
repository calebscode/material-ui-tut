import { Container } from '@mui/material';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const styles = {
  btn : {
    backgroundColor : 'red',
    '&:hover' : {
      backgroundColor : 'purple'
    }
  },
  title : {
    textDecoration : 'underline'
  }
}

export default function Create() {

  return (
    <Container>
      <Typography
        sx={styles.title}
        variant='h5'
        component='h2'
        gutterBottom>
        Create a New Note
      </Typography>
      <Button
        sx={styles.btn}
        color='secondary'
        variant='contained'
        endIcon={<KeyboardArrowRightIcon />}>
        Submit
      </Button>
    </Container>
  )
}