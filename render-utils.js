export function renderPost(post) {
    const div = document.createElement('div');
    const topicEl = document.createElement('h3');
    const messageEl = document.createElement('p');
    const contactEl = document.createElement('p');
    const colors = [
        'yellow',
        'greenyellow',
        'hotpink',
        'lavender',
        'skyblue',
        'steelblue',
        'cadetblue',
        'darkgray',
        'crimson',
        'coral',
    ];
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

export function renderColorOption(color) {
    const colorOption = document.createElement('option');
    colorOption.text = color;
    colorOption.value = color;
    return colorOption;
}
