import './StepThree.css';
import { ons } from '../../resources/resources';
import StepThreeOns from '../StepThreeOns/StepThreeOns';
import NextStepButton from '../NextStepButton/NextStepButton';
import iconCheckmark from './icon-checkmark.svg';

const StepThree = ({step, selectedOns, handleCheckboxSelect}) => {
    return (
        <>
            <div className="container-ons">
                <StepThreeOns 
                    icon={iconCheckmark}
                    title="Online Service"
                    subtitle="Access to multiplayer games"
                    price="+$1/mo"
                    selected={selectedOns === ons.onlineService}
                    onSelect={handleCheckboxSelect}
                />
                <StepThreeOns 
                    icon={iconCheckmark}
                    title="Larger storage"
                    subtitle="Extra 1TB or cloud save"
                    price="+$2/mo"
                    selected={selectedOns === ons.largerStorage}
                    onSelect={handleCheckboxSelect}
                />
                <StepThreeOns 
                    icon={iconCheckmark}
                    title="Customizable profile"
                    subtitle="Custom theme on your profile"
                    price="+$2/mo"
                    selected={selectedOns === ons.customizableProfile}
                    onSelect={handleCheckboxSelect}
                />
            </div>
            <NextStepButton 
                step={step}
                // selectedPlan={selectedPlan}
            />
        </>
    )
}

export default StepThree;