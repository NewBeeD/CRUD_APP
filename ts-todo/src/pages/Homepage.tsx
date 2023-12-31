import '../App.css'
import { Box, Typography, Stack, FormControl, FormLabel, FormControlLabel, TextField, Grid, Button } from '@mui/material'
import { useState } from 'react'


interface SubmitValue {

  emailAddress?: string,
  password?: string
}

const Homepage = () => {

  const [formValues, setFormValue] = useState<SubmitValue | null>(null)

  const handleinputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => { 

    const {name, value} = event.target
    
    setFormValue({...formValues, [name]: value})
  }

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {

    event.preventDefault()
    console.log(formValues);
    
  }


  return (
    <Box className='bg-color' display='flex' justifyContent='center' height='100vh' width='100%vw' sx={{ border: '7px solid black'}}>

      <Stack direction='column' alignItems='center'>

        <Box marginTop={{xs: 10}}>
          <Typography variant='h2'  sx={{ fontWeight: {xs:700}, letterSpacing: {xs: '3px'}}}>Task</Typography>
        </Box>


        <Box marginTop={{xs: 9}}>
          <Typography sx={{ fontWeight: {xs: 700}, letterSpacing: {xs: '2px'}, fontSize: 27}}>Login</Typography>
        </Box>

        <form>

          <FormControl sx={{ marginTop: {xs: '30px'}}}>

            <FormLabel sx={{ fontSize: {xs: '14px'}, color: '#BDBDBD'}}>Enter your login credential</FormLabel>

            <Box marginTop={1}>
              <TextField 
              id='email-address'
              name='emailAddress'
              label='Enter your email'
              type='text'
              value={formValues?.emailAddress || ''}
              onChange={handleinputChange}
              size='small'
              sx={{ background: '#EEEEEE', input: { color: 'black' }}}
              />

            </Box>

            <Box marginTop={{xs: 2}} >
              <TextField 
              id='password'
              name='password'
              label='Enter your password'
              type='text'
              value={formValues?.password || ''}
              onChange={handleinputChange}
              size='small'
              sx={{ background: '#EEEEEE', input: { color: 'black' }}}
              /> 

            </Box>

            <Box width='100%' display='flex' justifyContent='flex-end' marginTop={{xs: 1}}>
                <Typography sx={{ fontSize: {xs: 12}, textDecoration: 'underline', cursor: 'pointer'}}>Forgot your password?</Typography>
            </Box>


          </FormControl>

          <Box display='flex' justifyContent='center' marginTop={{xs: 4}}>
            <Button variant='contained' sx={{ background: 'black', width: {xs: '80px'}, height: {xs: '35px'}}} onClick={handleSubmit}><Typography>Log in</Typography></Button>
          </Box>

        </form>   

        <Box marginTop={{xs: 6}}>
          <Typography sx={{ textDecoration: 'underline', letterSpacing: {xs: 3}, cursor: 'pointer'}}>Create a new user?</Typography>
        </Box>


      </Stack>

     

    </Box>
  )
}

export default Homepage