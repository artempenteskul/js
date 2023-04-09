class Comment {
    constructor(text) {
        this.text = text;
        this.votesQty = 0;
    }

    upvote() {
        this.votesQty += 1;
    }

    static mergeComments(first, second) {
        return `${first} - ${second}`
    }
}

const firstComment = new Comment('first comment');

console.log(firstComment);
console.log(firstComment.text);
firstComment.upvote();
console.log(firstComment.votesQty);

//

console.log(firstComment instanceof Comment);
console.log(firstComment instanceof Object);

//

console.log(firstComment.hasOwnProperty('text'));
console.log(firstComment.hasOwnProperty('votesQty'));
console.log(firstComment.hasOwnProperty('upvote'));

// class static methods

console.log(Comment.mergeComments('test1', 'test2'));
