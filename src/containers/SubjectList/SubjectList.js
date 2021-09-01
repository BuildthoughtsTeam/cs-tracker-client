import React from 'react'
import Subject from '../../components/Subject/Subject'

const SubjectList = () => {
  const subjectData = [
    {
      id: 1,
      name: 'Data Structures and Algorithms',
      description: 'Mastering DSA like a pro',
      topicsCount: 1,
      imageUrl:
        'https://blog-c7ff.kxcdn.com/blog/wp-content/uploads/2019/11/Banner-Blog-1A-1.jpg',
    },
    
  ]

  return (
    <div>
      {subjectData.map(
        ({
          id,
          name,
          description,
          topicsCount,
          imageUrl,
        }) => {
          return (
            <Subject
              key={id}
              id={id}
              name={name}
              description={description}
              topicsCount={topicsCount}
              imageUrl={imageUrl}
            />
          )
        }
      )}
    </div>
  )
}

export default SubjectList
