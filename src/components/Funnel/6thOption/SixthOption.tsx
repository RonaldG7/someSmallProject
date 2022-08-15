import {useState} from 'react';
import LeaveComment from "../leaveComment/LeaveComment";
import Option62 from "./2ndOption/Option6-2";
import Option63 from "./3rdOption/Option6-3";
import Option64 from "./4thOption/Option6-4";
import Option65 from "./5thOption/Option6-5";
import Option66 from "./6thOption/Option6-6";
import {MainOptionInterface} from "../../../interfaces/funnelInterface";
import GoBack from "../../GoBack/GoBack";

const SixthOption = ({setShowMain, setShowCurrent}: MainOptionInterface) => {
    const [showOptions, setShowOptions] = useState(true)
    const [showFirstOption, setShowFirstOption] = useState(false)
    const [showSecondOption, setShowSecondOption] = useState(false)
    const [showThirdOption, setShowThirdOption] = useState(false)
    const [showFourthOption, setShowFourthOption] = useState(false)
    const [showFifthOption, setShowFifthOption] = useState(false)
    const [showSixthOption, setShowSixthOption] = useState(false)
    const [showSeventhOption, setShowSeventhOption] = useState(false)

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

    const handleSixthOptionClick = () => {
        setShowOptions(false)
        setShowSixthOption(true)
    }

    const handleSeventhOptionClick = () => {
        setShowOptions(false)
        setShowSeventhOption(true)
    }

    return (
        <div className="funnelContainer">
            {showOptions && <div className="problemBoxContainer">
                <GoBack onClick={handleBackButton}/>
                <div className="d-flex flex-column align-items-center"><h2 className="funnelHeader">
                    Pasirinkite vieną iš galimų variantų:
                </h2>
                    <div>
                        <div onClick={handleFirstOptionClick} className="problemBox">Dunksėdamas varyklyje</div>
                        <div onClick={handleSecondOptionClick} className="problemBox">Kažkas ūžia</div>
                        <div onClick={handleThirdOptionClick} className="problemBox">Variklis tiksi</div>
                        <div onClick={handleFourthOptionClick} className="problemBox">Bilda kai vaižiuoju per duobes
                        </div>
                        <div onClick={handleFifthOptionClick} className="problemBox">Cipimas užvedus varyklį arba
                            pradėjus važiuoti
                        </div>
                        <div onClick={handleSixthOptionClick} className="problemBox">Žemas garsas, didejantis paspaudus
                            akseleratokiaus pedalą
                        </div>
                        <div onClick={handleSeventhOptionClick} className="problemBox">Padidėjęs automobilio išmetimo
                            sistemos garsas
                        </div>
                    </div>
                </div>
            </div>}
            {showFirstOption && <LeaveComment setShowPrevious={setShowOptions} setShowCurrent={setShowFirstOption}/>}
            {showSecondOption && <Option62 setShowPrevious={setShowOptions} setShowCurrent={setShowSecondOption}/>}
            {showThirdOption && <Option63 setShowPrevious={setShowOptions} setShowCurrent={setShowThirdOption}/>}
            {showFourthOption && <Option64 setShowPrevious={setShowOptions} setShowCurrent={setShowFourthOption}/>}
            {showFifthOption && <Option65 setShowPrevious={setShowOptions} setShowCurrent={setShowFifthOption}/>}
            {showSixthOption && <Option66 setShowPrevious={setShowOptions} setShowCurrent={setShowSixthOption}/>}
            {showSeventhOption && <LeaveComment setShowPrevious={setShowOptions} setShowCurrent={setShowSeventhOption}/>}
        </div>
    );
};

export default SixthOption;