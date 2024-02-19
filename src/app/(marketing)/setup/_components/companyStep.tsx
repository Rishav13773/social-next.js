import { Input, Space } from "antd";

import React from "react";

const CompanyStep = () => {
  return (
    <Space>
      <div className="max-w-[200px] md:max-w-[500px] flex flex-col mx-auto gap-3 p-6">
        <p className="text-lg">Your Organization</p>
        <p className="text-xs text-gray-600">
          The URL should point to the comapany's website.
        </p>
        <Input
          className="md:w-[390px]"
          name="companyname"
          placeholder="Comapny Name"
          variant="outlined"
        />
        <Input placeholder="website URL" name="url" />
      </div>
    </Space>
  );
};

export default CompanyStep;
