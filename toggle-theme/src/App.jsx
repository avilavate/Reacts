import { useState } from 'react'
import 'semantic-ui-css/semantic.min.css'
import Card from './card'
import './App.css'
import ToggleButton from "./togglebutton";
import ThemeContextProvider from './contexts/theme-context';
import { UseTheme } from './contexts/theme-context';

function App() {
  const [themeMode, setThemeMode] = useState('light')

  const toggleTheme=()=>{
    console.log('Toggletheme called' + " "+ themeMode)
    themeMode=='light'?setThemeMode('dark'):setThemeMode('light');
    console.log('Toggletheme called' + " "+ themeMode)
  }

  return (
    <ThemeContextProvider value={{themeMode, toggleTheme}}>
      <div className="main">
        <h3>User Profile</h3>
        <div className="ui grid">

          <div className="ui top right floated attached ">
            <ToggleButton></ToggleButton>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="ui grid">
          <Card></Card>
        </div>

      </div>
    </ThemeContextProvider>
  )
}

export default App
