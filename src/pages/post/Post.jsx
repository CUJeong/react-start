import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Post.css";

function Post() {
    // localStorage 를 활용한 CRUD 페이지
    const navigate = useNavigate();

    // return 이 되어야 랜더링이 시작되는데, 이와같은 코드형태는 데이터를 다 불러올때까지 랜더링이 되지 않음
    /*

    // localStorage.getItem("postData") 가 null 인 경우에는 postData에 빈 배열 [] 을 담음
    let postData = JSON.parse(localStorage.getItem("postData")) || [];
    
    // 최신순으로 정렬
    postData.sort((a, b) => {
        return b.no - a.no;
    });

    */

    // 데이터 항목을 랜더링 하기 전에 다른 항목들은 미리 랜더링해놓고,
    // 이후 데이터를 불러와서 데이터 항목을 랜더링하는것이 사용자 입장에서 더 로딩이 빠르게 느껴짐
    // 즉, return 이 실행되어 랜더링이 끝난 후 데이터를 불러오는 코드를 작성하기 위해 useEffect를 사용함
    const [postData, setPostData] = useState([]);
    const [isAsc, setAsc] = useState(true);

    // 내부 함수는 return에 의한 랜더링이 끝난 후 실행됨
    useEffect(() => {
        console.log("useEffect 실행");
        const data = JSON.parse(localStorage.getItem("postData")) || [];
        if(isAsc){
            data.sort((a, b) => a.no - b.no);
        }else{
            data.sort((a, b) => b.no - a.no);
        }
        setPostData(data);
    }, [isAsc]);  // 두번째 파라미터에 빈 배열(의존성배열)을 넣으면 현재 페이지(Post.jsx) 진입 시 한번 실행되고 끝

    // 두번째 파라미터의 배열 내에 변수값(state)을 넣어놓으면, 변수값 변동시 useEffect의 함수가 실행됨


    return (
        <div className="post-container">
            <div className="sort-box">
                <a onClick={()=>{
                    setAsc(!isAsc);
                }}>▼ 최신순</a>
            </div>
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
                                {console.log("랜더링 중")}
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
            {console.log("랜더링 끝")}
        </div>
    );
}

export default Post;
