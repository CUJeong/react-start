import { useState } from "react";
import "./Lotto.css";
import Modal from "../../components/modal/Modal";

function Lotto() {
    // 생성된 로또 배열
    // 다시 뽑기 하면 배열이 변하고 화면에 나타낼 것이므로 useState으로 관리
    const [lottoArray, setLottoArray] = useState(makeLottoArray());
    console.log(lottoArray);

    // 뽑기 횟수
    // 다시 뽑을때마다 기회가 차감되며 화면에 나타낼 것이므로 useState으로 관리
    const [count, setCount] = useState(3);
    console.log(count);

    // 다시뽑기 함수
    const retry = () => {
        // JSX 내부가 아니여서 if문과 for문 사용 가능
        // 모달창 띄우기
        if (count == 0) {
            setModalShow(true);
            return;
        }
        setCount(count - 1);

        let newArray = makeLottoArray();

        setWinCount(calWinCount(newArray));
        setLottoArray(newArray);
    };

    // 당첨 개수 계산 함수
    const calWinCount = (array) => {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            if (winLotto.includes(array[i])) {
                sum++;
            }
        }
        return sum;
    };

    // 당첨 번호
    const winLotto = [7, 11, 14, 21, 26, 34];

    // 당첨 개수 (과제)
    const [winCount, setWinCount] = useState(calWinCount(lottoArray));

    // 화면에 나타낼 Modal 창에 대한 상태 관리
    const [isModalShow, setModalShow] = useState(false);

    return (
        // SPA이기 때문에 Lotto.css 클래스명이 App.css 클래스명과 충돌
        // css를 모듈로 적용하여 불러다 사용시 해결됨
        <div className="lotto">
            <h2 style={{ textAlign: "center", color: "orange" }}>
                오늘의 운세!!
            </h2>
            <div className="num-box">
                {/* 지금같은 경우에서 key에 num값을 넣어도 문제가 없음 */}
                {/* 내부에서 idx 를 쓰지 않으면 제거해도 됨 */}
                {/* 처음 lottoArray가 [1, 2, 3, 4, 5, 6] 이고 */}
                {/* 다시뽑기한 lottoArray가 [1, 2, 7, 8, 9, 10] 일때 */}
                {/* key가 변경된 4개의 항목만 리랜더링이 실질적으로 동작 */}
                {/* 앞의 2개는 리랜더링이 되지 않으므로 랜더링 시간이 줄어듬 */}
                {lottoArray.map((num) => (
                    // if문을 사용할 수 없어서 삼항연산자 적용
                    <div
                        className={`num ${winLotto.includes(num) ? "same" : ""}`}
                        key={num}
                    >
                        {num}
                    </div>
                ))}
            </div>
            <div className="retry-box">
                <span>{winCount}개 일치</span>
                <span>기회 {count}회</span>
                <button onClick={retry}>다시뽑기</button>
            </div>
            {isModalShow ? (
                <Modal
                    content={"기회를 모두 소진하셨습니다."}
                    onClose={() => {
                        setModalShow(false);
                    }} // setModalShow 를 false로 바꾸는 익명함수를 넘겨줌
                />
            ) : null}
        </div>
    );
}

function makeLottoArray() {
    let tempArray = [];

    while (tempArray.length < 6) {
        let randNum = Math.floor(Math.random() * 45) + 1;

        if (!tempArray.includes(randNum)) {
            tempArray.push(randNum);
        }
    }

    tempArray.sort((a, b) => {
        return a - b;
    });

    return tempArray;
}

export default Lotto;
