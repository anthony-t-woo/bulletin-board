import { checkAuth, redirectIfLoggedIn, signInUser, getUser } from '../auth-utils.js';

const signInForm = document.getElementById('sign-in');

window.addEventListener('load', async () => {
    await checkAuth();
});

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(signInForm);
    await signInUser(formData.get('email'), formData.get('password'));
    redirect();
});

async function redirect() {
    const user = await getUser();
    if (user) {
        redirectIfLoggedIn();
    }
}
