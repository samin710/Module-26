document.getElementById("post-btn").addEventListener("click", function () {
  const commentEl = document.getElementById("text-box");
  const newComment = commentEl.value;
  const commentContainer = document.getElementById("comments-container");
  const comment = document.createElement("p");
  comment.classList.add("comments");
  comment.innerText = newComment;
  commentContainer.appendChild(comment);
  commentEl.value = " ";
  //console.log(comment);
});
