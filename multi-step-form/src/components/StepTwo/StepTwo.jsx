import './StepTwo.css';
import { plan } from '../../resources/resources.js'; 
import StepTwoPlan from '../StepTwoPlan/StepTwoPlan';
import NextStepButton from '../NextStepButton/NextStepButton';
import iconAdvanced from './icon-advanced.svg';
import iconArcade from './icon-arcade.svg';
import iconPro from './icon-pro.svg';

const StepTwo = ({step, selectedPlanName, planMonthly, handleToggle, handlePlanSelect}) => {
    return (
        <>
            <div className="container-plans">
                <StepTwoPlan 
                    icon={iconArcade} 
                    planName="Arcade" 
                    planPrice={planMonthly ? "$9/mo" : "$90/yr"} 
                    selected={selectedPlanName === plan.arcade}
                    handlePlanSelect={handlePlanSelect}
                    planMonthly={planMonthly}
                />
                <StepTwoPlan 
                    icon={iconAdvanced} 
                    planName="Advanced" 
                    planPrice={planMonthly ? "$12/mo" : "$120/yr"}
                    selected={selectedPlanName === plan.advanced}
                    handlePlanSelect={handlePlanSelect}
                    planMonthly={planMonthly}

                />
                <StepTwoPlan 
                    icon={iconPro} 
                    planName="Pro" 
                    planPrice={planMonthly ? "$15/mo" : "$150/yr"}
                    selected={selectedPlanName === plan.pro}
                    handlePlanSelect={handlePlanSelect}
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
            <NextStepButton 
                step={step}
                selectedPlanName={selectedPlanName}
            />
        </>
    )
}

export default StepTwo;