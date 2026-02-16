import { AuthRepository } from "./auth.repository";
import { RegisterDTO, LoginDTO } from "./auth.types";
import { HashUtil } from "../../utils/hash.util";
import { generateToken } from "../../utils/jwt.util";

export class AuthService {
  private repository = new AuthRepository();

  async register(data: RegisterDTO) {
    const userExists = await this.repository.findByEmail(data.email);

    if (userExists) throw new Error("User already exists");

    const hashedPassword = await HashUtil.hash(data.password);

    const user = await this.repository.createUser({
      ...data,
      password: hashedPassword,
    });

    return user;
  }

  async login(data: LoginDTO) {
    const user = await this.repository.findByEmail(data.email);

    if (!user) throw new Error("Invalid credentials");

    const isMatch = await HashUtil.compare(data.password, user.password);

    if (!isMatch) throw new Error("Invalid credentials");

    return generateToken(String(user.id));
  }

  // GET USER
  async getUser(id: string) {
    const user = await this.repository.findById(id);

    if (!user) throw new Error("User not found");

    return user;
  }

  // UPDATE USER
  async updateUser(id: string, data: any) {
    const user = await this.repository.updateUser(id, data);

    if (!user) throw new Error("User not found");

    return user;
  }

  // DELETE USER
  async deleteUser(id: string) {
    const user = await this.repository.deleteUser(id);

    if (!user) throw new Error("User not found");

    return { message: "User deleted successfully" };
  }
}
