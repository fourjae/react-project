import React from 'react';
import { useNavigate } from 'react-router-dom';

import './MainPage.css'; // 스타일시트 임포트
import './ChoiceButton.css';

function Headers() {
  let navigate = useNavigate();

  function manHandleClick() {
    navigate('/man');
  }
  function womanHandleClick() {
    navigate('/woman'); // '/create-ideal-type' 경로로 이동
  }
  return (  
<div>
  
  <div class="gradient-background">
    나의 이상형을 만들어 보세요!
  </div>

  <div class="buttons-container">
    <button class="button blue-button" onClick={manHandleClick}>남자 이상형 만들기</button>
    <button class="button red-button" onClick={womanHandleClick}>여자 이상형 만들기</button>
  </div>

</div>
  );
}


export default Headers;