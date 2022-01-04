import React from "react";
import {Input} from "antd";

const CustomSearchInput = ({name, placeHolder, onChange, Icon, className}) => {
    return(
        <Input
            name={name || ""}
            placeHolder={placeHolder || ""}
            className={className}
            onChange={onChange}
            prefix={Icon}
        />
    )
};

export default CustomSearchInput;
