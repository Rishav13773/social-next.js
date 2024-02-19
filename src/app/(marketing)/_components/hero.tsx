import { SignInButton, useUser } from "@clerk/nextjs";
import { Button } from "antd";
import Image from "next/image";
import React, { useEffect } from "react";
import company from "../../../../public/company.svg";
import { createUser } from "@/actions/user-action";
import { generateUser } from "@/helper/user-helper";
import { saveUser } from "@/redux/slices/userSlices";
import { useDispatch } from "react-redux";

const Hero = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const dispatch = useDispatch();
  // console.log(newUser?.externalAccounts[0].emailAddress);

  useEffect(() => {
    const data = generateUser(user);
    data.then((data) => console.log("returning data", data));
    dispatch(saveUser(data));
  }, [user]);

  return (
    <div className="pt-24 flex flex-col justify-center items-center text-center gap-6 h-screen">
      <div className="md:w-[600px] w-[420px]">
        <h1 className="text-white text-3xl md:text-4xl">
          <span className="underline text-blue-400">Social</span> Connects
          employees in dynamic enviorment, which works fast and better
        </h1>
      </div>

      {!isSignedIn && (
        <SignInButton mode="modal">
          <Button type="primary">Get Social free</Button>
        </SignInButton>
      )}

      {isSignedIn && (
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
