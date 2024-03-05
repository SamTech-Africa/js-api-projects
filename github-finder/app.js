// Instantiate GitHub
const github = new GitHub();

// Search input
const searchUser = document.getElementById("searchUser");

// Search input event listener
searchUser.addEventListener("keyup", (e) => {
  // Get input text
  const usertext = e.target.value;

  // check if text is not blank
  if (usertext !== "") {
    // Make github http call
    github.getUser(usertext).then((data) => {
      if (data.profile.message === "Not Found") {
        // Show alert with User not found
      } else {
        // Show the profie
      }
    });
  } else {
    // Clear the profile
  }
});
