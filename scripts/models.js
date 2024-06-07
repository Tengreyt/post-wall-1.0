function postCard({ id, image, username, avatar, description, title }) {
    return `
        <div class="card" data-id="${id}">
            <div class="card__header">
                <img src="${image}" alt="card__image" class="card__image" width="600">
            </div>
            <div class="card__body">
                <h4>${title}</h4>
                <p>${description}</p>
            </div>
            <div class="card__footer">
                <div class="user">
                    <img src="${avatar}" alt="user__image" class="user__image">
                    <div class="user__info">
                        <h5>${username}</h5>
                    </div>
                </div>
            </div>
        </div>
    `;
}

export {
    postCard
};
