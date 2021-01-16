// Matrerialize modals initialization
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".modal");
  var instances = M.Modal.init(elems);
});

// capture input for creating a new post form
async function newPostFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector("input[name='post-title']").value;
  const post_url = document.querySelector("textarea[name='post-content']").value;
  const post_img = document.querySelector("input[name='post-img-url']").value;
  const group_id = document.querySelector("input[name='post-group']").value;

  const response = await fetch("/api/posts", {
    method: "POST",
    body: JSON.stringify({
      user_id: 1,
      title,
      post_url,
      post_img,
      group_id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/feed");
  } else {
    alert(response.statusText);
  }
}

document.querySelector(".new-post-form").addEventListener("submit", newPostFormHandler);
