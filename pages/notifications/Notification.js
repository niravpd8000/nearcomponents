import React, {useState} from 'react';
import Image from "next/image";
import AccountIcon1 from "../../public/Header/Profile1.svg";
import AccountIcon2 from "../../public/Header/Profile2.svg";
import Docu from "../../public/Experience/docu.svg";

const Notification = () => {

    const notifications = [
        {
            user: "CryptoKing.near",
            description: "requested to sign the contract",
            extraNote: "",
            prefixIcon: AccountIcon1,
            postfixIcon: "",
            time: "3 days ago",
        },
        {
            user: "CryptoKing.near",
            description: "made an offer for collectible",
            extraNote: "#72873",
            prefixIcon: AccountIcon1,
            postfixIcon: "",
            time: "5 days ago"
        },
        {
            user: "maxwell.near",
            description: "invited you to",
            extraNote: "docu sign",
            prefixIcon: AccountIcon2,
            postfixIcon: Docu,
            time: "7 days ago"
        }
    ]

    return (
        <>
            <div
                className={"justify-between"}>
                <div
                    className="h-[60px]  mb-[20px] flex items-stretch justify-center  text-[16px] inline-block align-middle font-semibold text-[#414047] text-center border-b border-[#DFDFE0]">
                    <span className={"self-center"}>Notifications</span>
                </div>
                <div className={"px-[30px] flex justify-center w-full  "}>
                    <div>
                        {notifications && notifications.map((notification, key) =>
                            <div key={key} className={"flex mb-[24px]"}>
                                <div className={"mt-[5px]"} align={"center"}>
                                    <div className={"w-[35px] h-[35px] mr-[17px]"}>
                                            <Image alt="image"
                                            className={`rounded-full !w-[35px] !h-[35px]`}
                                            src={notification.prefixIcon}/>
                                    </div>
                                </div>
                                <div className={"block"}>
                                    <div className={"font-medium font-[15px] max-w-[256px]"}>
                                        {notification.user &&
                                        <span className={"text-[#885FFF]"}>{notification.user}{" "} </span>}
                                        {notification.description}
                                        {notification.extraNote &&
                                        <span className={"text-[#885FFF]"}>{" "}{notification.extraNote}</span>}
                                    </div>
                                    {notification.time &&
                                    <div className={"font-medium font-[13px] text-[#6F6E73]"}>{notification.time}</div>}
                                </div>
                                {notification.postfixIcon && <div className={"mt-[5px] ml-[18px] !w-[48px] !h-[48px]"}>
                                    <Image alt="image"  className={"!w-[48px] !h-[48px]"} src={notification.postfixIcon}/>
                                </div>}
                            </div>)}
                    </div>
                </div>
            </div>
        </>
    )
};

export default Notification;
