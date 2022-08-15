import React, {useState} from 'react';
import {FunnelOptionPropsInterface} from "../../../../interfaces/funnelInterface";
import GoBack from "../../../GoBack/GoBack";
import Option121 from "./1stOption/Option1-2-1";
import Option122 from "./2ndOption/Option1-2-2";
import Option123 from "./3rdOption/Option1-2-3";

const Option12 = ({setShowPrevious, setShowCurrent}: FunnelOptionPropsInterface) => {
    const [showOptions, setShowOptions] = useState(true)
    const [showFirstOption, setShowFirstOption] = useState(false)
    const [showSecondOption, setShowSecondOption] = useState(false)
    const [showThirdOption, setShowThirdOption] = useState(false)

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
    const handleThirdOptionClick = () => {
        setShowOptions(false)
        setShowThirdOption(true)
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
                        <div onClick={handleFirstOptionClick} className="problemBox">Nesu tikras</div>
                        <div onClick={handleSecondOptionClick} className="problemBox">Kai automobilis užvestas</div>
                        <div onClick={handleThirdOptionClick} className="problemBox">Visą laiką</div>
                    </div>
                </div>
            </div>}
            {showFirstOption && <Option121 setShowPrevious={setShowOptions} setShowCurrent={setShowFirstOption}/>}
            {showSecondOption && <Option122 setShowPrevious={setShowOptions} setShowCurrent={setShowSecondOption}/>}
            {showThirdOption && <Option123 setShowPrevious={setShowOptions} setShowCurrent={setShowThirdOption}/>}
        </div>
    );
};

export default Option12;