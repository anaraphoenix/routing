
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Display from './components/display';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/home/" element={<Home/>}/>
        <Route path="/:word/" element={<Display/>}/>
        <Route path="/:word/:color/:backgroundColor/" element={<Display/>}/>



      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
