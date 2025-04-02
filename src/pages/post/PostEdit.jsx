import "./PostWrite.css";
import { useRef } from "react";
import { getPost, getPostData } from "./postUtils";
import { useNavigate, useParams } from "react-router-dom";

function PostEdit() {
    const titleRef = useRef();

    const contentRef = useRef();

    const navigate = useNavigate();

    const params = useParams();
    const post = getPost(params.no);

    window.onbeforeunload = () => {
        return "";
    };

    const writeDo = () => {
        const title = titleRef.current.value;
        const content = contentRef.current.value;

        post.title = title;
        post.content = content;
        console.log(post);

        // 게시글 수정 후 로컬스토리지에 반영
        editPost(post);

        console.log(getPostData());

        // 상세 화면으로 이동
        navigate(`/PostDetail/${post.no}`);
    };

    return (
        <div className="post-write-container">
            <div>
                {/* 그냥 value에 값 넣으면 읽기전용 경고 발생 */}
                <input
                    className="write-title"
                    type="text"
                    ref={titleRef}
                    defaultValue={post.title}
                />
            </div>
            <div>
                {/* 마찬가지로 textarea도 defaultValue에 값을 넣어야 읽기전용이 되지 않음 */}
                <textarea
                    className="write-content"
                    ref={contentRef}
                    defaultValue={post.content}
                ></textarea>
            </div>
            <div className="write-btn-box">
                {/* 공통적으로 쓰이는 버튼 스타일은 index.css에 기입한 후 그냥 사용하면 됨 */}
                <button
                    className="btn-empty"
                    onClick={() => navigate(`/PostDetail/${params.no}`)}
                >
                    취소
                </button>
                <button className="btn-full" onClick={writeDo}>
                    등록
                </button>
            </div>
        </div>
    );
}

function editPost(json) {
    // 로컬스토리지의 데이터에서 no가 일치하는 데이터를 찾아서 파라미터로 넘어온 데이터로 변경
    const postData = getPostData();
    for (let i = 0; i < postData.length; i++) {
        if (postData[i].no == json.no) {
            postData[i] = json;
        }
    }
    localStorage.setItem("postData", JSON.stringify(postData));
}

export default PostEdit;
