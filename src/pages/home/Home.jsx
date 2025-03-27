import { useState, useRef } from "react";
import "./Home.css";
import Modal from "../../components/modal/Modal";

// npm install prettier
function Home() {
    // 오늘 날짜를 가져온 후 MM.dd 형태로 변환
    // 함수로 만들어서 사용
    let todayStr = makeDate();
    console.log(todayStr);

    // 한줄 감성 데이터
    // useState() 내부 값은 첫번째 변수에 할당됨
    // 두번째 변수는 첫번째 변수 값이 변할때 사용할 함수
    const [dataArray, setDataArray] = useState([
        {
            date: "2025.02.24",
            text: "꿈이 자라난 어른이 될테니",
        },
        {
            date: "2025.02.23",
            text: "잔디는 꽃이 되고 싶어할까",
        },
    ]);

    // input 태그에 id처럼 부여할 참조값
    const inputText = useRef();

    // 버튼 클릭시 실행될 함수 선언
    const addText = () => {
        console.log("버튼 클릭");

        // input 태그에 접근해서 value 값을 가져오기
        console.log(inputText);
        console.log(inputText["current"]);
        console.log(inputText["current"].value);

        // JSON 객체 생성
        let json = {};
        json["date"] = makeDate();
        json["text"] = inputText.current.value;

        // 배열 앞에 JSON 객체 추가하면서 새로운 배열 객체 리턴
        let newArray = [json, ...dataArray];
        console.log(newArray); // 데이터 추가 시 화면에 반영하려면 dataArray를 state 으로 관리

        // setDataArray에는 메모리 주소값이 다른 새로운 배열 객체가 들어가야 자동으로 리랜더링됨
        setDataArray(newArray);
        setModalShow(true);
    };

    // Lotto 에서 Modal 추가 후 Home 에도 Modal 추가하기(과제)
    const [isModalShow, setModalShow] = useState(false);

    return (
        <div className="today">
            {/* App() 함수 내부 변수를 JSX에 반영 */}
            {/* JSX에서 inline style 사용하는 경우(비추)  */}
            {/* JSON 객체로 삽입하며, 스타일명은 카멜식, 스타일값은 문자열로 적용(자바스크립트이기 때문에) */}
            <h2 style={{ textAlign: "center", color: "hotpink" }}>
                {todayStr} 오늘의 한줄감성
            </h2>
            <div className="today-input-box">
                {/* input 버튼에 참조값 추가 */}
                <input ref={inputText} type="text" />
                {/* 등록 버튼을 누르면 dataArray에 데이터 추가 */}
                <button onClick={addText}>등록</button>
            </div>

            {/* 한줄감성 목록 */}
            <div className="today-list-box">
                {/* <div className="today-list">
            <div>2025.02.10</div>
            <div>흙은 나무를 싫어할까</div>
          </div>
          <div className="today-list">
            <div>2025.02.09</div>
            <div>동물도 늦잠을 자고 싶어할까</div>
          </div> */}
                {/* dataArray를 기반으로 현재 위치에 태그 생성 */}
                {dataArray.map((data, index) => (
                    // key 는 화면에 나타나지 않지만 내부적으로 각 태그에 key를 부여해서
                    // 이후 dataArray가 변경될 때 다른 key값을 가지는 부분만 리랜더링함
                    <div className="today-list" key={index}>
                        <div>{data["date"]}</div>
                        <div>{data["text"]}</div>
                    </div>
                ))}
            </div>

            {isModalShow ? (
                <Modal
                    content={"등록되었습니다."}
                    onClose={() => {
                        setModalShow(false);
                    }} // setModalShow 를 false로 바꾸는 익명함수를 넘겨줌
                />
            ) : null}
        </div>
    );
}

function makeDate() {
    let today = new Date();
    let year = String(today.getFullYear()).padStart(2, "0");
    let month = String(today.getMonth()).padStart(2, "0");
    let date = String(today.getDate()).padStart(2, "0");
    return `${year}.${month}.${date}`;
}

export default Home;
