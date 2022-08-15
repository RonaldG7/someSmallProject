import {useState} from 'react';
import LeaveComment from "../leaveComment/LeaveComment";
import {MainOptionInterface} from "../../../interfaces/funnelInterface";
import GoBack from "../../GoBack/GoBack";

const SecondOption = ({setShowMain, setShowCurrent}: MainOptionInterface) => {
    const [showOptions, setShowOptions] = useState(true)
    const [leaveComment, setLeaveComment] = useState(false)

    function handleBackButton() {
        setShowMain(true)
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
                        <div onClick={handleLeaveCommentClick} className="problemBox">Pasukus raktą nieko neįvyksta
                        </div>
                        <div onClick={handleLeaveCommentClick} className="problemBox">Starteris sukasi, bet automobilis
                            nesikuria
                        </div>
                        <div onClick={handleLeaveCommentClick} className="problemBox">Variklis skleidžia ilgą
                            pasikartojantį spragtelėjimą
                        </div>
                        <div onClick={handleLeaveCommentClick} className="problemBox">Starteris sukasi, bet labai lėtai
                            ir automobilis nesikuria
                        </div>
                        <div onClick={handleLeaveCommentClick} className="problemBox">Kita</div>
                    </div>
                </div>
            </div>}
            {leaveComment && <LeaveComment setShowPrevious={setShowOptions} setShowCurrent={setLeaveComment}/>}
        </div>
    );
};

export default SecondOption;