import React from 'react';
import questions from '../data/questionsResponses.json';
import QuestionReponse from './QuestionReponse';
import Projets from './Projets';

const Section = ({ start, end }) => {
  return (
    <div className="section">
      {questions.slice(start, end + 1).map((item, index) => (
        <div key={index}>
          <QuestionReponse
            question={item.question}
            reponse={item.reponse}
          />
          {item.question.includes("Exercice 3") && <Projets />}
        </div>
      ))}
    </div>
  );
};

export default Section;
