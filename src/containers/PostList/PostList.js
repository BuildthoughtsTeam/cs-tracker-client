import React from 'react'
import Post from '../../components/Post/Post'

const PostsList = () => {
  const postsData = [
    {
      id: 1,
      title: 'C is the no:1 programming language',
      description: 'C is the no:1 programming language in the world',
      author: 'Wadia college',
      date: 'September 14, 2020',
      isLiked: false,
      isShared: false,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/3/35/The_C_Programming_Language_logo.svg',
    },
    {
      id: 1,
      title: 'C is the no:1 programming language',
      description: 'C is the no:1 programming language in the world',
      author: 'Wadia college',
      date: 'September 14, 2020',
      isLiked: false,
      isShared: false,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/3/35/The_C_Programming_Language_logo.svg',
    },
    {
      id: 1,
      title: 'C is the no:1 programming language',
      description: 'C is the no:1 programming language in the world',
      author: 'Wadia college',
      date: 'September 14, 2020',
      isLiked: false,
      isShared: false,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/3/35/The_C_Programming_Language_logo.svg',
    },
    {
      id: 1,
      title: 'C is the no:1 programming language',
      description: 'C is the no:1 programming language in the world',
      author: 'Wadia college',
      date: 'September 14, 2020',
      isLiked: false,
      isShared: false,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/3/35/The_C_Programming_Language_logo.svg',
    },
    {
      id: 1,
      title: 'C is the no:1 programming language',
      description: 'C is the no:1 programming language in the world',
      author: 'Wadia college',
      date: 'September 14, 2020',
      isLiked: false,
      isShared: false,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/3/35/The_C_Programming_Language_logo.svg',
    },
    {
      id: 1,
      title: 'C is the no:1 programming language',
      description: 'C is the no:1 programming language in the world',
      author: 'Wadia college',
      date: 'September 14, 2020',
      isLiked: false,
      isShared: false,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/3/35/The_C_Programming_Language_logo.svg',
    },
    {
      id: 1,
      title: 'C is the no:1 programming language',
      description: 'C is the no:1 programming language in the world',
      author: 'Wadia college',
      date: 'September 14, 2020',
      isLiked: false,
      isShared: false,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/3/35/The_C_Programming_Language_logo.svg',
    },
    {
      id: 1,
      title: 'C is the no:1 programming language',
      description: 'C is the no:1 programming language in the world',
      author: 'Wadia college',
      date: 'September 14, 2020',
      isLiked: false,
      isShared: false,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/3/35/The_C_Programming_Language_logo.svg',
    },
    {
      id: 1,
      title: 'C is the no:1 programming language',
      description: 'C is the no:1 programming language in the world',
      author: 'Wadia college',
      date: 'September 14, 2020',
      isLiked: false,
      isShared: false,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/3/35/The_C_Programming_Language_logo.svg',
    },
    {
      id: 1,
      title: 'C is the no:1 programming language',
      description: 'C is the no:1 programming language in the world',
      author: 'Wadia college',
      date: 'September 14, 2020',
      isLiked: false,
      isShared: false,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/3/35/The_C_Programming_Language_logo.svg',
    },
  ]

  return (
    <div>
      <h3>List of posts</h3>

      {postsData.map(
        ({
          id,
          title,
          description,
          author,
          date,
          isLiked,
          isShared,
          imageUrl,
        }) => {
          return (
            <Post
              key={id}
              id={id}
              title={title}
              description={description}
              author={author}
              date={date}
              isLiked={isLiked}
              isShared={isShared}
              imageUrl={imageUrl}
            />
          )
        }
      )}
    </div>
  )
}

export default PostsList
