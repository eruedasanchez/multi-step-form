import './StepThreeOns.css';

const StepThreeOns = ({icon, title, subtitle, price, selected, onSelect}) => {
    const handleSelectedCheckbox = () => {
        onSelect(title);
    }
    
    return (
        <button className={selected ? "btn-ons selected" : "btn-ons"}>
            <div className="ons">
                <div className="ons__detail">
                    <div onClick={handleSelectedCheckbox} className={selected ? "ons__detail-checkbox selected" : "ons__detail-checkbox"}>
                        <img src={icon} alt="icon checkmark"/>
                    </div>
                    <div className="ons__detail-info">
                        <p className="ons__detail-info--title">{title}</p>
                        <p className="ons__detail-info--subtitle">{subtitle}</p>
                    </div>
                </div>
                <div className="ons__price">
                    <p>{price}</p>
                </div>
            </div>
        </button>
    )
}

export default StepThreeOns;