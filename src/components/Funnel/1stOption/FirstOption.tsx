import {useState} from 'react';
import GoBack from "../../GoBack/GoBack";
import Option11 from "./1stOption/Option1-1";
import Option12 from "./2ndOption/Option1-2";
import Option13 from "./3rdOption/Option1-3";
import Option14 from "./4thOption/Option1-4";
import Option15 from "./5thOption/Option1-5";
import {MainOptionInterface} from "../../../interfaces/funnelInterface";

const FirstOption = ({setShowMain, setShowCurrent}: MainOptionInterface) => {
    const [showOptions, setShowOptions] = useState(true)
    const [showFirstOption, setShowFirstOption] = useState(false)
    const [showSecondOption, setShowSecondOption] = useState(false)
    const [showThirdOption, setShowThirdOption] = useState(false)
    const [showFourthOption, setShowFourthOption] = useState(false)
    const [showFifthOption, setShowFifthOption] = useState(false)

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
    const handleThirdOptionClick = () => {
        setShowOptions(false)
        setShowThirdOption(true)
    }
    const handleFourthOptionClick = () => {
        setShowOptions(false)
        setShowFourthOption(true)
    }
    const handleFifthOptionClick = () => {
        setShowOptions(false)
        setShowFifthOption(true)
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
                        <div onClick={handleFirstOptionClick} className="problemBox">Degančio tepalo</div>
                        <div onClick={handleSecondOptionClick} className="problemBox">Pelėsio</div>
                        <div onClick={handleThirdOptionClick} className="problemBox">Kuro</div>
                        <div onClick={handleFourthOptionClick} className="problemBox">Išmetomosiomis dujomis</div>
                        <div onClick={handleFifthOptionClick} className="problemBox">Sieros ar supūvusiu kiaušiniu</div>
                    </div>
                </div>
            </div>}
            {showFirstOption && <Option11 setShowPrevious={setShowOptions} setShowCurrent={setShowFirstOption}/>}
            {showSecondOption && <Option12 setShowPrevious={setShowOptions} setShowCurrent={setShowSecondOption}/>}
            {showThirdOption && <Option13 setShowPrevious={setShowOptions} setShowCurrent={setShowThirdOption}/>}
            {showFourthOption && <Option14 setShowPrevious={setShowOptions} setShowCurrent={setShowFourthOption}/>}
            {showFifthOption && <Option15 setShowPrevious={setShowOptions} setShowCurrent={setShowFifthOption}/>}
        </div>
    );
};

export default FirstOption;