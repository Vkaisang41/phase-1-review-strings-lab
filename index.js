var currentUser = 'Grace Hopper';
global.currentUser = currentUser;

var welcomeMessage = 'Welcome to Flatbook, ' + currentUser + '!';
global.welcomeMessage = welcomeMessage;

var excitedWelcomeMessage = welcomeMessage.toUpperCase();
global.excitedWelcomeMessage = excitedWelcomeMessage;

var shortGreeting = 'Welcome, ' + currentUser[0] + '!';
global.shortGreeting = shortGreeting;
