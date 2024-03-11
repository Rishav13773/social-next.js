'Use Client'
import React from 'react'

import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import type { SearchProps } from "antd/es/input/Search";




const SearchBar = () => {
      // Search Input bar
  const { Search } = Input;

  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1677ff",
      }}
    />
  );

  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);

  // End of Search input bar
  return (
    <div className='flex flex-col top-0 sticky items-center w-full mb-5'>
      <div className="flex items-center">
        <Space direction="vertical">
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            style={{ width: 400 }}
          />
        </Space>
      </div>
    </div>
  )
}

export default SearchBar
