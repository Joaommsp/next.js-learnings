import { User } from "@/core/model/User";
import { PrismaClient } from "@prisma/client";

export default class UserRepo {
  private static db: PrismaClient = new PrismaClient();

  static async read(): Promise<User[]> {
    return await this.db.user.findMany();
  }

  static async readById(id: number): Promise<User> {
    const user = await this.db.user.findUnique({ where: { id } });
    return user as User;
  }

  static async save(user: User): Promise<User> {
    return await this.db.user.upsert({
      where: { id: user.id },
      update: user,
      create: user,
    });
  }

  static async delete(id: number): Promise<void> {
    await this.db.user.delete({
      where: { id },
    });
  }
}
