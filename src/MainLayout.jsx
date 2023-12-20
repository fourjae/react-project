import React from 'react';
import './MainLayout.css'; // CSS 파일 임포트

function MainLayout() {
  return (
    <div className="container">
      <div className="content">
        {/* 중앙에 위치할 컨텐츠 */}
        <h1>메인 컨텐츠</h1>
        <p>이곳에 원하는 내용을 추가하세요.</p>
        {/* 기타 내용 */}
      </div>
    </div>
  );
}

export default MainLayout;