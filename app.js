/* Imports */
import { getUser, logout } from './auth-utils.js';
import { getPosts } from './fetch-utils.js';
import { renderPost } from './render-utils.js';

/* Get DOM Elements */
const postsContainerEl = document.querySelector('.posts-container');
const authButton = document.querySelector('#auth-button');
const createButton = document.querySelector('#create-button');
/* State */
let postData = [];
/* Events */
window.addEventListener('load', async () => {
    if (getUser()) {
        authButton.textContent = 'log out';
    }
    const response = await getPosts();
    postData = response;
    displayPosts();
});
authButton.addEventListener('click', async () => {
    if (getUser()) {
        await logout();
        authButton.textContent = 'log in';
    } else {
        location.replace('./auth');
    }
});
createButton.addEventListener('click', () => {
    location.replace('./create');
});
/* Display Functions */
function displayPosts() {
    for (let post of postData) {
        const postEl = renderPost(post);
        postsContainerEl.append(postEl);
    }
}

// (don't forget to call any display functions you want to run on page load!)
