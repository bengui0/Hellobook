// Script para adicionar posts dinamicamente

document.getElementById('post-btn').addEventListener('click', function() {
    let postText = document.getElementById('post-text').value;

    if (postText.trim() !== '') {
        let postSection = document.getElementById('posts-section');
        
        // Criando o post
        let newPost = document.createElement('div');
        newPost.classList.add('post');
        
        let postContent = document.createElement('p');
        postContent.textContent = postText;
        
        newPost.appendChild(postContent);
        
        // Adicionando o post à seção
        postSection.prepend(newPost);

        // Limpando a caixa de texto após o post
        document.getElementById('post-text').value = '';
    }
});