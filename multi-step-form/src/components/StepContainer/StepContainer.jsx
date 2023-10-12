import './StepContainer.css';
import { Link } from 'react-router-dom';
import { stepHeaders, number } from '../../resources/resources.js';
import StepHeader from '../StepHeader/StepHeader';
import StepOne from '../StepOne/StepOne';

const StepContainer = ({step}) => {

    // colocar algo de logica para ir pasando de paso a paso
    
    return (
        <div className="container-form">
            <StepHeader title={stepHeaders[parseInt(step)-1].title} subtitle={stepHeaders[parseInt(step)-1].subtitle}/>
            <StepOne/>
            <div className="form__buttons">
                {
                    (step >= number.one && step < number.five) &&
                    <Link to={`/multi-step-form/${parseInt(step) - 1}`}>
                        <button className={parseInt(step) === number.one ? "btn go-back hidden" : "btn go-back"}>Go Back</button>
                    </Link>
                }
                {
                    (step >= number.one && step < number.five) &&
                    <Link to={`/multi-step-form/${parseInt(step) + 1}`}>
                        {
                            parseInt(step) === number.four ? <button className="btn confirm">Confirm</button> : <button className="btn next">Next Step</button>
                        }
                        
                    </Link>
                }
            </div>
        </div>
    )
}

export default StepContainer;