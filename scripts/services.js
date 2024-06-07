const URL = 'https://7c1aebadbca19d81.mokky.dev';

async function getPosts() {
    const response = await fetch(`${URL}/posts`);
    const posts = await response.json();
    return posts;
}
  
async function getPost(id) {
    const response = await fetch(`${URL}/posts/${id}`);
    const post = await response.json();
    return post;
}

async function createPost(post) {
    fetch(`${URL}/posts`, { 
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
            'Content-Type': 'application/json'
        },
    });
}

export {
    getPost,
    getPosts,
    createPost,
};
