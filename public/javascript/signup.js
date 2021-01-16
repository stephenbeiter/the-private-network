async function signupFormHandler(event) {
  event.preventDefault();

  const first_name = document.querySelector("#first_name-signup").value.trim();
  const last_name = document.querySelector("#last_name-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  const profile_img = document.querySelector("#profile_img-signup").value.trim();

  if (first_name && last_name && email && password) {
    const response = await fetch("api/users", {
      method: "post",
      body: JSON.stringify({
        first_name,
        last_name,
        email,
        password,
        profile_img,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log("success!");
      document.location.replace("/login");
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector(".signup-form").addEventListener("submit", signupFormHandler);
