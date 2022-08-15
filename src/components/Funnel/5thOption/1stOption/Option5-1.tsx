import React, {useState} from 'react';
import LeaveComment from "../../leaveComment/LeaveComment";
import {FunnelOptionPropsInterface} from "../../../../interfaces/funnelInterface";
import GoBack from "../../../GoBack/GoBack";

const Option51 = ({setShowPrevious, setShowCurrent}: FunnelOptionPropsInterface) => {
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
                        <div onClick={handleLeaveCommentClick} className="problemBox">Juodas</div>
                        <div onClick={handleLeaveCommentClick} className="problemBox">Raudonai rožinis</div>
                        <div onClick={handleLeaveCommentClick} className="problemBox">Žalias skystis</div>
                        <div onClick={handleLeaveCommentClick} className="problemBox">Oranžinis skystis</div>
                        <div onClick={handleLeaveCommentClick} className="problemBox">Skaidrus kaip vanduo</div>
                        <div onClick={handleLeaveCommentClick} className="problemBox">Raudonai rudas</div>
                        <div onClick={handleLeaveCommentClick} className="problemBox">Rudas</div>
                    </div>
                </div>
            </div>}
            {leaveComment && <LeaveComment setShowPrevious={setShowOptions} setShowCurrent={setLeaveComment}/>}
        </div>
    );
};

export default Option51;