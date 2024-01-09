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
    {title: 'How can I learn JS?', postId: 3421, comments: 25},
    {title: 'Is JS popular?', postId: 5216, comments: 3},
    {title: 'What is the difference between React and Angular?', postId: 8135, comments: 12},
]
  
console.log(getPopularPostsIds(inputPosts, 10)) // [3421, 8135]
console.log(getPopularPostsIds(inputPosts, 15)) // [3421]
console.log(getPopularPostsIds(inputPosts, 50)) // []
  