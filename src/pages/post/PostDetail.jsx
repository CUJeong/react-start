import { useNavigate, useParams } from "react-router-dom";
import "./PostDetail.css";
import { getPost } from "./postUtils";

function PostDetail() {
    const navigate = useNavigate();

    // 파라미터로 넘어온 no 값 받기 (App.jsx 에서 라우팅에 Path Variable 설정 해놓음)
    const params = useParams();
    console.log(params);

    const post = getPost(params.no);
    console.log(post);

    return (
        <div className="post-detail-container">
            <h2 className="detail-title">{post.title}</h2>
            <div className="detail-content">{post.content}</div>
            <div className="detail-btn-box">
                <button className="btn-empty" onClick={() => navigate("/Post")}>
                    목록
                </button>
                <button
                    className="btn-full"
                    onClick={() => navigate(`/PostEdit/${params.no}`)}
                >
                    수정
                </button>
            </div>
        </div>
    );
}

export default PostDetail;
