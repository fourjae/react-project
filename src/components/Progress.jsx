import React from 'react';
import './../css/Progress.css'; // Progress 컴포넌트 전용 CSS

function Progress({ progress }) {
    
  const progressBarColor = getProgressBarColor(progress);

  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${progress}%`, backgroundColor: progressBarColor }}></div>
      <div className="progress-percent">{`${progress.toFixed(0)}%`}</div>
    </div>
  );
}

function getProgressBarColor(progress) {
  if (progress < 34) return '#ff3e3e'; // 낮은 진행률: 빨간색
  if (progress < 67) return '#ffc107'; // 중간 진행률: 노란색
  return '#4caf50'; // 높은 진행률: 녹색
}

export default Progress;
