import {useState} from 'react';
import Option31 from "./1stOption/Option3-1";
import Option33 from "./3rdOption/Option3-3";
import Option3456 from "./4&5&6Option/Option3-4&5&6";
import LeaveComment from "../leaveComment/LeaveComment";
import {MainOptionInterface} from "../../../interfaces/funnelInterface";
import GoBack from "../../GoBack/GoBack";

const ThirdOption = ({setShowMain, setShowCurrent}: MainOptionInterface) => {
    const [showOptions, setShowOptions] = useState(true)
    const [showFirstOption, setShowFirstOption] = useState(false)
    const [showSecondOption, setShowSecondOption] = useState(false)
    const [showThirdOption, setShowThirdOption] = useState(false)
    const [show_4_5_6_Option, setShow_4_5_6_Option] = useState(false)

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
    const handle_4_5_6_OptionClick = () => {
        setShowOptions(false)
        setShow_4_5_6_Option(true)
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
                        <div onClick={handleFirstOptionClick} className="problemBox">Automobilis vibruoja arba purtosi
                            pastoviai
                        </div>
                        <div onClick={handleSecondOptionClick} className="problemBox">Automobilis linguoja iš šono į
                            šoną
                        </div>
                        <div onClick={handleThirdOptionClick} className="problemBox">Paspaudus stabdžių pedalas
                            vibroja
                        </div>
                        <div onClick={handle_4_5_6_OptionClick} className="problemBox">Vibruoja vairas</div>
                        <div onClick={handle_4_5_6_OptionClick} className="problemBox">Automobilį staigiai traukia į
                            šoną
                        </div>
                        <div onClick={handle_4_5_6_OptionClick} className="problemBox">Automobilį lėtai traukia į šoną
                        </div>
                    </div>
                </div>
            </div>}
            {showFirstOption && <Option31 setShowPrevious={setShowOptions} setShowCurrent={setShowFirstOption}/>}
            {showSecondOption && <LeaveComment setShowPrevious={setShowOptions} setShowCurrent={setShowSecondOption}/>}
            {showThirdOption && <Option33 setShowPrevious={setShowOptions} setShowCurrent={setShowThirdOption}/>}
            {show_4_5_6_Option && <Option3456 setShowPrevious={setShowOptions} setShowCurrent={setShow_4_5_6_Option}/>}
        </div>);
};

export default ThirdOption;