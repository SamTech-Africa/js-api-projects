// Search input
const searchUser = document.getElementById("searchUser");

// Search input event listener
searchUser.addEventListener("keyup", (e) => {
  // Get input text
  const usertext = e.target.value;

  // check if text is not blank
  if (usertext !== "") {
    // Make github http call
    const github = new GitHub();
    github.getUser(usertext).then((data) => {
      console.log(data);
    });
  }
});
