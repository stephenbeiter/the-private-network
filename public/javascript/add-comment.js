document.addEventListener("DOMContentLoaded", function () {
  const elems = document.querySelectorAll(".collapsible");
  const instances = M.Collapsible.init(elems);
});

async function newCommentFromHandler(event) {
  event.preventDefault();

  const body = document.querySelector('input[name="add-comment"]').value.trim();
  const post_id = document.querySelector(".comment-post-id").id.split("-")[2];

  const response = await fetch("/api/comments", {
    method: "POST",
    body: JSON.stringify({
      body,
      post_id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    console.log(body, post_id);
    document.location.replace("/feed");
  } else {
    alert(response.statusText);
    console.log(body, post_id);
  }
}

document.querySelector(".add-comment-form").addEventListener("submit", newCommentFromHandler);
