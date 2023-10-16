import './MultiStepFormContainer.css';
import { useParams } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import StepContainer from '../StepContainer/StepContainer';


const MultiStepFormContainer = () => {
    const {step} = useParams();
    
    return (
        <div className="container-wrapper">
            <Sidebar step={step}/>
            <StepContainer step={step}/>
        </div>
    )
}

export default MultiStepFormContainer;