export const PostFetcher = (postNum, callback) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postNum}`)
        .then(response => response.json())
        .then(postJson => {
            return fetch(`https://jsonplaceholder.typicode.com/users/${postJson.userId}`)
                .then((response) => response.json())
                .then((userJson) => {
                    const postDto = {
                        id: postJson.id,
                        title: postJson.title,
                        author: userJson.name,
                        authorId: postJson.userId,
                        body: postJson.body,
                        path: `/post/${postJson.id}`
                    }
                    callback(postDto)
                })
        })

}