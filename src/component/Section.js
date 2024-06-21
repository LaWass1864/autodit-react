import React from 'react';
import questions from '../data/questionsResponses.json';
import QuestionReponse from '../component/QuestionReponse';

const Section = () => {
  return (
    <div className="section">
      {questions.map((item, index) => (
        <QuestionReponse 
          key={index} 
          question={item.question} 
          reponse={item.reponse} 
        />
      ))}
    </div>
  );
}

export default Section;
