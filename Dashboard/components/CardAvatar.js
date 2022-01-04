import React from "react";
import Image from "next/image";

export default function CardAvatar({src, bgColorIcon, right}) {
    return (
        <div style={{paddingRight: right, background: bgColorIcon}}
             className={`rounded-full flex items-center justify-center  h-[35px] w-[35px]`}>
            <Image alt="image"  src={src}/>
        </div>
    );
}