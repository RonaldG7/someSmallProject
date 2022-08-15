import {useState} from 'react';
import GoBack from "../../../../GoBack/GoBack";
import LeaveComment from "../../../leaveComment/LeaveComment";
import {FunnelOptionPropsInterface} from "../../../../../interfaces/funnelInterface";

const Option152 = ({setShowPrevious, setShowCurrent}: FunnelOptionPropsInterface) => {
    const [showOptions, setShowOptions] = useState(true)
    const [leaveComment, setLeaveComment] = useState(false)

    function handleBackButton() {
        setShowPrevious(true)
        setShowCurrent(false)
    }

    const handleFirstLeaveCommentClick = () => {
        setShowOptions(false)
        setLeaveComment(true)
    }
    const handleSecondLeaveCommentClick = () => {
        setShowOptions(false)
        setLeaveComment(true)
    }
    const handleThirdLeaveCommentClick = () => {
        setShowOptions(false)
        setLeaveComment(true)
    }
    const handleFourthLeaveCommentClick = () => {
        setShowOptions(false)
        setLeaveComment(true)
    }

    return (
        <div className="funnelContainer">
            {showOptions && <div className="problemBoxContainer">
                <GoBack onClick={handleBackButton}/>
                <div className="d-flex flex-column align-items-center">
                    <h2 className="funnelHeader">
                        Pasirinkite vieną iš galimų variantų:
                    </h2>
                    <div>
                        <div onClick={handleFirstLeaveCommentClick} className="problemBox">Salone</div>
                        <div onClick={handleSecondLeaveCommentClick} className="problemBox">Sklinda iš ortakių</div>
                        <div onClick={handleThirdLeaveCommentClick} className="problemBox">Sklinda iš variklio srities</div>
                        <div onClick={handleFourthLeaveCommentClick} className="problemBox">Nežinau iš kur</div>
                    </div>
                </div>
            </div>}
            {leaveComment && <LeaveComment setShowPrevious={setShowOptions} setShowCurrent={setLeaveComment}/>}
        </div>
    );
};

export default Option152;