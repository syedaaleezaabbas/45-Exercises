let usernames: string[] = ["admin", "Dawood", "Hamza", "Mahnoor", "Muskan"];

for (let i = 0; i < usernames.length; i++) {
  if (usernames[i] === 'admin') {
    console.log("Hello admin, would you like to see a status report?");
  }
else {
    console.log(`Hello ${usernames[i]}, thank you for logging in again.`);
  }
}