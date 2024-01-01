import React from 'react';


function SurveyResults({ location }) {
  const { answers } = location.state || {};

  return (
    <div>
      <h1>설문 결과</h1>
      <ul>
        {answers && Object.entries(answers).map(([questionId, answer], index) => (
          <li key={index}>질문 {questionId}: {answer}</li>
        ))}
      </ul>
    </div>
  );
}

export default SurveyResults;