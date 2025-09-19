// modules/user/user.model.js
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default prisma;

export const createUser = async (data) => {
  return prisma.user.create({ data });
};

export const getAllUsers = async () => {
  return prisma.user.findMany({
    include: { student: true, teacher: true },
  });
};

export const getUserById = async (id) => {
  return prisma.user.findUnique({
    where: { id: Number(id) },
    include: { student: true, teacher: true },
  });
};

export const updateUser = async (id, data) => {
  return prisma.user.update({
    where: { id: Number(id) },
    data,
  });
};

export const deleteUser = async (id) => {
  return prisma.user.delete({
    where: { id: Number(id) },
  });
};
