import close from "../../assets/close.png";
import "./Modal.css";

// Modal 컴포넌트를 부르는 측에서 content에 들어갈 내용을 넘겨준다 (=props)
// Modal 컴포넌트를 부르는 측에서 Modal을 끄는 함수도 넘겨준다.
function Modal(props) {
    console.log(props);
    console.log(props.content);
    console.log(props.onClose);

    return (
        <div className="modal">
            <div className="modal-top">
                <img src={close} alt="" onClick={props.onClose} />
            </div>
            <div className="modal-content">{props.content}</div>
        </div>
    );
}

export default Modal;
