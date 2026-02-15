import { User, IUser } from "./auth.model";

export class AuthRepository {
  //Create user
  async createUser(data: Partial<IUser>): Promise<IUser> {
    return User.create(data);
  }

  async findByEmail(email: string): Promise<IUser | null> {
    return User.findOne({ email });
  }
  async findById(id: string): Promise<IUser | null> {
    return User.findById(id).select("-password");
  }

  //Update user
   async updateUser(
    id: string,
    data: Partial<IUser>
  ): Promise<IUser | null> {

    return User.findByIdAndUpdate(
      id,
      data,
      { new: true }
    ).select("-password");

  }
  //Delete user
  async deleteUser(id: string): Promise<IUser | null> {

    return User.findByIdAndDelete(id);

  }
}
