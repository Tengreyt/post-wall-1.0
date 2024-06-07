import { createPost } from './services.js';
import { renderPosts } from './view.js';

const openModalBtn = document.querySelector('.open-modal');
const modal = document.querySelector('.modal-wrapper');
const closeModalBtn = document.querySelector('.close');
const postAddBtn = document.querySelector('.post-modals');
const formInputs = document.querySelectorAll('input');

openModalBtn.addEventListener('click', () => {
    modal.style.display = "flex";
}); 

closeModalBtn.addEventListener('click', () => {
    modal.style.display = "none";
}); 



window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

postAddBtn.addEventListener('click', async () => {
    try {
        const postData = {
            username: formInputs[0].value,
            avatar: formInputs[1].value,
            description: formInputs[2].value,
            title: formInputs[3].value,
            image: formInputs[4].value,
        };
        
        await createPost(postData);
        // так как сервер не может быстро отдать нам данные, мы написали МакроТаск
        setTimeout(() => renderPosts(), 100);

        modal.style.display = "none";
        document.body.style.overflowY = 'auto';
    } catch (error) {
        console.log(error);        
    }
});
