// Instantiate GitHub and UI components
const github = new GitHub();
const ui = new UI();

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
        ui.showAlert("User not found", "alert alert-danger");
      } else {
        // Show the profie
        ui.showProfile(data.profile);
        // Show the repositories

        ui.showRepos(data.repos);
      }
    });
  } else {
    // Clear the profile
    ui.clearProfile();
  }
});
