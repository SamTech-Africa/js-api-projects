class GitHub {
  constructor() {
    this.clientId = "d2b3374c32e075a3dc9f";
    this.clientSecret = "ee97408740a4e17709f3e30aaacc084467b0a86b";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id${this.clientId}&client_secret=${this.clientSecret}`
    );

    const profile = await profileResponse.json();

    return {
      profile: profile,
    };
  }
}
