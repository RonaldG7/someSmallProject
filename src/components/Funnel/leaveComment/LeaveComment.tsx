import {FunnelOptionPropsInterface} from "../../../interfaces/funnelInterface";
import {useState} from "react";
import GoBack from "../../GoBack/GoBack";
import ForwardTextarea from "../../UI/components/TextArea/TextArea";
import {Button} from "../../UI/components/Button/Button";

const LeaveComment = ({setShowPrevious, setShowCurrent}: FunnelOptionPropsInterface) => {

    const [showComment, setShowComment] = useState(true)

    function handleBackButton() {
        setShowPrevious(true)
        setShowCurrent(false)
        setShowComment(false)
    }

    // const handleSubmit = (e:any) => {
    //     e.preventDefault();
    //     if (validate()) {
    //         dispatch(postRequestData(requestForm.serviceType, requestForm.title, requestForm.name, requestForm.address, requestForm.email, requestForm.phone));
    //         dispatch(cleanForm());
    //     }
    // };

    return (
        <div className="funnelContainer">
            {showComment && <div className="problemBoxContainer">
                <GoBack onClick={handleBackButton}/>
                <h2 className="funnelHeader">
                    Palikite komentarą meistrui:
                    <br/>
                </h2>
                <div className="leaveComment">
                    <form
                        //    style={{position: 'relative'}} onSubmit={handleSubmit}
                    >
                        <ForwardTextarea
                            // label={t('Message')}
                            // name="Message"
                            // value={requestForm.message}
                            // onChange={messageChangeHandler}
                            // className={errors.message !== '' ? 'input-error' : ''}
                        />
                        <Button
                            priority="primary"
                            style={{width: '100%', marginTop: '2em'}}
                            // isDisabled={!accept}
                            // onClick={(e: any) => handleSubmit(e)}
                        >
                            {/*{t('Send')}*/}
                        </Button>
                    </form>
                </div>
            </div>}
        </div>
    );
};

export default LeaveComment;