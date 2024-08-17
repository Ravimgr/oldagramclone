const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let postsContainer = document.getElementById("post-Container")

posts.forEach(post => {
    const postHTML = `
        <section class="top-section">
            <img id="post-avatar" class="userlogo" src="${post.avatar}" alt="${post.name}">
            <p><strong>${post.name}</strong> <span>${post.location}</span><p>
        </section>
        <img class="post-img" src="${post.post}" alt="Post image by ${post.name}">
        <section class="btn-section">
            <img role="button" class="like-btn" src="images/icon-heart.png" alt="Like">
            <img role="button" src="images/icon-comment.png" alt="Comment">
            <img role="button" src="images/icon-dm.png" alt="Share">
        </section>
        <p class ="likes-count">${post.likes} likes</p>
        <p><strong>${post.username}</strong> ${post.comment}</p>
    `;

    // Create a new div for each post and add the postHTML to it
    const postDiv = document.createElement('div');
    postDiv.classList.add('post');
    postDiv.innerHTML = postHTML;
    
     // Append the new post to the posts container
    postsContainer.appendChild(postDiv);
    
    // Find the like button and likes count within the current post
    const likeButton = postDiv.querySelector('.like-btn');
    const likesCount = postDiv.querySelector('.likes-count');
    
    

   
    
     likeButton.addEventListener('click', function() {
        // Increment the likes count for this specific post in the posts array
        post.likes += 1;

        // Update the displayed likes count in the UI
        likesCount.textContent = `${post.likes} likes`;
    });
});

