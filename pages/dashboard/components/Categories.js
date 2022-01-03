import React from "react";
import Image from "next/image";
import BlueArrow from "../../../public/BlueArrow2.svg";
import styles from "../../../styles/Dashboard.module.css";
import CardAvatar from "./CardAvatar";
import RightArrowIcon from "../../../public/rightarrow.svg";

export default function Categories({categories}) {
    return (
        <div className="mt-[14px] ml-[12px] mr-[12px]">
            <div className={"flex flex-row justify-between font-semibold"}>
                <div className="text-[16px] color-[#414047] mb-[16px] text-[#414047]">Popular Categories</div>
                <div className={" cursor-pointer mb-[14px] text-[#885FFF] mt-[2px]"}>
                    <span className="mr-[14px]">See all</span>
                    <Image alt="image"  src={BlueArrow} className={"top-2px"}/>
                </div>
            </div>
            <div className="grid grid-cols-2 grid-flow-row gap-x-4 gap-y-3 ">
                {categories.map((item, key) => (
                    <div
                        key={key}
                        style={{backgroundColor: item.bgColorCard}}
                        className={`${styles.boxCategories} rounded-[6px]`}>
                        <CardAvatar right={item.right} bgColorIcon={item.bgColorIcon} src={item.icon}/>
                        <div className="flex flex-row justify-between cursor-pointer pt-[16px]">
                            <div className="text-[16px]">{item.title}</div>
                            <Image alt="image"  src={RightArrowIcon} className={"mr-[4px]"}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}