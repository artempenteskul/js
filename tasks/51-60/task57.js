'use strict';


function processPosts(posts) {
    const processedPosts = []
    posts.forEach(el => {
        const {postId, author: postAuthor, commentsQty: postCommentsQty = 0} = el;
        processedPosts.push({postId: postId + 1000, postAuthor, postCommentsQty});
    })

    return processedPosts;
}

const testPosts = [{postId: 234, author: 'robd', commentsQty: 5,}, {postId: 823, author: 'sady'}, {postId: 161, author: 'merryl', commentsQty: 8}]

const processedPosts = processPosts(testPosts)
console.log(processedPosts)

console.log(testPosts)
