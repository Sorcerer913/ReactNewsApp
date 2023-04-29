export const CommentsFetcher = (postNum, callback) => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postNum}`)
        .then(response => response.json())
        .then(json => {
            callback(json)
        })
}