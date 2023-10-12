import './StepContainer.css';
import StepHeader from '../StepHeader/StepHeader';
import StepOne from '../StepOne/StepOne';

const StepContainer = () => {

    // colocar algo de logica para ir pasando de paso a paso
    
    
    return (
        <div className="container-form">
            <StepHeader title="Personal info" subtitle="Please provide your name, email address, and phone number."/>
            <StepOne/>
            <div className="form__buttons">
                <button className="btn go-back hidden">Go Back</button>
                <button className="btn next">Next Step</button>
            </div>
        </div>
    )
}

export default StepContainer;