import './App.css';
import Navbar from './Components/Navbar';
import Newz from './Components/Newz';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useLocalStorage from 'use-local-storage';

function App() {
  const [theme,setTheme]=useLocalStorage('light'?'dark':'light');

  const toggaltheme=()=>{
    const newTheme = theme ==='light'?'dark':'light';
    setTheme(newTheme)
  }
  const apiKey = process.env.REACT_APP_API_KEY
  return (
    <>
      <div data-theme={theme}>
        <Router>
          <Navbar theme={toggaltheme} mode={theme}/>
          <Routes>
            <Route exact path="/" element={<Newz apiKey={apiKey} key="general" pageSize={8} country="in" category="general" mode={theme}/>}></Route>
            <Route exact path="/business" element={<Newz apiKey={apiKey} key="business" pageSize={8} country="in" category="business" mode={theme}/>}></Route>
            <Route exact path="/entertainment" element={<Newz apiKey={apiKey} key="entertainment" pageSize={8} country="in" category="entertainment" mode={theme}/>}></Route>
            <Route exact path="/general" element={<Newz apiKey={apiKey} key="general" pageSize={8} country="in" category="general" mode={theme}/>}></Route>
            <Route exact path="/health" element={<Newz apiKey={apiKey} key="health" pageSize={8} country="in" category="health" mode={theme}/>}></Route>
            <Route exact path="/science" element={<Newz apiKey={apiKey} key="science" pageSize={8} country="in" category="science" mode={theme}/>}></Route>
            <Route exact path="/sports" element={<Newz apiKey={apiKey} key="sports" pageSize={8} country="in" category="sports" mode={theme}/>}></Route>
            <Route exact path="/technology" element={<Newz apiKey={apiKey} key="technology" pageSize={8} country="in" category="technology" mode={theme}/>}>
            </Route>
        </Routes>
      </Router>
      </div>
    </>
  );
}
export default App;


