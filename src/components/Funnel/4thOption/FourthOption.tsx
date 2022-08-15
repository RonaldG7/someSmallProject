import React, {useState} from 'react';
import Option128 from "./1&2&8Options/Option1&2&8";
import Option43 from "./3rdOption/Option4-3";
import LeaveComment from "../leaveComment/LeaveComment";
import {MainOptionInterface} from "../../../interfaces/funnelInterface";
import GoBack from "../../GoBack/GoBack";

const FourthOption = ({setShowMain, setShowCurrent}: MainOptionInterface) => {
    const [showOptions, setShowOptions] = useState(true)
    const [show_1_2_8_Option, setShow_1_2_8_Option] = useState(false)
    const [showThirdOption, setShowThirdOption] = useState(false)
    const [show_4_5_6_7_Option, setShow_4_5_6_7_Option] = useState(false)

    function handleBackButton() {
        setShowMain(true)
        setShowCurrent(false)
    }

    const handle_1_2_8_OptionClick = () => {
        setShowOptions(false)
        setShow_1_2_8_Option(true)
    }

    const handle_4_5_6_7_OptionClick = () => {
        setShowOptions(false)
        setShow_4_5_6_7_Option(true)
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
                        <div onClick={handle_1_2_8_OptionClick} className="problemBox">Check engine</div>
                        <div onClick={handle_1_2_8_OptionClick} className="problemBox">Temperatūros</div>
                        <div onClick={handleThirdOptionClick} className="problemBox">Padangų slėgio</div>
                        <div onClick={handle_4_5_6_7_OptionClick} className="problemBox">Alyvos spaudimo</div>
                        <div onClick={handle_4_5_6_7_OptionClick} className="problemBox">ABS</div>
                        <div onClick={handle_4_5_6_7_OptionClick} className="problemBox">SRS</div>
                        <div onClick={handle_4_5_6_7_OptionClick} className="problemBox">Baterijos/akumuliatoriaus</div>
                        <div onClick={handle_1_2_8_OptionClick} className="problemBox">Nežinau tiksliai</div>
                    </div>
                </div>
            </div>}
            {show_1_2_8_Option && <Option128 setShowPrevious={setShowOptions} setShowCurrent={setShow_1_2_8_Option}/>}
            {show_4_5_6_7_Option &&
                <LeaveComment setShowPrevious={setShowOptions} setShowCurrent={setShow_4_5_6_7_Option}/>}
            {showThirdOption && <Option43 setShowPrevious={setShowOptions} setShowCurrent={setShowThirdOption}/>}
        </div>
    );
};

export default FourthOption;