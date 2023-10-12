import Sidebar from '../Sidebar/Sidebar';
// import Acknowledgment from '../Acknowledgment/Acknowledgment';
import './MultiStepFormContainer.css';
import FormContainer from '../FormContainer/FormContainer';
import { useParams } from 'react-router-dom';

const MultiStepFormContainer = () => {
    const {step} = useParams();
    
    return (
        <div className="container-wrapper">
            <Sidebar step={step}/>
            <FormContainer/>
        </div>
    )
}

export default MultiStepFormContainer;