import { Container, Button, ButtonGroup, Stack, Typography } from "@mui/material";

function handleClick() {
  console.log('you clicked me!')
}

export default function Create() {
  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        color="textSecondary"
        gutterBottom>
        Create A New Note
      </Typography>
      <Stack spacing={2} direction="row">
        <Button variant="text">text</Button>
        <Button variant="contained">contained</Button>
        <Button variant="outlined">outlined</Button>
        <Button variant="contained" disabled>disabled</Button>
      </Stack>
      <br></br>
      <Stack spacing={2} direction="row">
        <Button color="secondary" variant="text">text</Button>
        <Button color="secondary" variant="contained">contained</Button>
        <Button color="secondary" variant="outlined">outlined</Button>
        <Button color="secondary" variant="contained" disabled>disabled</Button>
      </Stack>
      <Typography gutterBottom>
        Primary Color Button Group Default
      </Typography>
      <ButtonGroup color="primary">
        <Button>button 1</Button>
        <Button>button 2</Button>
        <Button>button 3</Button>
        <Button>button 4</Button>
      </ButtonGroup>
      <Typography>
        Secondary Color Button Group Contained
      </Typography>
      <ButtonGroup color="secondary">
        <Button variant="contained">button 1</Button>
        <Button variant="contained">button 2</Button>
        <Button variant="contained">button 3</Button>
        <Button variant="contained">button 4</Button>
      </ButtonGroup>
      <Typography>
        Submit Button with Event Listener
      </Typography>
      <Button
        type="submit"
        color="secondary"
        variant="contained"
        onClick={handleClick}>
        Submit
      </Button>
    </Container>
  )
}