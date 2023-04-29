const convertPostsToDTO = (data) => {
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
}

export const postsApi = {
    getAll: () => {
        // const [posts, fullLength]
        return fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                return convertPostsToDTO(data)
            })
            .then(data => {
                console.debug(`getAll data: ${data}`)
                return data
            })
    },
    getFromTo: (postStartNum, postEndNum) => {
        // const [posts, fullLength]
        return fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                return {sliced: json.slice(postStartNum, postEndNum), fullLength: json.length}
            })
            .then(data => {
                return convertPostsToDTO(data)
            })
            .then(data => {
                return data
            })
    }
}

export default postsApi;