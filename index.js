// 2. Display Posts
function displayPosts(posts) {
  const postList = document.getElementById("post-list");

  // loop through the posts list
  posts.forEach((post) => {
    const li = document.createElement("li");

    const h1 = document.createElement("h1");
    h1.textContent = post.title;

    const p = document.createElement("p");
    p.textContent = post.body;

    li.appendChild(h1);
    li.appendChild(p);

    postList.appendChild(li);
  });
}

// 1. Fetch data + async/await refactor
async function getPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    displayPosts(posts); // call displayPosts() after fetch
  } catch (error) {
    console.error("Something went wrong:", error);
  }
}

getPosts();