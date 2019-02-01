
static generatePassword() {
  return Math.floor(Math.random() * 10000);
}

// I learned about static method that aren't available in individual instances, but that you can call directly from the class
