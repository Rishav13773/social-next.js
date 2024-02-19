import { createUser } from "@/actions/server-action";
import { SignInButton, UserButton, auth, clerkClient } from "@clerk/nextjs";
import { Button } from "antd";
import React from "react";

const Header = async () => {
  "use server";
  const { userId } = await auth();

  if (userId) {
    const user = await clerkClient.users.getUser(userId);
    const newUser = user.externalAccounts[0];
    console.log(userId);
    const { emailAddress, username } = newUser;

    await createUser({
      emailAddress: emailAddress,
      username: username,
    });
  }
  // console.log("User: ", user);

  return (
    <div className="flex items-center justify-between py-4 px-4 fixed w-full bg-gradient-to-r from-blue-900 to-blue-600 z-50">
      <div>
        <p>Logo</p>
      </div>
      <div className="flex items-center justify-between">
        {/* {isLoaded && <div>loading</div>} */}

        {!userId && (
          <div className="pr-8">
            <SignInButton mode="modal">
              <Button type="link">
                <span className="text-white hover:underline">Log in</span>
              </Button>
            </SignInButton>

            <SignInButton mode="modal">
              <Button type="primary">Get Social free</Button>
            </SignInButton>
          </div>
        )}
        {userId && (
          <div className="flex pr-8 gap-3">
            <UserButton afterSignOutUrl="/" />
            <Button type="primary">Enter Social free</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
