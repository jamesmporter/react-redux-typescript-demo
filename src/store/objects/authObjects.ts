export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignUpCredentials {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export class AuthInbound {
  uid: string;

  constructor(uid: string) {
    this.uid = uid;
  }
}
