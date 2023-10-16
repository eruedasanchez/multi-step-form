import './StepContainer.css';
import { useEffect, useState } from 'react';
import { number, stepHeaders } from '../../resources/resources.js';
import StepHeader from '../StepHeader/StepHeader';
import StepOne from '../StepOne/StepOne';
import StepTwo from '../StepTwo/StepTwo';
import StepThree from '../StepThree/StepThree';
import StepFour from '../StepFour/StepFour';

const StepContainer = ({step}) => {
    const [selectedPlanName, setSelectedPlanName] = useState(null);
    const [selectedPlanPrice, setSelectedPlanPrice] = useState(null);
    const [planMonthly, setPlanMonthly] = useState(true);

    const handleToggle = () => {
        setPlanMonthly(!planMonthly);
    };
    
    const handlePlanSelect = (planName, planPrice) => {
        setSelectedPlanName(planName);
        setSelectedPlanPrice(planPrice);
    };
    
    const [selectedOns, setSelectedOns] = useState([]);

    const handleCheckboxSelect = (title, price) => {
        setSelectedOns(prevSelectedOns => {
            const isSelected = prevSelectedOns.some(ons => ons.title === title);
    
            if (isSelected) {
                // Se elimina el elemento del estado
                const updatedOns = prevSelectedOns.filter(ons => ons.title !== title);
                return updatedOns;
            } else {
                // Se Agrega el elemento al estado
                const newSelectedOns = [...prevSelectedOns, { title, price }];
                console.log("Updated Ons (After Selection):", newSelectedOns);
                return newSelectedOns;
            }
        });
    };
    
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
                    selectedPlanName={selectedPlanName}
                    selectedPlanPrice={selectedPlanPrice}
                    planMonthly={planMonthly}
                    handleToggle={handleToggle}
                    handlePlanSelect={handlePlanSelect}
                />
            }
            {
                parseInt(step) === number.three && 
                <StepThree
                    step={step}
                    handleCheckboxSelect={handleCheckboxSelect}
                    selectedOns={selectedOns}
                />
            }
            { 
                parseInt(step) === number.four && 
                <StepFour
                    step={step}
                    selectedPlanName={selectedPlanName}
                    selectedPlanPrice={selectedPlanPrice}
                    planMonthly={planMonthly}
                    selectedOns={selectedOns}
                />
            }
        </div>
    )
}

export default StepContainer;