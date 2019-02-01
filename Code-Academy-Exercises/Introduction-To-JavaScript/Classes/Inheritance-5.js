

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  }
  get certifications() {
    return this._certifications;
  }
  addCertification(newCertification) {
    this._certifications.push(newCertification);
  }
}

nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);

// I learned that child classes can contain their own properties, getters, setters, and methods
