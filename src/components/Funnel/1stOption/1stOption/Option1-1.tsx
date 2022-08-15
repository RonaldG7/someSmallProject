import {useState} from 'react';
import FinalOption from "./FinalOption";
import {FunnelOptionPropsInterface} from "../../../../interfaces/funnelInterface";
import GoBack from "../../../GoBack/GoBack";

const Option11 = ({setShowPrevious, setShowCurrent}: FunnelOptionPropsInterface) => {
    const [showOptions, setShowOptions] = useState(true)
    const [showFirstOption, setShowFirstOption] = useState(false)

    function handleBackButton() {
        setShowPrevious(true)
        setShowCurrent(false)
    }

    const handleFirstOptionClick = () => {
        setShowOptions(false)
        setShowFirstOption(true)
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
                        <div onClick={handleFirstOptionClick} className="problemBox">Kai automobilis užvestas</div>
                        <div onClick={handleFirstOptionClick} className="problemBox">Visą laiką</div>
                    </div>
                </div>
            </div>}
            {showFirstOption && <FinalOption setShowPrevious={setShowOptions} setShowCurrent={setShowFirstOption}/>}
        </div>
    );
};

export default Option11;