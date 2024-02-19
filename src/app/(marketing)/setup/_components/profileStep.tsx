import { Input, Space, Switch } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";

const ProfileStep = ({ role, setRole }) => {
  return (
    <Space>
      <div className="max-w-[200px] md:max-w-[500px] flex flex-col mx-auto gap-3 p-6">
        <p className="text-lg">Your Profile</p>
        <p className="text-xs text-gray-600">
          Customize your employee profile. You can change these details later.
        </p>
        <Input name="firstname" placeholder="First Name" variant="outlined" />
        <Input name="lastname" placeholder="Last Name" variant="outlined" />
        <Input name="username" placeholder="@username" variant="outlined" />

        <Space.Compact>
          <Input style={{ width: "20%" }} defaultValue="91" />
          <Input
            name="contact"
            style={{ width: "80%" }}
            placeholder="9999999999"
          />
        </Space.Compact>

        <Switch
          className="w-[80px]"
          checked={role}
          checkedChildren="Admin"
          unCheckedChildren="User"
          onChange={() => {
            setRole(!role);
            // console.log(role);
          }}
        />
      </div>
    </Space>
  );
};

export default ProfileStep;
