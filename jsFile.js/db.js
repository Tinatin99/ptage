const getPostsForm = document.querySelector("#get-posts-form");
const postID = document.querySelector("#get-posts");
const result = document.querySelector(".result");

getPostsForm.addEventListener("submit", (event) => {
  event.preventDefault();
  result.innerHTML = "";

  const id = Number(postID.value);

  if (!id) {
    result.textContent = "გთხოვ, შეიყვანო post ID";
    return;
  }

  fetch("http://localhost:3000/posts")
    .then((response) => {
      const errorMessage =
        response.status === 404 ? "არასწორი მისამართი" : "მოხდა შეცდომა";
      if (!response.ok) throw new Error(errorMessage);

      return response.json();
    })
    .then((data) => {
      const post = data.find((element) => element.id === id);

      if (!post) {
        throw new Error("ამ ID-ით პოსტი არ არსებობს");
      }

      const div = document.createElement("div");
      div.innerHTML = `
        <p><strong>${post.title}</strong></p>
        <p>${post.body}</p>
      `;
      result.append(div);
    })
    .catch((error) => {
      console.log(error);
      result.textContent = error.message;
    });
});
