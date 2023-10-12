import StepContainer from '../StepContainer/StepContainer';
import './FormContainer.css';

const FormContainer = ({step}) => {
    return (
        <div className="container-form">
            <StepContainer step={step}/>
        </div>
    )
}

export default FormContainer;