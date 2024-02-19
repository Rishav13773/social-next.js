import { getCompanies } from "@/actions/user-action";
import { Input, Select, Space } from "antd";
import React, { useEffect, useState } from "react";

const CompanySelectStep = ({ selectedCompany, setSelectedCompany }: any) => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const data = await getCompanies();
        setCompanies(data);
      } catch (error) {
        console.error("Error fetching companies:", error);
      }
    };

    fetchCompanies();
  }, []);

  const onChange = (value: string, id: number) => {
    console.log(`selected ${id.id}`);
    setSelectedCompany({
      name: value,
      id: id.id,
    });
  };

  const onSearch = (value: string) => {
    console.log("search:", companies);
  };

  const options = companies.map((company) => ({
    value: company.name,
    label: company.name,
    id: company.id,
  }));

  return (
    <Space>
      <div className="max-w-[200px] md:max-w-[500px] flex flex-col mx-auto gap-3 p-6">
        <p className="text-lg">Select Organization</p>
        <p className="text-xs text-gray-600">
          Select your comapnay from the dropdown.
        </p>
        <Select
          value={selectedCompany.name}
          className="md:w-[390px]"
          showSearch
          placeholder="Select a company"
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          filterOption={(input, option) =>
            option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          options={options}
        />
      </div>
    </Space>
  );
};

export default CompanySelectStep;
