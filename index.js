var currentUser = "Grace Hopper";
var welcomeMessage = "Welcome to Flatbook, " + currentUser + "!";
var excitedWelcomeMessage = welcomeMessage.toUpperCase();
var shortGreeting = "Welcome, " + currentUser[0] + "!";

module.exports = {
  currentUser,
  welcomeMessage,
  excitedWelcomeMessage,
  shortGreeting
};
