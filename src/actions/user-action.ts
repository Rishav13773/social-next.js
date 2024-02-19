"use server";

import { Prisma } from "@prisma/client";
import { prisma } from "../../lib/prisma";
import { auth, clerkClient } from "@clerk/nextjs";
import { cookies } from "next/headers";

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
      cookies().set("user", JSON.stringify(existingUser), { secure: true });
      // console.log("Existing user:", existingUser);
      // console.log("Cookie set for existing user:", cookies().get("user"));
      return existingUser;
    }

    let user: Prisma.UserCreateInput;

    user = {
      username: username,
      email: emailAddress,
    };

    const newUser = await prisma.user.create({
      data: user,
    });
    console.log("New user created:", newUser);

    cookies().set("user", JSON.stringify(newUser), { secure: true });
    // console.log("Cookie set for new user:", cookies().get("user"));

    return newUser;
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

export async function profileUpdate(data: object, uid: number) {
  console.log(uid);
  try {
    const existingUser = await prisma.user.findUnique({
      where: { id: uid },
    });

    if (!existingUser) {
      throw new Error("User does not exist");
    }

    let userUpdateData: Prisma.UserUpdateInput = {};

    // Check each field in the data object and update userUpdateData if it has a non-empty value
    if (data.hasOwnProperty("firstname") && data.firstname !== "") {
      userUpdateData.firstname = data.firstname;
    }
    if (data.hasOwnProperty("lastname") && data.lastname !== "") {
      userUpdateData.lastname = data.lastname;
    }
    if (data.hasOwnProperty("username") && data.username !== "") {
      userUpdateData.username = data.username;
    }
    if (data.hasOwnProperty("email") && data.email !== "") {
      userUpdateData.email = data.email;
    }
    if (data.hasOwnProperty("contact") && data.contact !== "") {
      userUpdateData.contactNumber = data.contact;
    }

    const updatedUser = await prisma.user.update({
      where: { id: uid },
      data: userUpdateData,
    });

    return updatedUser;
  } catch (error) {
    console.error(error);
    throw error; // re-throw the error to handle it at a higher level if needed
  }
}

//Will fetch the existing cookie
export async function getCookie() {
  try {
    const existingCookieObj = await cookies().get("user");
    if (existingCookieObj) {
      const existingCookie = await existingCookieObj.value;
      // console.log("existingCookie:", existingCookie);
      // console.log("user cookie", JSON.parse(existingCookie));

      return JSON.parse(existingCookie);
    } else {
      console.log("No user cookie found.");
    }
  } catch (error) {
    console.error(error);
  }
}

export async function createCompany(data: object, uid: number) {
  try {
    let flag = false;

    const existingUser = await prisma.user.findUnique({
      where: {
        id: uid,
      },
    });

    if (!existingUser) {
      return null;
    }

    let user: Prisma.CompanyCreateInput = {};

    if (data.hasOwnProperty("companyname") && data.companyname !== "") {
      user.name = data.companyname;
      flag = true;
    }

    if (data.hasOwnProperty("url") && data.url !== "") {
      user.websiteURL = data.url;
      flag = true;
    }

    if (flag) {
      const newCompany = await prisma.company.create({
        data: user,
      });

      const updatedUser = await prisma.user.update({
        where: {
          id: uid,
        },
        data: {
          companyID: newCompany.id,
        },
      });
    }
  } catch (error) {
    console.error(error);
  }
}

export async function getCompanies() {
  try {
    const existingCompanies = await prisma.company.findMany();

    return existingCompanies;
  } catch (error) {
    console.log(error);
  }
}

export async function userCompanyConnect(cid: number, uid: number) {
  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        id: uid,
      },
    });

    const existingCompany = await prisma.company.findUnique({
      where: {
        id: cid,
      },
    });

    if (!existingUser) {
      return null;
    }
    if (!existingCompany) {
      return null;
    }

    let user: Prisma.UserUpdateInput = {};

    const linked = await prisma.user.update({
      where: {
        id: uid,
      },
      data: {
        companyID: cid,
      },
    });
  } catch (error) {
    console.log(error);
  }
}
