document.addEventListener("DOMContentLoaded", function () {
  const elems = document.querySelectorAll(".collapsible");
  const instances = M.Collapsible.init(elems);
});

async function newCommentFromHandler(event) {
  event.preventDefault();

  const body = document.querySelector('input[name="add-comment"]').value.trim();

  const response = await fetch("/api/comments", {
    method: "POST",
    body: JSON.stringify({
      body,
      //   remove hard coding
      // ======================
      user_id: 1,
      post_id: 2,
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

document.querySelector(".add-comment-form").addEventListener("submit", newCommentFromHandler);
