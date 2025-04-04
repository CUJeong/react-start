import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// index.html 내 div 태그를 선택해서 내부에 App 을 그리도록 적용
createRoot(document.getElementById('root')).render(
  // StrictMode 는 배포할때 영향을 주지 않으며, 개발 단계에서 문제점을 찾아줌 (실행을 두번씩 해서 조금 거슬림)
  <StrictMode>
    <App />
  </StrictMode>,
)
