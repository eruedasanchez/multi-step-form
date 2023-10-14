import './StepContainer.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { stepHeaders, number } from '../../resources/resources.js';
import StepHeader from '../StepHeader/StepHeader';
import StepOne from '../StepOne/StepOne';
import StepTwo from '../StepTwo/StepTwo';
import StepThree from '../StepThree/StepThree';
import StepFour from '../StepFour/StepFour';

const StepContainer = ({step}) => {

    const [personalInfo, setPersonalInfo] = useState({ clientName: "", clientEmail: "", clientPhone: ""});
    const [fieldsStatus, setFieldsStatus] = useState({ emptyName: false, emptyEmail: false, emptyPhone: false });

    const handlePersonalInfo = event => {
        setPersonalInfo({...personalInfo, [event.target.name]: event.target.value.trim()});
    }
    
    const allowNextStep = () => {
        setPersonalInfo(personalInfo);
    }

    useEffect(() => {
        setFieldsStatus(
            { 
                emptyName: personalInfo.clientName === "", 
                emptyEmail: personalInfo.clientEmail === "",
                emptyPhone: personalInfo.clientPhone === ""
            }
        );
    }, [personalInfo])
    
    
    return (
        <div className="container-form">
            <StepHeader title={stepHeaders[parseInt(step)-1].title} subtitle={stepHeaders[parseInt(step)-1].subtitle}/>
            
            {(parseInt(step) === number.one) && <StepOne fieldsStatus={fieldsStatus} handlePersonalInfo={handlePersonalInfo} />} 
            {(parseInt(step) === number.two) && <StepTwo/>}
            {(parseInt(step) === number.three) && <StepThree/>}
            {(parseInt(step) === number.four) && <StepFour/>}
            
            <div className="form__buttons">
                {
                    (parseInt(step) >= number.one && parseInt(step) < number.five) &&
                    <Link to={`/multi-step-form/${parseInt(step) - 1}`}>
                        <button className={parseInt(step) === number.one ? "btn go-back hidden" : "btn go-back"}>Go Back</button>
                    </Link>
                }
                {
                    (fieldsStatus.emptyName || fieldsStatus.emptyEmail || fieldsStatus.emptyPhone) ?
                    <Link to={`/multi-step-form/${parseInt(step)}`}>
                        {
                            parseInt(step) === number.four ? <button className="btn confirm" onClick={allowNextStep}>Confirm</button> : <button className="btn next" onClick={allowNextStep}>Next Step</button>
                        }
                    </Link> :
                    <Link to={`/multi-step-form/${parseInt(step) + 1}`}>
                        {
                            parseInt(step) === number.four ? <button className="btn confirm" onClick={allowNextStep}>Confirm</button> : <button className="btn next" onClick={allowNextStep}>Next Step</button>
                        }
                    </Link>
                }
            </div>
        </div>
    )
}

export default StepContainer;