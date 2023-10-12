import './Sidebar.css';
import StepSidebar from '../StepSidebar/StepSidebar';


const Sidebar = ({step}) => {
    return (
        <aside className="container-steps">
            <div className="steps">
                <StepSidebar stepActive={step} number="1" title="your info"/>
                <StepSidebar stepActive={step} number="2" title="select plan"/>
                <StepSidebar stepActive={step} number="3" title="add-ons"/>
                <StepSidebar stepActive={step} number="4" title="summary"/>
            </div>
        </aside>
    )
}

export default Sidebar;