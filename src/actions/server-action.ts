"use server";

import { Prisma } from "@prisma/client";
import { prisma } from "../../lib/prisma";

interface userProps {
  emailAddress: string;
  username: string;
}

export async function createUser({ emailAddress, username }: userProps) {
  try {
    const existingUser = await prisma.user.findUnique({
      where: { email: emailAddress },
    });

    if (existingUser) {
      throw new Error("User already exists");
    }

    let user: Prisma.UserCreateInput;

    user = {
      username: username,
      email: emailAddress,
    };

    await prisma.user.create({
      data: user,
    });
  } catch (error) {
    return console.error(error);
  }
}
