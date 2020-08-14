export class UserModel {
  _id?: string = undefined;
  email: string = undefined;
  password: string = undefined;
  firstName?: string = undefined;
  lastName?: string = undefined;
  connected?: boolean = undefined;
  profilePic?: string = undefined;
  favorites?: string[] = undefined;
  msg?: string | boolean = undefined;
}

export interface IUser extends UserModel { }

export const User: IUser = new UserModel();
