import { SignInButton, auth, clerkClient } from "@clerk/nextjs";
import { Button } from "antd";
import Image from "next/image";
import React from "react";
import company from "../../../../public/company.svg";
import { createUser } from "@/actions/server-action";

const Hero = async () => {
  "use server";
  const { userId } = await auth();

  if (userId) {
    const user = await clerkClient.users.getUser(userId);
    const newUser = user.externalAccounts[0];
    console.log("USER_INFO", user);
    const { emailAddress, username } = newUser;

    await createUser({
      emailAddress: emailAddress,
      username: username,
    });
  }

  return (
    <div className="pt-24 flex flex-col justify-center items-center text-center gap-6 h-screen">
      <div className="md:w-[600px] ">
        <h1 className="text-white text-3xl md:text-4xl">
          <span className="underline text-blue-400">Social</span> Connects
          employees in dynamic enviorment, which works fast and better
        </h1>
      </div>

      {!userId && (
        <SignInButton mode="modal">
          <Button type="primary">Get Social free</Button>
        </SignInButton>
      )}

      {userId && (
        <div>
          <Button type="primary">Enter Social free</Button>
        </div>
      )}

      <Image
        className="w-[80%] h-[80%] md:w-[600px] md:mt-8"
        src={company}
        alt="company"
      />
    </div>
  );
};

export default Hero;
