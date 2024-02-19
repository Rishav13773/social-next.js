"use client";

import React, { useEffect, useState } from "react";
import { Button, message, Steps, theme } from "antd";

import animationData from "../../../../public/work.json";
import animationData2 from "../../../../public/work-2.json";

import ProfileStep from "./_components/profileStep";
import CompanyStep from "./_components/companyStep";
import {
  createCompany,
  getCookie,
  profileUpdate,
  userCompanyConnect,
} from "@/actions/user-action";

import { useSelector } from "react-redux";
import Lottie from "react-lottie";
import CompanySelectStep from "./_components/companySelect";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const defaultOptions2 = {
  loop: true,
  autoplay: true,
  animationData: animationData2,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Setup: React.FC = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const [loggedUser, setLoggedUser] = useState(null);
  const [role, setRole] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState({});

  console.log(role);

  // const user = useSelector((state) => state.user);
  // console.log("setup page redux", user);

  const steps = [
    // Profile step always shown as the first step
    {
      title: "Profile",
      content: <ProfileStep role={role} setRole={setRole} />,
    },
    // CompanyStep or DifferentComponent rendered based on role
    !role
      ? {
          title: "Company",
          content: (
            <CompanySelectStep
              selectedCompany={selectedCompany}
              setSelectedCompany={setSelectedCompany}
            />
          ),
        }
      : {
          title: "Company",
          content: <CompanyStep />,
        },
    // Add additional steps as needed...
  ];

  ///FETCHING COOKIE USING SERVER ACTION
  useEffect(() => {
    async function existingCookie() {
      const response = await getCookie().then((data) => {
        console.log("response", data);
        setLoggedUser((prevLoggedUser) => {
          console.log("save data", prevLoggedUser); // Access previous state
          return data; // Return new state
        });
      });
    }
    existingCookie();
  }, []);

  const next = () => {
    if (current < steps.length - 1) {
      setCurrent(current + 1); // Update the current step
      const form = document.getElementById("setupForm"); // Get the form element
      if (form) {
        form.requestSubmit(); // Request form submission
      }
    }
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  const contentStyle: React.CSSProperties = {
    // lineHeight: "260px",
    // textAlign: "center",
    color: "black",
    backgroundColor: "white",
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };

  const updateDetails = async (formData: FormData) => {
    console.log("formData", formData);
    console.log(selectedCompany);
    const obj: { [key: string]: any } = {};

    for (const [key, value] of formData) {
      obj[key] = value;
    }
    // console.log("obj", obj);

    ///Using server aciton according to button click of form
    if (Object.values(obj).length > 2) {
      const user = await profileUpdate(obj, loggedUser?.id);
      console.log(user);
    } else if (Object.values(obj).length == 2) {
      const company = await createCompany(obj, loggedUser?.id);
    } else if (selectedCompany !== "") {
      const company = await userCompanyConnect(
        selectedCompany.id,
        loggedUser?.id
      );
    }
  };

  return (
    <>
      <form
        id="setupForm"
        action={updateDetails}
        className="bg-gradient-to-r from-blue-900 to-blue-600 h-screen w-full"
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] z-50">
          <Steps current={current} items={items} />
          <style>
            {`
            .ant-steps-item-title {
              color: white !important;
            }
          `}
          </style>
          <div style={contentStyle}>{steps[current].content}</div>
          <div style={{ marginTop: 24 }}>
            {current < steps.length - 1 && (
              <Button type="primary" htmlType="button" onClick={next}>
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button
                type="primary"
                htmlType="submit"
                onClick={() => message.success("Processing complete!")}
              >
                Done
              </Button>
            )}
            {current > 0 && (
              <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
                Previous
              </Button>
            )}
          </div>
        </div>
      </form>

      {/* /////Animation/////// */}
      <div className="absolute top-0 left-7 hidden md:block">
        <Lottie options={defaultOptions} height={300} width={300} />
      </div>

      <div className="absolute bottom-0 right-7 hidden md:block">
        <Lottie options={defaultOptions2} height={300} width={300} />
      </div>
    </>
  );
};

export default Setup;
