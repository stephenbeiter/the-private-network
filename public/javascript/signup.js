async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#username-signup");
  const email = document.querySelector("#email-signup");
  const password = document.querySelector("#password-signup");

  if (username && email && password) {
    const response = await fetch("api/users", {
      method: "post",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log("success!");
    } else {
      alert(response.statusText);
    }
  }
}