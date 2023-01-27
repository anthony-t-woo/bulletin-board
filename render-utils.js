export function renderPost(post) {
    const div = document.createElement('div');
    const topicEl = document.createElement('h2');
    const messageEl = document.createElement('p');
    const contactEl = document.createElement('p');
    const colors = ['yellow', 'greenyellow', 'hotpink', 'lavender', 'skyblue'];
    div.classList.add('post-card');
    if (post.background) {
        div.style.background = post.background;
    } else {
        div.style.background = colors[Math.floor(Math.random() * colors.length)];
    }

    topicEl.textContent = post.topic;
    messageEl.textContent = post.message;
    contactEl.textContent = post.contact;

    div.append(topicEl, messageEl, contactEl);

    return div;
}
