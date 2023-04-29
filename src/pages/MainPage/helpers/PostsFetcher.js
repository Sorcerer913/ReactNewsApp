// export const MultiPostFetcher = (postStartNum, postEndNum, callback) => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(response => response.json())
//         .then(json => {
//             const sliced = json.slice(postStartNum, postEndNum)
//             callback(sliced, json.length)
//         })
//
// }
//
// export const PostAuthorNameFetcher = (userId, callback) => {
//     fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//         .then((response) => response.json())
//         .then((json) => {
//             callback(json.name)
//         })
// }

export const MultiPostFetcher = (postStartNum, postEndNum, callback) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
            return {sliced: json.slice(postStartNum, postEndNum), fullLength: json.length}
        })
        .then(data => {
            let promises = new Array(data.sliced.length)
            for (let i = 0; i < data.sliced.length; i++) {
                promises[i] = fetch(`https://jsonplaceholder.typicode.com/users/${data.sliced[i].userId}`)
                    .then((response) => response.json())
                    .then((userJson) => {
                        return {
                            id: data.sliced[i].id,
                            title: data.sliced[i].title,
                            author: userJson.name,
                            authorId: data.sliced[i].userId,
                            // body: data.sliced[i].body,
                            path: `/post/${data.sliced[i].id}`
                        }
                    })
            }
            // Could be better
            return Promise.all([Promise.all(promises), new Promise((res) => res(data.fullLength))])
        })
        .then(data => {
            callback(data[0], data[1])
    });
}