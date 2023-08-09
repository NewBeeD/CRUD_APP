import '../App.css'
import { Box, Typography, Stack, FormControl, FormLabel, FormControlLabel, TextField, Grid, Button } from '@mui/material'
import { useState } from 'react'
import '../css/addTasks.css'

const AddNewTask = () => {


  return (
    <Box display='flex' height='100vh' width='100%vw' sx={{background: 'black'}}>

      <Stack direction='column' marginTop={8} marginLeft={3}>

        <Box>
          <Typography variant='h3' sx={{ color: 'white', letterSpacing: '2px'}}>Add new</Typography>
        </Box>

        <form>
          <FormControl>

            <Box marginTop={8} width='300px'>
              <TextField 
                id='task'
                name='Task'
                label='Task'
                type='text'
                // value={formValues?.task || ''}
                // onChange={handleinputChange}
                size='small'
                variant="standard"
                fullWidth
                InputProps={{ disableUnderline: true }}
                sx={{ background: 'black', borderBottom: '1px solid rgb(255, 255, 255, 0.4)', input: { color: 'white', letterSpacing: '2px' }}}
                />
            </Box>

            <Box marginTop={2} width='300px'>
              <TextField 
                id='date'
                name='date'
                label='Date'
                type='text'
                // value={formValues?.task || ''}
                // onChange={handleinputChange}
                size='small'
                variant="standard"
                fullWidth
                InputProps={{ disableUnderline: true }}
                sx={{ background: 'black', borderBottom: '1px solid rgb(255, 255, 255, 0.4)', input: { color: 'white', letterSpacing: '2px' }}}
                />
            </Box>

            <Box display='flex' justifyContent='center' marginTop={8}>
              <Button variant='contained' sx={{ background: '#6b32ba'}}>
                <Typography variant='h5' sx={{ letterSpacing: '3px'}}>Create Task</Typography>
              </Button>
            </Box>

          </FormControl>
        </form>

      </Stack>

    </Box>
  )
}

export default AddNewTask