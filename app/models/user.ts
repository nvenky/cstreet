export class User {
  constructor(
    public careFor: string,
    public yourFirstName: string,
    public yourLastName: string,
    public firstName: string,
    public lastName: string,
    public password: string,
    public confirmPassword: string,
    public mobile: string
  ) {  }
};