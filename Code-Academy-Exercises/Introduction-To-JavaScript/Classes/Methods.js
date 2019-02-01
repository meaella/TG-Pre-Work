
class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }
  get name() {
    return this._name;
  }
  get department() {
    return this._department;
  }
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
 takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
    return this._remainingVacationDays;
  }
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');

/* I learned that class method and getter syntax is the same as it is for objects
 except you can not include commas between methods */
