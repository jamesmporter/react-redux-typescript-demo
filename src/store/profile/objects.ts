export class ProfileInbound {
  firstName: string;
  lastName: string;
  initials: string;

  constructor(firstName: string, lastName: string, initials: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.initials = initials;
  }
}
