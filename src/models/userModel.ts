export interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export interface CreateUserDTO {
    name: string;
    job: string;
}

export interface UpdateUserDTO {
    name?: string;
    job?: string;
}