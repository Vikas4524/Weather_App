import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
            // MaterialUl
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

import WeatherApp from './WeatherApp';

function App() {


  return (
    <>
      {/* <h4>Material UI Demo</h4>
      <Button variant="contained">Text</Button>
       <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
      Here is a gentle confirmation that your action was successful.
    </Alert> */}
      <WeatherApp/>
    </>
  )
}

export default App
