import './StepTwo.css';
import { plan } from '../../resources/resources.js'; 
import { useState } from 'react';
import StepTwoPlan from '../StepTwoPlan/StepTwoPlan';
import iconAdvanced from './icon-advanced.svg';
import iconArcade from './icon-arcade.svg';
import iconPro from './icon-pro.svg';

const StepTwo = () => {
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [planMonthly, setPlanMonthly] = useState(true);

    const handleToggle = () => {
        setPlanMonthly(!planMonthly);
    };
    
    const handlePlanSelect = planName => {
        setSelectedPlan(planName);
    };

    return (
        <>
            <div className="container-plans">
                <StepTwoPlan 
                    icon={iconArcade} 
                    planName="Arcade" 
                    planPrice={planMonthly ? "$9/mo" : "$90/yr"} 
                    selected={selectedPlan === plan.arcade}
                    onSelect={handlePlanSelect}
                    planMonthly={planMonthly}
                />
                <StepTwoPlan 
                    icon={iconAdvanced} 
                    planName="Advanced" 
                    planPrice={planMonthly ? "$12/mo" : "$120/yr"}
                    selected={selectedPlan === plan.advanced}
                    onSelect={handlePlanSelect}
                    planMonthly={planMonthly}

                />
                <StepTwoPlan 
                    icon={iconPro} 
                    planName="Pro" 
                    planPrice={planMonthly ? "$15/mo" : "$150/yr"}
                    selected={selectedPlan === plan.pro}
                    onSelect={handlePlanSelect}
                    planMonthly={planMonthly}

                />
            </div>
            <div className="container-slider">
                <p className={`container-slider__plan ${planMonthly ? 'selected' : ''}`}>Monthly</p>
                <div onClick={handleToggle} className="container-circle">
                    <div onClick={handleToggle} className={`circle ${planMonthly ? 'monthly' : 'yearly'}`}></div>
                </div>
                <p className={`container-slider__plan ${!planMonthly ? 'selected' : ''}`}>Yearly</p>
            </div>
        </>
    )
}

export default StepTwo;