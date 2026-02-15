import { Request, Response } from "express";
import { AuthService } from "./auth.service";
interface IdParams {
  id: string;
}
export class AuthController {

  private service = new AuthService();

  register = async (
    req: Request,
    res: Response
  ): Promise<void> => {

    try {

      const user = await this.service.register(
        req.body
      );

      res.status(201).json(user);

    } catch (error: any) {

      res.status(400).json({
        message: error.message,
      });

    }

  };

  login = async (
    req: Request,
    res: Response
  ): Promise<void> => {

    try {

      const token = await this.service.login(
        req.body
      );

      res.json({ message: "Login successful", status:200, token });

    } catch (error: any) {

      res.status(400).json({
        message: error.message,
      });

    }

  };
// GET USER
getUser = async (req: Request<IdParams>, res: Response) => {

  try {

    const user = await this.service.getUser(
      req.params.id
    );

    res.json(user);

  } catch (error: any) {

    res.status(404).json({
      message: error.message
    });

  }

};



// UPDATE USER
updateUser = async (req: Request<IdParams>, res: Response) => {

  try {

    const user = await this.service.updateUser(
      req.params.id,
      req.body
    );

    res.json(user);

  } catch (error: any) {

    res.status(400).json({
      message: error.message
    });

  }

};



// DELETE USER
deleteUser = async (req: Request<IdParams>, res: Response): Promise<void> => {

  try {

    const result =
      await this.service.deleteUser(
        req.params.id
      );

    res.json(result);

  } catch (error: any) {

    res.status(400).json({
      message: error.message
    });

  }

};

}
