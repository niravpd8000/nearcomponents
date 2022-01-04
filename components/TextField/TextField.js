import React from "react";
import {Input} from "antd";

const TextField = ({className, prefix, id, placeholder}) => {
    return (
        <Input prefix={prefix} id={id} className={className} placeholder={placeholder}/>
    )
};

export default TextField;
