import {
    checkAuth,
    redirectIfLoggedIn,
    signInUser,
    signUpUser,
    getUser,
    checkAuthFromCreate,
} from '../auth-utils.js';
import { addPost } from '../fetch-utils.js';

const createPostForm = document.getElementById('create-post');

window.addEventListener('load', async () => {
    await checkAuthFromCreate();
});

createPostForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(createPostForm);
    await addPost(formData.get('topic'), formData.get('message'), formData.get('contact'));
    location.replace('../');
});
