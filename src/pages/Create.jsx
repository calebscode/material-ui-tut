import { Container } from '@mui/material';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function Create() {

  return (
    <Container>
      <Typography
        variant='h5'
        component='h2'
        gutterBottom>
        Using the Custom Font 'Quicksand' instead of Roboto.
      </Typography>
      <Button
        color='primary'
        variant='contained'
        endIcon={<KeyboardArrowRightIcon />}>
        Primary
      </Button>
      <Button
        color='secondary'
        variant='contained'
        endIcon={<KeyboardArrowRightIcon />}>
        Secondary
      </Button>
    </Container>
  )
}