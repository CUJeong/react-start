import "./PostWrite.css";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { currentDate } from "../common/common";

function PostWrite() {
    // Home.jsx 에서 했던 방식
    const titleRef = useRef();

    // 일반적인 방식
    const [content, setContent] = useState('');

    const navigate = useNavigate();

    const writeDo = () => {
        const title = titleRef.current.value;

        console.log(title);
        console.log(content);

        let temp = {};
        temp["title"] = title;
        temp["content"] = content;
        temp["date"] = currentDate();

        let postData = JSON.parse(localStorage.getItem("postData")) || [];
        temp["no"] = postData.length + 1;

        postData.push(temp);

        // 게시글 추가
        localStorage.setItem("postData", JSON.stringify(postData));

        // 포스트 화면으로 이동
        navigate("/Post");
    };

    return (
        <div className="post-write-container">
            <div>
                <input className="write-title" type="text" ref={titleRef} />
            </div>
            <div>
                <textarea className="write-content" onChange={(e)=>{
                    // 비추 방식
                    // console.log(event.target.value);
                    // 일반적인 방식
                    console.log(e.target.value);
                    // textarea에 타이핑할때마다 실행되며 그때마다 content 값을 업데이트함
                    setContent(e.target.value);
                }}></textarea>
            </div>
            <div className="write-btn-box">
                {/* 공통적으로 쓰이는 버튼 스타일은 index.css에 기입한 후 그냥 사용하면 됨 */}
                <button className="btn-empty" onClick={() => navigate("/Post")}>
                    취소
                </button>
                <button className="btn-full" onClick={writeDo}>
                    등록
                </button>
            </div>
        </div>
    );
}

export default PostWrite;
