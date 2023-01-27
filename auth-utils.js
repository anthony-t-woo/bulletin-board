const SUPABASE_URL = 'https://xymrqgrvifsouxppmhgn.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5bXJxZ3J2aWZzb3V4cHBtaGduIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQyNTU0ODMsImV4cCI6MTk4OTgzMTQ4M30.4HEq-XtAOWoYJ8ORsZ4vhxk-S8ri8ZYiulgXBYkUSZY';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function signUpUser(email, password) {
    const response = await client.auth.signUp({
        email: email,
        password: password,
    });
    if (response.error) {
        alert('That email is taken. Please try a different one');
    }
    return response.user;
}

export async function signInUser(email, password) {
    console.log(client.auth);
    const response = await client.auth.signIn({
        email: email,
        password: password,
    });
    if (response.error) {
        alert('incorrect login credentials');
    }
    return response.user;
}

export async function checkAuth() {
    if (getUser()) {
        location.replace('../');
    }
}
export async function checkAuthFromCreate() {
    if (!getUser()) {
        location.replace('../auth');
    }
}

export async function redirectIfLoggedIn() {
    if (getUser()) {
        location.replace('../');
    }
}

export async function logout() {
    await client.auth.signOut();
    // location.replace('../');
}
