import React, {useState} from 'react';
import Option51 from "./1stOption/Option5-1";
import Option52 from "./2ndOption/Option5-2";
import {MainOptionInterface} from "../../../interfaces/funnelInterface";
import GoBack from "../../GoBack/GoBack";

const FifthOption = ({setShowMain, setShowCurrent}: MainOptionInterface) => {
    const [showOptions, setShowOptions] = useState(true)
    const [showFirstOption, setShowFirstOption] = useState(false)
    const [showSecondOption, setShowSecondOption] = useState(false)

    function handleBackButton() {
        setShowMain(true)
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
                        <div onClick={handleFirstOptionClick} className="problemBox">Varva skystis</div>
                        <div onClick={handleSecondOptionClick} className="problemBox">Dūmyja neįprastai</div>
                    </div>
                </div>
            </div>}
            {showFirstOption && <Option51 setShowPrevious={setShowOptions} setShowCurrent={setShowFirstOption}/>}
            {showSecondOption && <Option52 setShowPrevious={setShowOptions} setShowCurrent={setShowSecondOption}/>}
        </div>
    );
};

export default FifthOption;