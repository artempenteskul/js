const newPost = (post, addedAt = Date()) => ({...post, addedAt})

const firstPost = {
    id: 1,
    author: 'Artem',
}

firstPostWithDate = newPost(firstPost);

console.log(firstPost);
console.log(firstPostWithDate);
