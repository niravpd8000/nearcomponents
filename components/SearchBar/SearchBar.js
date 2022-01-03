import React from "react";
import {Input} from "antd";

const SearchBar = ({name, id, placeHolder, onChange, icon, className}) => {
    return (
        <Input
            name={name || ""}
            id={id}
            placeHolder={placeHolder || ""}
            className={className}
            onChange={onChange}
            prefix={icon}
        />
    )
};

export default SearchBar;