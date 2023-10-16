import './StepThree.css';
import { onsArr } from '../../resources/resources';
import StepThreeOns from '../StepThreeOns/StepThreeOns';
import NextStepButton from '../NextStepButton/NextStepButton';
import iconCheckmark from './icon-checkmark.svg';

const StepThree = ({step, planMonthly, selectedOns, handleCheckboxSelect}) => {
    return (
        <>
            <div className="container-ons">
                <StepThreeOns 
                    icon={iconCheckmark}
                    title="Online Service"
                    subtitle="Access to multiplayer games"
                    price={planMonthly ? "+$1/mo" : "+$10/yr"}
                    selected={selectedOns.some(ons => ons.title === onsArr.onlineService)}
                    handleCheckboxSelect={handleCheckboxSelect}
                />
                <StepThreeOns 
                    icon={iconCheckmark}
                    title="Larger storage"
                    subtitle="Extra 1TB or cloud save"
                    price={planMonthly ? "+$2/mo" : "+$20/yr"}
                    selected={selectedOns.some(ons => ons.title === onsArr.largerStorage)}
                    handleCheckboxSelect={handleCheckboxSelect}
                />
                <StepThreeOns 
                    icon={iconCheckmark}
                    title="Customizable profile"
                    subtitle="Custom theme on your profile"
                    price={planMonthly ? "+$2/mo" : "+$20/yr"}
                    selected={selectedOns.some(ons => ons.title === onsArr.customizableProfile)}
                    handleCheckboxSelect={handleCheckboxSelect}
                />
            </div>
            <NextStepButton 
                step={step}
                selectedOns={selectedOns}
            />
        </>
    )
}

export default StepThree;