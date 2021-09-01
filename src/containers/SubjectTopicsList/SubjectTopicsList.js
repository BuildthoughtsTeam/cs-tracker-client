import React from 'react'
import SubjectTopicsComponent from '../../components/SubjectTopicsComponent/SubjectTopicsComponent'

const SubjectTopicsList = () => {
  const subjectTopicsData = [
    {
      id: 1,
      name: 'Array',
      description: 'Mastering Array like a pro',
      questionsCount: 10,
      imageUrl:
        'https://blog-c7ff.kxcdn.com/blog/wp-content/uploads/2019/11/Banner-Blog-1A-1.jpg',
    },
    {
      id: 2,
      name: 'Linked-List',
      description: 'Mastering Linked-List like a pro',
      questionsCount: 10,
      imageUrl:
        'https://blog-c7ff.kxcdn.com/blog/wp-content/uploads/2019/11/Banner-Blog-1A-1.jpg',
    },
    {
      id: 3,
      name: 'Stack',
      description: 'Mastering Stack like a pro',
      questionsCount: 10,
      imageUrl:
        'https://blog-c7ff.kxcdn.com/blog/wp-content/uploads/2019/11/Banner-Blog-1A-1.jpg',
    },
    {
      id: 4,
      name: 'Queue',
      description: 'Mastering Queue like a pro',
      questionsCount: 10,
      imageUrl:
        'https://blog-c7ff.kxcdn.com/blog/wp-content/uploads/2019/11/Banner-Blog-1A-1.jpg',
    },
    {
      id: 5,
      name: 'Tree',
      description: 'Mastering Tree like a pro',
      questionsCount: 10,
      imageUrl:
        'https://blog-c7ff.kxcdn.com/blog/wp-content/uploads/2019/11/Banner-Blog-1A-1.jpg',
    },
    {
      id: 6,
      name: 'Binary-Tree',
      description: 'Mastering Binary-Tree like a pro',
      questionsCount: 10,
      imageUrl:
        'https://blog-c7ff.kxcdn.com/blog/wp-content/uploads/2019/11/Banner-Blog-1A-1.jpg',
    },
    {
      id: 7,
      name: 'Binary-Search-Tree',
      description: 'Mastering Binary-Search-Tree like a pro',
      questionsCount: 10,
      imageUrl:
        'https://blog-c7ff.kxcdn.com/blog/wp-content/uploads/2019/11/Banner-Blog-1A-1.jpg',
    },
    {
      id: 8,
      name: 'Graph',
      description: 'Mastering Graph like a pro',
      questionsCount: 10,
      imageUrl:
        'https://blog-c7ff.kxcdn.com/blog/wp-content/uploads/2019/11/Banner-Blog-1A-1.jpg',
    },
    {
      id: 9,
      name: 'Hashing',
      description: 'Mastering Hashing like a pro',
      questionsCount: 10,
      imageUrl:
        'https://blog-c7ff.kxcdn.com/blog/wp-content/uploads/2019/11/Banner-Blog-1A-1.jpg',
    },
  ]

  return (
    <div>
      {subjectTopicsData.map(
        ({
          id,
          name,
          description,
          questionsCount,
          imageUrl,
        }) => {
          return (
            <SubjectTopicsComponent
              key={id}
              id={id}
              name={name}
              description={description}
              questionsCount={questionsCount}
              imageUrl={imageUrl}
            />
          )
        }
      )}
    </div>
  )
}

export default SubjectTopicsList
