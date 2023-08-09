import '../App.css'
import { Box, Typography, Stack, FormControl, FormLabel, FormControlLabel, TextField, Grid, Button, Paper, BottomNavigation, BottomNavigationAction } from '@mui/material'
import { useState } from 'react'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';



interface DataSets {

  task: string,
  time: Date
}


const data: DataSets[] = [
  {
    task: 'Get groceries',
    time: new Date(2023, 8, 8, 1, 30)
  },
  {
    task: 'Meet with Auditor',
    time: new Date(2023, 8, 8, 4, 30)
  },
  {
    task: 'Finish Financial Statments',
    time: new Date(2023, 8, 8, 10, 30)
  },
  {
    task: 'Complete Assignments',
    time: new Date(2023, 8, 10, 11, 30)
  },
  {
    task: 'Talk to murphy',
    time: new Date(2023, 8, 8, 5, 30)
  },
  

]






const DailyTasks = () => {



  return (
    <Box className='bg-dailytasks' display='flex' justifyContent='center' height='100vh' width='100%vw'>

      <Stack direction='column' marginLeft={0}>

        <Box>
          <Typography marginTop={10} variant='h3' sx={{ color: 'white'}}>Daily Tasks</Typography>
        </Box>

        <Box marginTop={8}>
          <Typography variant='h5' sx={{ color: 'white'}}>To do Tasks</Typography>
        </Box>

        <Box width='100%'>

          {data.map((item) => (

            <Paper key={item.task} elevation={2} sx={{ padding: '10px', marginTop: '14px', background: 'rgb(255, 255, 255, 0.2)', width: {xs: '300px'}, borderRadius: '6px'}}>

              <Stack justifyContent='space-between' direction='row' >

                {<CheckBoxOutlineBlankIcon />}
                <Typography sx={{ letterSpacing: '2px', color: 'white', fontSize: '20px'}}>{item.task}</Typography>
                <DeleteOutlineOutlinedIcon style={{ color: '#cc2525'}}/>
              </Stack>           
            </Paper>

          ))}

        </Box>

        <Box display='flex' justifyContent='center' alignItems='center' marginTop={6} >

          <AddCircleIcon style={{ color: '#6b32ba'}} sx={{ fontSize: '55px'}}/>
          
        </Box>

      </Stack>



      

      
      
    </Box>
  )
}

export default DailyTasks