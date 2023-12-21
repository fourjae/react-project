import React, { useState } from 'react';
import Progress from './Progress'; // Progress 컴포넌트 임포트
import './../css/ManPage.css'; // CSS 스타일시트 임포트
import './../css/CommonPage.css';

function ManPage() {
  
  const totalQuestions = 5;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [sliderValue, setSliderValue] = useState(5); // 초기값을 중간값으로 설정
  const progress = (currentQuestionIndex / totalQuestions) * 100;
  const questions = [
    "당신의 나이는 어떻게 되나요?",
    "0부터 10까지, 당신의 만족도를 평가해주세요.",
    "여가 시간에 주로 무엇을 하나요?",
    "여가 시간2에 주로 무엇을 하나요?",
    "여가 시간33에 주로 무엇을 하나요?",
    "여가 시간444에 주로 무엇을 하나요?",
    "여가 시간555에 주로 무엇을 하나요?",
  ];

  const handleAnswer = () => {
    setAnswers({ ...answers, [currentQuestionIndex]: sliderValue });
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSliderValue(5); // 다음 질문을 위해 슬라이더 값을 중간값으로 재설정
    }
  };

  const isSliderQuestion = currentQuestionIndex === 1; // 슬라이더 질문인지 확인


  if (currentQuestionIndex >= totalQuestions) {
    return (
      <div>
        <Progress progress={100} />
        <div className="survey-complete">설문조사가 완료되었습니다. 응답해주셔서 감사합니다.</div>
      </div>
    );
  }

  return (
    <div className="survey-container">
      <Progress progress={progress} />
      <div className="question">{questions[currentQuestionIndex]}</div>
      {isSliderQuestion ? (
        <div className="slider-container">
          <div className="slider-labels">
            <span>낮음</span>
            <span>보통</span>
            <span>높음</span>
          </div>
          <input
            type="range"
            min="0"
            max="10"
            value={sliderValue}
            className="slider"
            id="myRange"
            onChange={(e) => setSliderValue(e.target.value)}
          />
          <div className="slider-ticks">
            {Array.from({ length: 11 }, (_, i) => (
              <span key={i}></span>
            ))}
          </div>
        </div>
      ) : (
        <>
          <button className="button" onClick={() => setSliderValue('Yes')}>예</button>
          <button className="button" onClick={() => setSliderValue('No')}>아니오</button>
        </>
      )}  
      <button className="button" onClick={handleAnswer}>다음</button>
    </div>
  );
}

export default ManPage;