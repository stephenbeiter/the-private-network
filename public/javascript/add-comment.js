document.addEventListener("DOMContentLoaded", function () {
  const elems = document.querySelectorAll(".collapsible");
  const instances = M.Collapsible.init(elems);
});

async function newCommentFromHandler(event) {
  event.preventDefault();

  const body = document.querySelector('input[name="add-comment"]').value.trim();
  const post_id = document.querySelector(".comment-text").id.split("-")[1];

  const response = await fetch("/api/comments", {
    method: "POST",
    body: JSON.stringify({
      body,
      //   ====================
      //   remove hardcoding
      // ======================
      user_id: 2,
      post_id,
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
