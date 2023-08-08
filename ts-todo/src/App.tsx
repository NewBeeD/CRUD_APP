import Homepage from "./pages/Homepage"
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
            {/* <Route path="/home" element={<Dailytask />}/>
            <Route path="/home" element={<Addtask />}/> */}

          </Routes>
        </Router>
      </ThemeProvider>
      
    </>
  )
}

export default App
