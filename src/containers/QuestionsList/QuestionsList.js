import React from 'react'
import QuestionComponent from '../../components/QuestionComponent/QuestionComponent'

const QuestionsList = () => {
  const questionsData = [
    {
      id: 1,
      name: 'Reverse an array',
      difficultyLevel: 'easy',
      isCompleted: false,
      dateOfCompletion: '13/7/2021',
      dateOfRevision: '15/7/2021',
      onClickLink: 'www.google.com',
    },
    {
      id: 2,
      name: 'Rotate an array',
      difficultyLevel: 'easy',
      isCompleted: false,
      dateOfCompletion: '13/7/2021',
      dateOfRevision: '15/7/2021',
      onClickLink: 'www.google.com',
    },
  ]

  return (
    <div>
      {questionsData.map(
        ({
          id,
          name,
          difficultyLevel,
          isCompleted,
          dateOfCompletion,
          dateOfRevision,
          onClickLink,
        }) => {
          return (
            <QuestionComponent
              key={id}
              id={id}
              name={name}
              isCompleted={isCompleted}
              difficultyLevel={difficultyLevel}
              dateOfCompletion={dateOfCompletion}
              dateOfRevision={dateOfRevision}
              onClickLink={onClickLink}
            />
          )
        }
      )}
    </div>
  )
}

export default QuestionsList
