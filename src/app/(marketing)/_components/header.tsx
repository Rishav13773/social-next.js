import { createUser } from "@/actions/user-action";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { Button, Spin } from "antd";
import React, { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { saveUser } from "@/redux/slices/userSlices";
import { useDispatch, useSelector } from "react-redux";
import { generateUser } from "@/helper/user-helper";
import { LoadingOutlined } from "@ant-design/icons";

const Header = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const newState = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  // console.log(newUser?.externalAccounts[0].emailAddress);

  // console.log("redux state", newState);

  useEffect(() => {
    const data = generateUser(user);
    data.then((data) => {
      console.log("returning data", data);
      dispatch({ type: "user", payload: data });
    });
  }, [user]);

  return (
    <div className="flex items-center justify-between py-4 px-4 fixed w-full bg-gradient-to-r from-blue-900 to-blue-600 z-50">
      <div>
        <p>Logo</p>
      </div>
      <div className="flex items-center justify-between">
        {!isSignedIn && (
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

        {isSignedIn && (
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
