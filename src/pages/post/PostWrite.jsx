import "./PostWrite.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { currentDate } from "../common/common";

function PostWrite() {
    const titleRef = useRef();

    const contentRef = useRef();

    const navigate = useNavigate();

    const writeDo = () => {
        const title = titleRef.current.value;
        const content = contentRef.current.value;

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
                <textarea className="write-content" ref={contentRef}></textarea>
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
