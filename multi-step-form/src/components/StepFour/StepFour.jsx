import './StepFour.css';

const StepFour = ({step, selectedPlan}) => {
    return (
        <div className="container-checkbox">
            <div className="container-plan-ons">
                <div className="plan-checkbox">
                    <div className="plan-checkbox__detail">
                        <p className="plan-checkbox__detail-title">{selectedPlan}</p>
                        {/* <a className="plan-checkbox__detail-change" href="#">Change</a> */}
                    </div>
                    <div className="plan-checkbox__price">
                        <p>$9/mo</p>
                    </div>
                </div>
                <div className="ons__checkbox">
                    <div className="ons__checkbox-detail">
                        <p className="ons__checkbox-detail--title">Online service</p>
                        <p className="ons__checkbox-detail--price">+$1/mo</p>
                    </div>
                    <div className="ons__checkbox-detail">
                        <p className="ons__checkbox-detail--title">Larger storage</p>
                        <p className="ons__checkbox-detail--price">+$1/mo</p>
                    </div>
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