export class UserModel {
  constructor(
    public email: string,
    public image: string,
    public name: string,
    public roles: string[],
    public token: string,
    public usernme: string,
  ) {

  }
}
