import { Route, Routes, } from 'react-router-dom'
import Home from './_root/pages/Home';
import RootLayout from './_root/RootLayout';


function App() {
  return (
    <Routes>

    <Route element={<RootLayout/>}>
      <Route path='/' element={<Home/>}/>


    </Route>

    </Routes>
  );
}

export default App;
