require('./helpers.js');

// ✅ Destructure the exports from index.js:
const {
  currentUser,
  welcomeMessage,
  excitedWelcomeMessage,
  shortGreeting
} = require('../index.js');

describe('index.js', function () {
  it("defines currentUser as 'Grace Hopper'", function () {
    expect(currentUser).to.equal('Grace Hopper');
  });

  it('creates a welcome message', function () {
    expect(welcomeMessage).to.equal('Welcome to Flatbook, Grace Hopper!');
  });

  it('creates an excited welcome message', function () {
    expect(excitedWelcomeMessage).to.equal('WELCOME TO FLATBOOK, GRACE HOPPER!');
  });

  it('creates a short greeting', function () {
    expect(shortGreeting).to.equal('Welcome, G!');
  });
});
