import './NextStepButton.css';
import { Link } from 'react-router-dom';
import { number } from '../../resources/resources.js';

const NextStopButton = ({step, allowNextStep, fieldsStatus, selectedPlanName, selectedOns}) => {
    return (
        <div className="form__buttons">
            {
                parseInt(step) === number.one && 
                <>
                    <button className="btn go-back hidden">Go Back</button>
                    {
                        fieldsStatus.emptyName || 
                        fieldsStatus.emptyEmail || 
                        fieldsStatus.emptyPhone ?
                        <Link to={`/multi-step-form/${parseInt(step)}`}>
                            <button className="btn next" onClick={allowNextStep}>Next Step</button>
                        </Link> :
                        <Link to={`/multi-step-form/${parseInt(step) + 1}`}>
                            <button className="btn next" onClick={allowNextStep}>Next Step</button>
                        </Link>
                    }
                </>
            }
            {
                parseInt(step) === number.two && 
                <>
                    <Link to={`/multi-step-form/${parseInt(step) - 1}`}>
                        <button className="btn go-back">Go Back</button>
                    </Link>
                    {
                        !selectedPlanName ?
                        <Link to={`/multi-step-form/${parseInt(step)}`}>
                            <button className="btn next">Next Step</button>
                        </Link> :
                        <Link to={`/multi-step-form/${parseInt(step) + 1}`}>
                            <button className="btn next">Next Step</button>
                        </Link>
                    }
                </>
            }
            {
                parseInt(step) === number.three && 
                <>
                    <Link to={`/multi-step-form/${parseInt(step) - 1}`}>
                        <button className="btn go-back">Go Back</button>
                    </Link>
                    {
                        selectedOns.length === 0 ?
                        <Link to={`/multi-step-form/${parseInt(step)}`}>
                            <button className="btn next">Next Step</button>
                        </Link> :
                        <Link to={`/multi-step-form/${parseInt(step) + 1}`}>
                            <button className="btn next">Next Step</button>
                        </Link>
                    }
                </>
            }
            {
                parseInt(step) === number.four && 
                <>
                    <Link to={`/multi-step-form/${parseInt(step) - 1}`}>
                        <button className="btn go-back">Go Back</button>
                    </Link>
                    <Link to={`/multi-step-form/${parseInt(step) + 1}`}>
                        <button className="btn confirm">Confirm</button>
                    </Link>
                </>
            }
        </div>
    )
}


export default NextStopButton;


                    


                    

