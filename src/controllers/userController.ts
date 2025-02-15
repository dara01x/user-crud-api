import { Request, Response } from "express";
import { UserService } from "../services/userService";

export class UserController {
    
    private userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
        this.getAllUsers = this.getAllUsers.bind(this);
        this.getUserById = this.getUserById.bind(this);
        this.createUser = this.createUser.bind(this);
        this.updateUser = this.updateUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }
   
    public async getAllUsers(req: Request, res: Response) {
        try {
        const users = await this.userService.getUsers();
        res.json(users);
        } catch (error) {
            console.log(error);
        res.status(500).json({ error: "Failed to retrieve users" });
        }
    }

    public async getUserById(req: Request, res: Response) {
        try {
        const userId = req.params.id;
        const user = await this.userService.getUser(userId);
        res.json(user);
        } catch (error) {
            console.log(error);
        res.status(500).json({ error: "Failed to retrieve user" });
        }
    }

    public async createUser(req: Request, res: Response) {
        try {
            const user = req.body;
        const newUser = await this.userService.createUser(user);
        res.status(201).json(newUser);
        } catch (error) {
        res.status(500).json({ error: "Failed to create user" });
        }
    }

    public async updateUser(req: Request, res: Response) {
        try {
        const userId = req.params.id;    
        const user = req.body;
        const updatedUser = await this.userService.updateUser(user, userId);
        res.json(updatedUser);
        } catch (error) {
        res.status(500).json({ error: "Failed to update user" });
        }
    }

    public async deleteUser(req: Request, res: Response) {
        try {
        const userId = Number(req.params.id);
        await this.userService.deleteUser(userId);
        res.json({ message: "User deleted" });
        } catch (error) {
        res.status(500).json({ error: "Failed to delete user" });
        }
    }
}
