import './StepContainer.css';
import { useEffect, useState } from 'react';
import { number, stepHeaders } from '../../resources/resources.js';
import StepHeader from '../StepHeader/StepHeader';
import StepOne from '../StepOne/StepOne';
import StepTwo from '../StepTwo/StepTwo';
import StepThree from '../StepThree/StepThree';
import StepFour from '../StepFour/StepFour';

const StepContainer = ({step}) => {
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [planMonthly, setPlanMonthly] = useState(true);

    const handleToggle = () => {
        setPlanMonthly(!planMonthly);
    };
    
    const handlePlanSelect = planName => {
        setSelectedPlan(planName);
    };

    
    const [selectedOns, setSelectedOns] = useState(null);

    const handleCheckboxSelect = title => {
        setSelectedOns(title);
    }
    
    return (
        <div className="container-form">
            <StepHeader title={stepHeaders[parseInt(step)-1].title} subtitle={stepHeaders[parseInt(step)-1].subtitle}/>
            {
                parseInt(step) === number.one && 
                <StepOne step={step}/>
            } 
            {
                parseInt(step) === number.two && 
                <StepTwo 
                    step={step}
                    selectedPlan={selectedPlan}
                    planMonthly={planMonthly}
                    handleToggle={handleToggle}
                    handlePlanSelect={handlePlanSelect}
                />
            }
            {
                parseInt(step) === number.three && 
                <StepThree
                    step={step}
                    selectedOns={selectedOns} 
                    handleCheckboxSelect={handleCheckboxSelect}
                />
            }
            { 
                parseInt(step) === number.four && 
                <StepFour
                    step={step}
                    selectedPlan={selectedPlan}
                />
            }
        </div>
    )
}

export default StepContainer;