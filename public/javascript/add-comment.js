document.addEventListener("DOMContentLoaded", function () {
  const elems = document.querySelectorAll(".collapsible");
  const instances = M.Collapsible.init(elems);
});

async function newCommentFromHandler(event) {
  event.preventDefault();

  const body = event.target.querySelector('input[name="add-comment"]').value.trim();

  const post_id = event.target.id.split("-")[2];

  console.log(body, post_id);

  const response = await fetch("/api/comments", {
    method: "POST",
    body: JSON.stringify({
      body: body,
      post_id: post_id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    console.log("Response:", body, post_id);
    document.location.replace("/feed");
  } else {
    alert(response.statusText);
  }
}
document.querySelector(".post-col").addEventListener("submit", newCommentFromHandler);
