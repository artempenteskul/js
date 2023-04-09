class Comment {
    constructor(text) {
        this.text = text;
        this.votesQty = 0;
    }

    upvote() {
        this.votesQty += 1;
    }
}

const firstComment = new Comment('firts comment');

console.log(firstComment);
