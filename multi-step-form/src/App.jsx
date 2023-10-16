import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import MultiStepFormContainer from './components/MultiStepFormContainer/MultiStepFormContainer';
import Error from './components/Error/Error';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Navigate to="/multi-step-form/1"/>}/>
        <Route exact path='/multi-step-form/:step' element={<MultiStepFormContainer/>}/>
        <Route exact path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

