import './MultiStepFormContainer.css';
import { useParams } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import StepContainer from '../StepContainer/StepContainer';
import Error from '../Error/Error';

const MultiStepFormContainer = () => {
    const {step} = useParams();
    
    return (
        <>
            {
                (!step || parseInt(step) < 1 || parseInt(step) > 5) ? 
                <Error/> :
                <div className="container-wrapper">
                    <Sidebar step={step}/>
                    <StepContainer step={step}/>
                </div> 
            }
        </>
    )
}

export default MultiStepFormContainer;