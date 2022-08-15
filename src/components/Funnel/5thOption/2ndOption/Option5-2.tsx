import {useState} from 'react';
import LeaveComment from "../../leaveComment/LeaveComment";
import {FunnelOptionPropsInterface} from "../../../../interfaces/funnelInterface";
import GoBack from "../../../GoBack/GoBack";

const Option52 = ({setShowPrevious, setShowCurrent}: FunnelOptionPropsInterface) => {
    const [showOptions, setShowOptions] = useState(true)
    const [leaveComment, setLeaveComment] = useState(false)

    function handleBackButton() {
        setShowPrevious(true)
        setShowCurrent(false)
    }

    const handleLeaveCommentClick = () => {
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
                        <div onClick={handleLeaveCommentClick} className="problemBox">Dumai kyla iš po varyklio</div>
                        <div onClick={handleLeaveCommentClick} className="problemBox">Juodi dumai iš duslintuvo</div>
                        <div onClick={handleLeaveCommentClick} className="problemBox">Balti dūmai ir duslintuvo</div>
                        <div onClick={handleLeaveCommentClick} className="problemBox">Melynos spalvos dūmai iš
                            duslintuvo
                        </div>
                    </div>
                </div>
            </div>}
            {leaveComment && <LeaveComment setShowPrevious={setShowOptions} setShowCurrent={setLeaveComment}/>}
        </div>
    );
};

export default Option52;