import './StepOne.css';

const StepOne = ({fieldsStatus, handlePersonalInfo}) => {
    return (
        <div className="form__fields">
        <div className="field">
            <div className="field__header">
                <p className="field__title">Name</p>
                {fieldsStatus.emptyName && <p className="field__empty">This field is required</p>}
            </div>
            <input className={fieldsStatus.emptyName ? "field__input empty" : "field__input"} name="clientName" type="text" placeholder="e.g Stephen King" onChange={handlePersonalInfo}/>
        </div>
        <div className="field">
            <div className="field__header">
                <p className="field__title">Email Address</p>
                {fieldsStatus.emptyEmail && <p className="field__empty">This field is required</p>}
            </div>
            <input className={fieldsStatus.emptyEmail ? "field__input empty" : "field__input"} name="clientEmail" type="email" placeholder="e.g stephenking@loren.com" onChange={handlePersonalInfo}/>
        </div>
        <div className="field">
            <div className="field__header">
                <p className="field__title">Phone Number</p>
                {fieldsStatus.emptyPhone && <p className="field__empty">This field is required</p>}
            </div>
            <input className={fieldsStatus.emptyPhone ? "field__input empty" : "field__input"} name="clientPhone" type="text" placeholder="e.g +1 234 567 890" onChange={handlePersonalInfo}/>
        </div>
    </div>
    )
}

export default StepOne;