import React, { useEffect } from 'react';
import { annotate } from 'rough-notation';

const QuestionReponse = ({ question, reponse }) => {
  useEffect(() => {
    const strikeElements = document.querySelectorAll('.strike');
    strikeElements.forEach((element) => {
      const annotation = annotate(element, {
        type: 'strike-through',
        color: 'var(--custom-red)',
        strokeWidth: 1,
        iterations: 1
      });
      annotation.show();
    });

    const crossedOffElements = document.querySelectorAll('.crossed-off');
    crossedOffElements.forEach((element) => {
      const annotation = annotate(element, {
        type: 'crossed-off',
        color: 'var(--custom-red)',
        strokeWidth: 1      
      });
      annotation.show();
    });
  }, [reponse]);

  return (
    <div className="question-reponse">
      <h2 className="question font-merriweather">{question}</h2>
      <p className="reponse font-gloria" dangerouslySetInnerHTML={{ __html: reponse }}></p>
    </div>
  );
};

export default QuestionReponse;
