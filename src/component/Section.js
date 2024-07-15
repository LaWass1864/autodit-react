import React from 'react';
import questions from '../data/questionsResponses.json';
import QuestionReponse from './QuestionReponse';

// Composition de chaque page
const Section = ({ start, end }) => {
  return (
    <div className="section">
      {questions.slice(start, end + 1).map((item, index) => (
        <div key={index}>
          <QuestionReponse
            question={item.question}
            reponse={item.reponse}
          />
        </div>
      ))}
    </div>
  );
};

export default Section;
