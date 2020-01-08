export class LoginCredentials {
  email: string;
  password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}

export class SignUpCredentials {
  email: string;
  password: string;
  firstName: string;
  lastName: string;

  constructor(
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) {
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

export class AuthInbound {
  uid: string;

  constructor(uid: string) {
    this.uid = uid;
  }
}
