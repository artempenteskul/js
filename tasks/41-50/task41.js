'use strict';

const posts = [
    { postId: 1355, commentsQuantity: 5 },
    { postId: 5131, commentsQuantity: 13 },
    { postId: 6134, commentsQuantity: 2 },
]


function findPostById(id, postList) {
    console.log(`Looking for post with id - ${id} ...`)
    for (let p of postList) {
        if (p.postId === id) {
            return p;
        }
    }
}


console.log(findPostById(6134, posts));
console.log(findPostById(4511, posts));
