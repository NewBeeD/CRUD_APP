import Homepage from "./pages/Homepage"
import DailyTasks from "./pages/DailyTasks";
import AddNewTask from "./pages/AddNewTask";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { createTheme, ThemeProvider } from '@mui/material';

function App() {

  const theme: any = createTheme({
    typography: {
      fontFamily: [
        'Teko',
        'cursive',
      ].join(','),
    },});

  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>

            <Route path="/" element={<Homepage />}/>
            <Route path="/dailytasks" element={<DailyTasks />}/>
            <Route path="/addtask" element={<AddNewTask />}/>

          </Routes>
        </Router>
      </ThemeProvider>
      
    </>
  )
}

export default App
