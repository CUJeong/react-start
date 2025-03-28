import "./Post.css";

function Post() {
    // localStorage 를 활용한 CRUD 페이지

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
                    <tr>
                        <td>2</td>
                        <td>꽃이 만개하는 봄</td>
                        <td>2025.03.26</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>꽃이 만개하는 봄</td>
                        <td>2025.03.26</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Post;
