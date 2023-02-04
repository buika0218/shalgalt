import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Red from './components/red';
import RedReadmore from './container/redreadmore';
import Bluerm from './container2/bluerm';
import Greenrm from './container3/greenrm';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Red />} />
        <Route path='/redreadmore' element={<RedReadmore />}/>
        <Route path='/' element={<Red />} />
        <Route path='/bluerm' element={<Bluerm />}/>
        <Route path='/' element={<Red />} />
        <Route path='/greenrm' element={<Greenrm />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
