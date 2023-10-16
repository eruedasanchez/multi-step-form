import './StepFour.css';
import { Link } from 'react-router-dom';
import { plan } from '../../resources/resources';
import NextStepButton from '../NextStepButton/NextStepButton';

const StepFour = ({step, planMonthly, selectedPlanName, selectedPlanPrice, selectedOns}) => {

    let numberPlanPrice = 0, sumOns = 0, sumTotal = 0;
    
    if(planMonthly){
        selectedPlanName === plan.arcade ? 
            numberPlanPrice = parseInt(selectedPlanPrice.substring(1, 2)) : 
            numberPlanPrice = parseInt(selectedPlanPrice.substring(1, 3));
        
        for(const ons of selectedOns){
            sumOns += parseInt(ons.price.substring(2, 3));
        }
    } else {
        selectedPlanName === plan.arcade ? 
            numberPlanPrice = parseInt(selectedPlanPrice.substring(1, 3)) : 
            numberPlanPrice = parseInt(selectedPlanPrice.substring(1, 4));
        
        for(const ons of selectedOns){
            sumOns += parseInt(ons.price.substring(2, 4));
        }
    }
    
    sumTotal = numberPlanPrice + sumOns;
    
    return (
        <>
            <div className="container-checkbox">
                <div className="container-plan-ons">
                    <div className="plan-checkbox">
                        <div className="plan-checkbox__detail">
                            <p className="plan-checkbox__detail-title">{selectedPlanName} ({planMonthly ? "Monthly" : "Yearly"})</p>
                            <Link to="/multi-step-form/2" className="plan-checkbox__detail-change">Change</Link>
                        </div>
                        <div className="plan-checkbox__price">
                            <p>{selectedPlanPrice}</p>
                        </div>
                    </div>
                    <div className="ons__checkbox">
                        {
                            selectedOns.map(ons => {
                                return(
                                    <>
                                        <div className="ons__checkbox-detail">
                                            <p className="ons__checkbox-detail--title">{ons.title}</p>
                                            <p className="ons__checkbox-detail--price">{ons.price}</p>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="container-total">
                    <div className="total">
                        <p className="total__detail">Total (per {planMonthly ? "month" : "year"})</p>
                        <p className="total__price">+${sumTotal}/{planMonthly ? "mo" : "yr"}</p>
                    </div>
                </div>
            </div>
            <NextStepButton step={step}/>
        </>
    )
}

export default StepFour;