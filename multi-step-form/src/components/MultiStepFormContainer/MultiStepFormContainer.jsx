import './MultiStepFormContainer.css';
import { useParams } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import FormContainer from '../FormContainer/FormContainer';


const MultiStepFormContainer = () => {
    const {step} = useParams();
    
    return (
        <div className="container-wrapper">
            <Sidebar step={step}/>
            <FormContainer step={step}/>
        </div>
    )
}

export default MultiStepFormContainer;