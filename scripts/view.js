import { getPosts } from './services.js';
import { postCard } from './models.js';


const container = document.querySelector('.card-list');

async function renderPosts() {
  const posts = await getPosts();
  container.innerHTML = ''
  posts.forEach(post => container.innerHTML += postCard(post))
}
  
export {
  renderPosts 
}