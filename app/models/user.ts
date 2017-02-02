export class User {
  constructor(
    public id: string,
    public authId: string,
    public careFor: string,
    public elderFirstName: string,
    public elderLastName: string,
    public firstName: string,
    public lastName: string,
    public mobile: string,
    public registrationComplete: boolean
  ) {  }
};
