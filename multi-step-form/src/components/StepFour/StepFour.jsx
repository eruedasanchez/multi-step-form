import './StepFour.css';

const StepFour = ({step, selectedPlanName, selectedPlanPrice, planMonthly, selectedOns}) => {
    return (
        <div className="container-checkbox">
            <div className="container-plan-ons">
                <div className="plan-checkbox">
                    <div className="plan-checkbox__detail">
                        <p className="plan-checkbox__detail-title">{selectedPlanName} ({planMonthly ? "Monthly" : "Yearly"})</p>
                        {/* <a className="plan-checkbox__detail-change" href="#">Change</a> */}
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
                    <p className="total__detail">Total (per month)</p>
                    <p className="total__price">+$12/mo</p>
                </div>
            </div>
        </div>
    )
}

export default StepFour;