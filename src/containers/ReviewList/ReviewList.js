import React from 'react'
import Review from '../../components/Review/Review'

const ReviewList = () => {
  const reviewData = [
    {
      id: 1,
      name: 'Tommy Vercetti',
      description: 'Superb courses',
      enrolledCoursesCount: 5,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjig4MiLPcoJy7jWapfpKvQ3BpO2mayniWXg&usqp=CAU',
    },
    {
      id: 1,
      name: 'Tommy Vercetti',
      description: 'Superb courses',
      enrolledCoursesCount: 5,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjig4MiLPcoJy7jWapfpKvQ3BpO2mayniWXg&usqp=CAU',
    },
    {
      id: 1,
      name: 'Tommy Vercetti',
      description: 'Superb courses',
      enrolledCoursesCount: 5,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjig4MiLPcoJy7jWapfpKvQ3BpO2mayniWXg&usqp=CAU',
    },
    {
      id: 1,
      name: 'Tommy Vercetti',
      description: 'Superb courses',
      enrolledCoursesCount: 5,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjig4MiLPcoJy7jWapfpKvQ3BpO2mayniWXg&usqp=CAU',
    },
    {
      id: 1,
      name: 'Tommy Vercetti',
      description: 'Superb courses',
      enrolledCoursesCount: 5,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjig4MiLPcoJy7jWapfpKvQ3BpO2mayniWXg&usqp=CAU',
    },
    {
      id: 1,
      name: 'Tommy Vercetti',
      description: 'Superb courses',
      enrolledCoursesCount: 5,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjig4MiLPcoJy7jWapfpKvQ3BpO2mayniWXg&usqp=CAU',
    },
  ]

  return (
    <div>
      <h3>List of reviews</h3>

      {reviewData.map(
        ({ id, name, description, enrolledCoursesCount, imageUrl }) => {
          return (
            <Review
              key={id}
              id={id}
              name={name}
              description={description}
              enrolledCoursesCount={enrolledCoursesCount}
              imageUrl={imageUrl}
            />
          )
        }
      )}
    </div>
  )
}

export default ReviewList
