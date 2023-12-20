import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ManPage from './components/ManPage'; // ManPage 컴포넌트 임포트
import WomanPage from './components/WomanPage';
import MainPage from './MainPage';

import './Common.css'; // 전역 CSS 파일 임포트


function App() {
  return (
    
    <div className="container">
    <div className="content">
    
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/man" element={<ManPage />} />
        <Route path="/woman" element={<WomanPage />} />
      </Routes>
    </Router>
      {/* 여기에 컨텐츠 내용 */}
      
     
    
    </div>
  </div>
  );
}

export default App;