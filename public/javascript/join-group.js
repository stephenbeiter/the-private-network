// get all groups
async function joinGroupHandler(event) {
  event.preventDefault();

  const group_id = document.querySelector("#join-groups").value;

  const response = await fetch("/api/users/addgroup", {
    method: "POST",
    body: JSON.stringify({
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

document.querySelector(".join-group-form").addEventListener("submit", joinGroupHandler);
