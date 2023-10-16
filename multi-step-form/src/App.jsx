// import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MultiStepFormContainer from './components/MultiStepFormContainer/MultiStepFormContainer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<MultiStepFormContainer/>}/>
        <Route exact path='/multi-step-form/:step' element={<MultiStepFormContainer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

