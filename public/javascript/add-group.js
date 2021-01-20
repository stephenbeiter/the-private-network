// capture input for creating a new post group
async function newGroupFromHandler(event) {
  event.preventDefault();

  const groupname = document.querySelector("input[name='group-name']").value;
  const group_color = document.querySelector("input[name='group-color']").value;

  const response = await fetch("/api/groups", {
    method: "post",
    body: JSON.stringify({
      groupname,
      group_color
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/feed");
  } else {
    alert(response.statusText);
  }
}

document.querySelector(".new-group-form").addEventListener("submit", newGroupFromHandler);
