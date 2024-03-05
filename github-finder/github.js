class GitHub {
  constructor() {
    this.clientId = "d2b3374c32e075a3dc9f";
    this.clientSecret = "ee97408740a4e17709f3e30aaacc084467b0a86b";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    // This fetches the user details from GitHub
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id${this.clientId}&client_secret=${this.clientSecret}`
    );

    // This fetches the user's latest repositories
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id${this.clientId}&client_secret=${this.clientSecret}`
    );

    const profile = await profileResponse.json();

    const repos = await repoResponse.json();

    return {
      profile: profile,
      repos: repos,
    };
  }
}
