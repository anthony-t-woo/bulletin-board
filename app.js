/* Imports */
import { getUser, logout } from './auth-utils.js';
import { getPosts } from './fetch-utils.js';
import { renderPost } from './render-utils.js';

/* Get DOM Elements */
const postsContainerEl = document.querySelector('.posts-container');
const authButton = document.querySelector('#auth-button');
const createPostEl = document.querySelector('#create-post-card-prompt');

/* State */
let postData = [];
/* Events */
window.addEventListener('load', async () => {
    if (getUser()) {
        authButton.textContent = 'log out';
        createPostEl.textContent = 'Create New Post';
    }
    const response = await getPosts();
    postData = response;
    displayPosts();
});
authButton.addEventListener('click', async () => {
    if (getUser()) {
        await logout();
        authButton.textContent = 'log in';
        createPostEl.textContent = 'Log In To Create A New Post';
    } else {
        location.replace('./auth');
    }
});

/* Display Functions */
function displayPosts() {
    for (let post of postData) {
        const postEl = renderPost(post);
        postsContainerEl.append(postEl);
    }
}

// (don't forget to call any display functions you want to run on page load!)
