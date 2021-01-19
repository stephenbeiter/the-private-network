const profile_img = "";

async function signupFormHandler(event) {
  event.preventDefault();

  const firstname = document.querySelector("#first_name-signup").value.trim();
  const lastname = document.querySelector("#last_name-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();


  if (firstname && lastname && email && password) {
    const response = await fetch("api/users", {
      method: "post",
      body: JSON.stringify({
        "first_name": firstname,
        "last_name": lastname,
        "email": email,
        "password": password,
        "profile_img": profile_img
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
};

const myWidget = cloudinary.createUploadWidget({
  cloudName: 'tpncloudinary',
  uploadPreset: 'tpnclpreset'
}, (error, result) => {
  if (!error && result && result.event === "success") {
    console.log('Done! Here is the image info: ', result.info);
  }
}
);

document.getElementById("upload_widget").addEventListener("click", function () {
  myWidget.open();
}, false);

document.querySelector(".buttons").addEventListener("click", signupFormHandler);
