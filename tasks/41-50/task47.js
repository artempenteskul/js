'use strict';

function getPopularPostsIds(posts, minimalCommentsQty) {
    const popularPostsIds = []
    for (let p of posts) {
        if (p.comments >= minimalCommentsQty) {
            popularPostsIds.push(p.postId);
        }
    }
    return popularPostsIds;
}

const inputPosts = [
    {
      title: 'Как быстро выучить JavaScript?',
      postId: 3421,
      comments: 25,
    },
    {
      title: 'Где используется JavaScript?',
      postId: 5216,
      comments: 3,
    },
    {
      title: 'Какая разница между React и Angular?',
      postId: 8135,
      comments: 12,
    },
]
  
console.log(getPopularPostsIds(inputPosts, 10)) // [3421, 8135]
console.log(getPopularPostsIds(inputPosts, 15)) // [3421]
console.log(getPopularPostsIds(inputPosts, 50)) // []
  