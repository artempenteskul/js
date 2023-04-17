'use strict';

const postsJSON = [
    '{"postId":1355,"commentsQuantity":5}',
    '{"postId":5131,"commentsQuantity":13}',
    '{"postId":6134,"commentsQuantity":2}',
    '{"postId":2351,"commentsQuantity":8}',
]

const posts = postsJSON.map(JSON.parse);

console.log(posts);
console.log(posts[1]['postId']);
console.log(posts[posts.length - 1]['commentsQuantity']);
