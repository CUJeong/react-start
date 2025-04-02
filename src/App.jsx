import "./App.css";
import Home from "./pages/home/Home";
import Post from "./pages/post/Post";
import PostWrite from "./pages/post/PostWrite";
import PostDetail from "./pages/post/PostDetail";
import PostEdit from "./pages/post/PostEdit";
import Lotto from "./pages/lotto/Lotto";
import logo from "./assets/logo.png"; // assets 폴더 내 이미지 파일 가져오기
import {
    BrowserRouter,
    HashRouter,
    Routes,
    Route,
    Link,
} from "react-router-dom";

function App() {
    return (
        <HashRouter>
            <div className="container">
                {/* JSX 내부 주석 */}
                {/* JSX 내부에는 최외곽을 감싸는 하나의 태그가 존재하는 상태여야함 */}
                {/* App.css 에 지정한 클래스 적용시 className 속성에 부여 */}
                {/* 네비게이션 만들기 */}
                <div className="navigation">
                    {/* 캔바 로고 에서 로고 제작 후 public 에 넣음 */}
                    {/* src= 에 "" 없음 (html과 유사할뿐 같다고 보면 안됨)  */}
                    {/* 로고 이미지 클릭시에는 홈으로 이동 */}
                    <Link to="/">
                        <img className="logo" src={logo} alt="" />
                    </Link>
                    <div className="menu-box">
                        {/* SPA에서 페이지 전환시 a태그가 아닌 Link 태그 이용 */}
                        <Link to="/post">감성포스트</Link>
                        <Link to="/lotto">감성로또</Link>
                    </div>
                </div>

                {/* 라우팅 영역 */}
                <Routes>
                    {/* 오늘의 한줄감성 남기기 (홈화면) */}
                    <Route path="/" element={<Home />} />
                    {/* 감성로또 */}
                    <Route path="/lotto" element={<Lotto />} />
                    {/* 감성포스트 */}
                    <Route path="/post" element={<Post />} />
                    {/* 포스트작성 */}
                    <Route path="/postWrite" element={<PostWrite />} />
                    {/* 포스트 상세. 상세 페이지 번호가 파라미터로 넘어오므로 path에 추가(path variable) */}
                    <Route path="/postDetail/:no" element={<PostDetail />} />
                    {/* 포스트 수정 */}
                    <Route path="/postEdit/:no" element={<PostEdit />} />
                </Routes>
            </div>
        </HashRouter>
    );
}

// 다른 파일에서 App.jsx 를 불러다 사용하는 경우 function App()을 기준으로 사용
export default App;
