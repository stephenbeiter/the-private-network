// Matrerialize modals initialization
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".modal");
  var instances = M.Modal.init(elems);
});

let post_img = "";

const myWidget = cloudinary.createUploadWidget(
  {
    cloudName: "tpncloudinary",
    uploadPreset: "tpnclpreset",
  },
  (error, result) => {
    if (!error && result && result.event === "success") {
      console.log("Done! Here is the image info: ", result.info);
      post_img = result.info.url;
    }
    if (error) {
      console.log(error);
    }
  }
);

// capture input for creating a new post form
async function newPostFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector("input[name='post-title']").value.trim();
  const body = document.querySelector("textarea[name='post-body']").value.trim();
  const group_id = document.querySelector("#post-groups").value.trim();

  const response = await fetch("/api/posts", {
    method: "POST",
    body: JSON.stringify({
      title,
      body,
      post_img,
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

document.getElementById("upload_widget").addEventListener(
  "click",
  function (event) {
    myWidget.open();
    event.preventDefault();
  },
  false
);

document.querySelector(".new-post-form").addEventListener("submit", newPostFormHandler);
