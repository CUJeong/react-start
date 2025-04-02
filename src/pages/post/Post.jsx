import { useNavigate, Link } from "react-router-dom";
import "./Post.css";

function Post() {
    // localStorage 를 활용한 CRUD 페이지
    const navigate = useNavigate();

    // localStorage.getItem("postData") 가 null 인 경우에는 postData에 빈 배열 [] 을 담음
    let postData = JSON.parse(localStorage.getItem("postData")) || [];

    // 최신순으로 정렬
    postData.sort((a, b) => {
        return b.no - a.no;
    });

    return (
        <div className="post-container">
            <table className="post-list">
                <thead>
                    <tr>
                        {/* 인라인 스타일 넣기 */}
                        <th style={{ width: "10%" }}>번호</th>
                        <th>제목</th>
                        <th style={{ width: "20%" }}>날짜</th>
                    </tr>
                </thead>
                <tbody>
                    {postData.length > 0 ? (
                        postData.map((post) => (
                            // 이전에는 key에 index 를 넣었지만 비추방식이므로, 게시글의 PK값을 key 속성에 반영
                            <tr key={post.no}>
                                <td>{post.no}</td>
                                <td>
                                    <Link
                                        to={`/PostDetail/${post.no}`}
                                        className="list-title"
                                    >
                                        {post.title}
                                    </Link>
                                </td>
                                <td>{post.date}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={3}>등록된 게시글이 없습니다.</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className="post-btn-box">
                {/* 글쓰기 시 PostWrite 페이지로 이동 */}
                <button
                    className="post-btn"
                    onClick={() => {
                        navigate("/postWrite");
                    }}
                >
                    글쓰기
                </button>
            </div>
        </div>
    );
}

export default Post;
