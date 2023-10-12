import './StepSidebarContainer.css';
import StepSidebar from '../StepSidebar/StepSidebar';

const StepSidebarContainer = () => {
    return (
    <aside className="container-steps">
        <div className="steps">
            <StepSidebar number="1" title="your info"/>
            <StepSidebar number="2" title="select plan"/>
            <StepSidebar number="3" title="add-ons"/>
            <StepSidebar number="4" title="summary"/>
        </div>
    </aside>
    )
}

export default StepSidebarContainer;