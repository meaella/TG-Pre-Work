

const robot = {
  energyLevel: 100,
  checkEnergy() {
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}

robot.checkEnergy();

/* I leaned "arrow functions" inherently bind, or tie, an already defined this
 value to the function itself that is NOT the calling object */
