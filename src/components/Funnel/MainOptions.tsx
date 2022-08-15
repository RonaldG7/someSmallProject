import {useState} from 'react'
import FirstOption from "./1stOption/FirstOption";
import SecondOption from "./2ndOption/SecondOption";
import ThirdOption from "./3rdOption/ThirdOption";
import FourthOption from "./4thOption/FourthOption";
import FifthOption from "./5thOption/FifthOption";
import SixthOption from "./6thOption/SixthOption";

const MainOptions = () => {
    const [showMain, setShowMain] = useState(true)
    const [showFirstOption, setShowFirstOption] = useState(false)
    const [showSecondOption, setShowSecondOption] = useState(false)
    const [showThirdOption, setShowThirdOption] = useState(false)
    const [showForthOption, setShowForthOption] = useState(false)
    const [showFifthOption, setShowFifthOption] = useState(false)
    const [showSixthOption, setShowSixthOption] = useState(false)

    const handleFirstOptionClick = () => {
        setShowMain(false)
        setShowFirstOption(true)
    }
    const handleSecondOptionClick = () => {
        setShowMain(false)
        setShowSecondOption(true)
    }
    const handleThirdOptionClick = () => {
        setShowMain(false)
        setShowThirdOption(true)
    }
    const handleFourthOptionClick = () => {
        setShowMain(false)
        setShowForthOption(true)
    }
    const handleFifthOptionClick = () => {
        setShowMain(false)
        setShowFifthOption(true)
    }
    const handleSixthOptionClick = () => {
        setShowMain(false)
        setShowSixthOption(true)
    }

    return (
        <div className="funnelContainer">
            {showMain && <div className="problemBoxContainer d-flex flex-column align-items-center">
                <h2 className="funnelHeader">Daugybė servisų vienoje vietoje</h2>
                <div className="funnelHeadersCaption">Atsakykite į klausimus:</div>
                <div>
                    <div onClick={handleFirstOptionClick} className="problemBox">Keistas kvapas</div>
                    <div onClick={handleSecondOptionClick} className="problemBox">Automobilis neužsiveda</div>
                    <div onClick={handleThirdOptionClick} className="problemBox">Jaučiama vibracija</div>
                    <div onClick={handleFourthOptionClick} className="problemBox">Užsidegė lemputė prietaisų skydelyje</div>
                    <div onClick={handleFifthOptionClick} className="problemBox">Pastebėjau problemą</div>
                    <div onClick={handleSixthOptionClick} className="problemBox">Girdimas pašalinis garsas</div>
                </div>
            </div>}
            {showFirstOption && <FirstOption setShowMain={setShowMain} setShowCurrent={setShowFirstOption}/>}
            {showSecondOption && <SecondOption setShowMain={setShowMain} setShowCurrent={setShowSecondOption}/>}
            {showThirdOption && <ThirdOption setShowMain={setShowMain} setShowCurrent={setShowThirdOption}/>}
            {showForthOption && <FourthOption setShowMain={setShowMain} setShowCurrent={setShowForthOption}/>}
            {showFifthOption && <FifthOption setShowMain={setShowMain} setShowCurrent={setShowFifthOption}/>}
            {showSixthOption && <SixthOption setShowMain={setShowMain} setShowCurrent={setShowSixthOption}/>}
        </div>
    )
}

export default MainOptions