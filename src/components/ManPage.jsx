import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Progress from './Progress'; // Progress 컴포넌트 임포트
import './../css/ManPage.css'; // CSS 스타일시트 임포트
import './../css/CommonPage.css';

function ManPage() {

  const totalQuestions = 8;

  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(
    parseInt(localStorage.getItem('currentQuestionIndex')) || 0
  );

  const [answers, setAnswers] = useState(
    JSON.parse(localStorage.getItem('answers')) || {}
  );
  const [surveyCompleted, setSurveyCompleted] = useState(false);

  const [sliderValue, setSliderValue] = useState(8); // 초기값을 중간값으로 설정
  const progress = (currentQuestionIndex / totalQuestions) * 100;
  const questions = [
    { id: 1, text: "당신의 나이는 어떻게 되나요?", options: ["20대", "30대", "40대 이상"] },
    { id: 2, text: "가장 선호하는 여가 활동은 무엇인가요?", options: ["독서", "영화 감상", "운동"] },
    { id: 3, text: "좋아하는 음식은 무엇인가요?", options: ["한식", "양식", "중식"] },
    { id: 4, text: "여가 시간에 주로 무엇을 하나요1?", options: ["한식", "양식", "중식"] },
    { id: 5, text: "여가 시간에 주로 무엇을 하나요2?", options: ["한식", "양식", "중식"] },
    { id: 6, text: "여가 시간에 주로 무엇을 하나요3?", options: ["한식", "양식", "중식"] },
    { id: 7, text: "여가 시간에 주로 무엇을 하나요4?", options: ["한식", "양식", "중식"] },
    { id: 8, text: "여가 시간에 주로 무엇을 하나요5?", options: ["한식", "양식", "중식"] }
  ];

  // 사용자의 진행 상태를 로컬 스토리지에 저장합니다.
  useEffect(() => {
    localStorage.setItem('currentQuestionIndex', currentQuestionIndex);
    localStorage.setItem('answers', JSON.stringify(answers));
  }, [currentQuestionIndex, answers]);

   // 설문 완료 시 초기화 및 리다이렉트
   useEffect(() => {
    if (currentQuestionIndex >= totalQuestions) {
      setSurveyCompleted(true);
      localStorage.removeItem('currentQuestionIndex');
      localStorage.removeItem('answers');

      setTimeout(() => {
        navigate('/SurveyResults');
      }, 1000); // 1초 후에 '/last' 경로로 이동
    }
  }, [currentQuestionIndex, totalQuestions, navigate]);

  const handleAnswer = (selectedOption) => {
    setAnswers({ ...answers, [questions[currentQuestionIndex].id]: selectedOption });
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // 모든 질문에 답변했을 경우의 처리
    }
  };
  const handleNextAnswer = () => {
    setAnswers({ ...answers, [currentQuestionIndex]: sliderValue });
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSliderValue(5); // 다음 질문을 위해 슬라이더 값을 중간값으로 재설정
    }
  };

  // const isSliderQuestion = currentQuestionIndex === 1; // 슬라이더 질문인지 확인

   const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  if (currentQuestionIndex >= totalQuestions) {
    return (
      <div>
        <Progress progress={100} />
        <div className="survey-complete">설문이 완료되었습니다. 잠시 후 결과가 나타납니다.</div>
      </div>
    );
  }

  if (surveyCompleted) {
    return <div>설문이 완료되었습니다. 잠시 후 결과가 나타납니다.</div>;
  }

  return (
    <div className="survey-container">
      <Progress progress={progress} />
      <div>
        {questions[currentQuestionIndex].options.map((option, index) => (
        <button key={index} className="button" onClick={() => handleAnswer(option)}>{option}
      </button>))}
      </div>

      {/* {isSliderQuestion ? (
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
      )}   */}
      <div className="navigation-buttons">
        {currentQuestionIndex > 0 && (
          <button className="button" onClick={handlePrevious}>이전</button>
        )}
        <div className="button-spacer"></div>
      <button className="button" onClick={handleNextAnswer}>다음</button>
    </div>
    </div>
  );
}

export default ManPage;