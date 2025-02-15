import { apiClient } from "../config/apiConfig";
import { CreateUserDTO, UpdateUserDTO, User } from "../models";

export class UserService {
    public async getUsers(): Promise<User[]> {
        const response = await apiClient.get<User[]>('/api/users?page=2');
        return response.data;
    }

    public async createUser(user: CreateUserDTO): Promise<User> {
        const response = await apiClient.post<User>('/api/users', user);
        return response.data;
    }

    public async getUser(id: string): Promise<User> {
        const response = await apiClient.get<User>(`/api/users/${id}`);
        return response.data;
    }

  
    public async updateUser(user: UpdateUserDTO, userId: string ): Promise<User> {
        const response = await apiClient.put<User>(`/api/users/${userId}`, user);
        return response.data;
    }


    public async deleteUser(id: number): Promise<void> {
        await apiClient.delete(`/api/users/${id}`);
    }
}