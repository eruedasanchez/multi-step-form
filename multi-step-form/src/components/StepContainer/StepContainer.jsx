import './StepContainer.css';
import { useState } from 'react';
import { number, stepHeaders } from '../../resources/resources';
import StepHeader from '../StepHeader/StepHeader';
import StepOne from '../StepOne/StepOne';
import StepTwo from '../StepTwo/StepTwo';
import StepThree from '../StepThree/StepThree';
import StepFour from '../StepFour/StepFour';
import Acknowledgment from '../Acknowledgment/Acknowledgment';

const StepContainer = ({step}) => {
    
    const [selectedPlanName, setSelectedPlanName] = useState(null);
    const [selectedPlanPrice, setSelectedPlanPrice] = useState(null);
    const [planMonthly, setPlanMonthly] = useState(true);
    const [selectedOns, setSelectedOns] = useState([]);

    const handleToggle = () => {
        setPlanMonthly(!planMonthly);
    };
    
    const handlePlanSelect = (planName, planPrice) => {
        setSelectedPlanName(planName);
        setSelectedPlanPrice(planPrice);
    };
    
    const handleCheckboxSelect = (title, price) => {
        setSelectedOns(prevSelectedOns => {
            const isSelected = prevSelectedOns.some(ons => ons.title === title);
    
            if (isSelected) {
                const updatedOns = prevSelectedOns.filter(ons => ons.title !== title);
                return updatedOns;
            } else {
                const newSelectedOns = [...prevSelectedOns, { title, price }];
                return newSelectedOns;
            }
        });
    };
    
    return (
        <div className="container-form">
            {
                parseInt(step) === number.one && 
                <>
                    <StepHeader 
                        title={stepHeaders[0].title} 
                        subtitle={stepHeaders[0].subtitle}
                    />
                    <StepOne step={step}/>
                </>
                
            } 
            {
                parseInt(step) === number.two && 
                <>
                    <StepHeader 
                        title={stepHeaders[1].title} 
                        subtitle={stepHeaders[1].subtitle}
                    />
                    <StepTwo 
                        step={step}
                        selectedPlanName={selectedPlanName}
                        selectedPlanPrice={selectedPlanPrice}
                        planMonthly={planMonthly}
                        handleToggle={handleToggle}
                        handlePlanSelect={handlePlanSelect}
                    />
                </>
            }
            {
                parseInt(step) === number.three &&
                <>
                    <StepHeader 
                            title={stepHeaders[2].title} 
                            subtitle={stepHeaders[2].subtitle}
                    /> 
                    <StepThree
                        step={step}
                        planMonthly={planMonthly}
                        handleCheckboxSelect={handleCheckboxSelect}
                        selectedOns={selectedOns}
                    />
                </>
            }
            { 
                parseInt(step) === number.four &&
                <>
                    <StepHeader 
                        title={stepHeaders[3].title} 
                        subtitle={stepHeaders[3].subtitle}
                    />
                    <StepFour
                        step={step}
                        planMonthly={planMonthly}
                        selectedPlanName={selectedPlanName}
                        selectedPlanPrice={selectedPlanPrice}
                        selectedOns={selectedOns}
                    />
                </>
            }
            { parseInt(step) === number.five && <Acknowledgment/> }
        </div>
    )
}

export default StepContainer;