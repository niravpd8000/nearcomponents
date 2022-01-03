import React, {useState} from 'react';
import {Modal, Badge, Avatar} from 'antd';
import Image from "next/image";
import LogoIcon from "../../public/logo.svg";
import SettingsIcon from "../../public/settings.svg";
import NotificationIcon from "../../public/notification.svg";
import AccountIcon from "../../public/account.svg";
import DownArrowIcon from "../../public/downArrow.svg";
import AccountModal from "./AccountModal";
import {useRouter} from "next/router";

const Header = () => {
    const [isShow, setShow] = useState(false);
    const [selectedAccount, setSelectedAccount] = useState("Johndoe.near");
    const router = useRouter();
    const onClickHomeButton = () => {
        router.push("/dashboard");
    }
    const onClickBellButton = () => {
        router.push("/notifications");
    }
    return (
        <>
            <div className="flex justify-between pl-[20px] pr-[25px]  h-[71px] bg-[#F5F5F5]">
                <span className="mt-[24px]" onClick={onClickHomeButton}>
                    <Image alt="image"  src={LogoIcon}/>
                </span>
                <div className="ml-[55px] z-[1001] flex flex-row justify-between h-[45px] w-[174px] cursor-pointer
                                rounded-[30px] border-solid border-2 mt-[13px] bg-[#FFFFFF]"
                     onClick={() => setShow(!isShow)}
                >
                    <div className="mt-[5px] ml-[6px]">
                        <Image alt="image"  src={AccountIcon}/>
                    </div>
                    <div className="mt-[7px] text-[14px] font-semibold">{selectedAccount}</div>
                    <div className="mt-[7px] mr-[7px]">
                        <Image alt="image"  src={DownArrowIcon}/>
                    </div>
                </div>
                <div className={"flex flex-row justify-between"}>
                    <span className="ml-[11px] mt-[24px]" onClick={onClickBellButton}>
                        <Badge>
                            <Image alt="image"  src={NotificationIcon}/>
                        </Badge>
                    </span>
                    <span className="ml-[11px] mt-[24px]">
                        <Image alt="image"  src={SettingsIcon}/>
                    </span>
                </div>
            </div>
            <AccountModal selectedAccount={selectedAccount} setSelectedAccount={setSelectedAccount} isShow={isShow}
                          setShow={setShow}/>
        </>
    )
};

export default Header;
