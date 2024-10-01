import { PrismaClient } from "@prisma/client";

export default class UserRepo {
  private static db: PrismaClient = new PrismaClient();

  static async read() {
    return await this.db.user.findMany();
  }

  static async readById(id: number) {
    return await this.db.user.findUnique({ where: { id } });
  }

  static async save(user: any) {
    return await this.db.user.upsert({
      where: { id: user.id },
      update: user,
      create: user,
    });
  }
}
