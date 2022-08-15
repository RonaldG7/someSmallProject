import React, {useState} from 'react';
import Option621 from "./Option6-2-1";
import Option622 from "./Option6-2-2";
import {FunnelOptionPropsInterface} from "../../../../interfaces/funnelInterface";
import GoBack from "../../../GoBack/GoBack";

const Option62 = ({setShowPrevious, setShowCurrent}: FunnelOptionPropsInterface) => {
    const [showOptions, setShowOptions] = useState(true)
    const [showFirstOption, setShowFirstOption] = useState(false)
    const [showSecondOption, setShowSecondOption] = useState(false)

    function handleBackButton() {
        setShowPrevious(true)
        setShowCurrent(false)
    }

    const handleFirstOptionClick = () => {
        setShowOptions(false)
        setShowFirstOption(true)
    }
    const handleSecondOptionClick = () => {
        setShowOptions(false)
        setShowSecondOption(true)
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
                        <div onClick={handleFirstOptionClick} className="problemBox">Stovint</div>
                        <div onClick={handleSecondOptionClick} className="problemBox">Važiuojant</div>
                    </div>
                </div>
            </div>}
            {showFirstOption && <Option621 setShowPrevious={setShowOptions} setShowCurrent={setShowFirstOption}/>}
            {showSecondOption && <Option622 setShowPrevious={setShowOptions} setShowCurrent={setShowSecondOption}/>}
        </div>
    );
};

export default Option62;