import './StepOne.css';

const StepOne = () => {
    return (
        <div className="form__fields">
        <div className="field">
            <div className="field__header">
                <p className="field__title">Name</p>
                <p className="field__empty">This field is required</p>
            </div>
            <input className="field__input" type="text" placeholder="e.g Stephen King"/>
        </div>
        <div className="field">
            <div className="field__header">
                <p className="field__title">Email Address</p>
                <p className="field__empty">This field is required</p>
            </div>
            <input className="field__input" type="email" placeholder="e.g stephenking@loren.com"/>
        </div>
        <div className="field">
            <div className="field__header">
                <p className="field__title">Phone Number</p>
                <p className="field__empty">This field is required</p>
            </div>
            <input className="field__input" type="text" placeholder="e.g +1 234 567 890"/>
        </div>
    </div>
    )
}

export default StepOne;