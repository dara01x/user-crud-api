import { Request, Response } from "express";
import { UserService } from "../services/userService";
export class UserController {
  constructor(private userService: UserService) {}

  public getUsers = async (req: Request, res: Response) => {
    try {
      const users = await this.userService.getUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: "Error fetching users" });
    }
  };

  public getUserById = async (req: Request, res: Response) => {
    try {
      const userId = req.params.id;
      const user = await this.userService.getUser(userId);

      res.json(user);
    } catch (error) {
      res.status(500).json({ message: "Error fetching user" });
    }
  };

  public createUser = async (req: Request, res: Response) => {
    try {
      const user = req.body;
      const newUser = await this.userService.createUser(user);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ message: "Error creating user" });
    }
  };

  public updateUser = async (req: Request, res: Response) => {
    try {
      const userId = req.params.id;
      const userData = req.body;
      const updatedUser = await this.userService.updateUser(userId, userData);
      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ message: "Error updating user" });
    }
  };

  public deleteUser = async (req: Request, res: Response) => {
    try {
      const userId = req.params.id;
      await this.userService.deleteUser(userId);
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ message: "Error deleting user" });
    }
  };
}
