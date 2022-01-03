import React from "react";
import Image from "next/image";
import BlueArrow from "../../../public/BlueArrow2.svg";
import styles from "../../../styles/Dashboard.module.css";
import CardAvatar from "./CardAvatar";
import RightArrowIcon from "../../../public/rightarrow.svg";

export default function Experience({experience, title, hideSeeAll}) {
    return (
        <div className="mt-[14px] ml-[12px] mr-[12px]">
            {/*<div className={"flex flex-row justify-between font-semibold"}>*/}
            {/*    <div className="text-[16px] color-[#414047] mb-[16px] text-[#414047]">{title}</div>*/}
            {/*</div>*/}
            {title && <div className={"flex flex-row justify-between font-semibold"}>
                <div className="text-[16px] color-[#414047] mb-[16px] text-[#414047]">{title}</div>
                {hideSeeAll && <div className={" cursor-pointer mb-[14px] text-[#885FFF] mt-[2px]"}>
                    <span className="mr-[14px]">See all</span>
                    <Image src={BlueArrow} className={"top-2px"}/>
                </div>}
            </div>}
            <div className={""}>
                {experience && experience.length && experience.map((item, key) => (
                    <div className={`flex justify-start mb-[10px]`}>
                        <div className={"mr-[14px]"}>
                            <Image width={"69px"} height={"69px"} src={item.icon}/>
                        </div>
                        <div className="flex-auto">
                            <div className="text-[16px] font-semibold text-[#414047]">{item.title}</div>
                            <div className="flex flex-row justify-between cursor-pointer pt-[5px]">
                                <div className="text-[12px] text-[#6F6E73] font-medium">{item.subTitle}</div>
                                <Image src={RightArrowIcon} className={"mr-[4px]"}/>
                            </div>
                            <div
                                className="text-[12px] font-medium text-[#587BE0] font-medium">{`${item.users} Users`}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}