async function signupFormHandler(event) {
  event.preventDefault();

  const firstname = document.querySelector("#firstname-signup").value.trim();
  const lastname = document.querySelector("#lastname-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (firstname && lastname && email && password) {
    const response = await fetch("api/users", {
      method: "post",
      body: JSON.stringify({
        "first_name": firstname,
        "last_name": lastname,
        "email": email,
        "password": password
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log("success!");
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector(".signup-form").addEventListener("submit", signupFormHandler);
