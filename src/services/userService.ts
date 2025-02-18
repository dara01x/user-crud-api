import { User } from "../models";
import { db } from "../config/firebaseConfig";

export class UserService {
  public async getUser(userId: string): Promise<User | null> {
    const user = await db.collection("users").doc(userId).get();

    if (!user.exists) {
      return null;
    }

    return user.data() as User;
  }

  public async getUsers(): Promise<User[]> {
    const users = await db.collection("users").get();
    return users.docs.map((us) => us.data() as User);
  }

  public async createUser(user: User): Promise<User> {
    const createdUserRef = await db.collection("users").add(user);
    const createdUser = await createdUserRef.get();
    return createdUser.data() as User;
  }

  public async updateUser(userId: string, user: User): Promise<User> {
    const updatedUserRef = await db.collection("users").doc(userId);
    await updatedUserRef.update(user);

    const updatedUser = await updatedUserRef.get();
    return updatedUser.data() as User;
  }

  public async deleteUser(userId: string): Promise<void> {
    const deletedUser = await db.collection("users").doc(userId);
    await deletedUser.delete();
  }
}
