import React, {useState} from 'react';
import {Modal, Badge, Avatar} from 'antd';
import Image from "next/image";
import AccountIcon1 from "../../public/Header/Profile1.svg";
import AccountIcon2 from "../../public/Header/Profile2.svg";
import AccountIcon3 from "../../public/Header/Profile3.svg";
import CheckIcon from "../../public/vector.svg";
import DownloadIcon from "../../public/download.svg";
import PlusIcon from "../../public/plus.svg";

const AccountModal = ({selectedAccount, setSelectedAccount, isShow, setShow}) => {
    const accounts = [
        {name: "Johndoe.near", profileImage: AccountIcon1, distance: "0.34 NEAR"},
        {name: "Mike.near", profileImage: AccountIcon2, distance: "0.12 NEAR"},
        {name: "john.near", profileImage: AccountIcon3, distance: "2.34 NEAR"},
    ]
    const onSelectAccount = (id) => {
        setSelectedAccount(id);
        setShow(false);
    }
    return (
        <>
            <Modal
                visible={isShow}
                closable={false}
                onCancel={() => setShow(false)}
                maskClosable={true}
                footer={null}>
                <div className="text-[#A0A0A2] font-semibold ml-[19px] pt-[18px]">My Accounts</div>
                <div className="ml-[15px]">
                    {accounts && accounts.length && accounts.map((account, key) =>
                        <div key={key} className="flex flex-row justify-between cursor-pointer"
                             onClick={() => onSelectAccount(account.name)}>
                            <div
                                className={`mt-[15px]  flex flex-row`}>
                                <div
                                    className={`rounded-full align-middle mt-[2px] !w-[42px] !h-[42px] ${selectedAccount === account.name ? "!border-[3px] !border-[#000000]" : ""}`}
                                    align={"center"}
                                >
                                    <div
                                        className={`rounded-full !w-[35px] mt-[0.5px] !h-[35px]`}>
                                        <Image
                                            className={`rounded-full`}
                                            src={account.profileImage}/>
                                    </div>
                                </div>
                                <div className="ml-[12px] font-semibold">
                                    <div>{account.name}</div>
                                    <div className="text-[#6F6E73] font-medium">{account.distance}</div>
                                </div>
                            </div>
                            {selectedAccount === account.name && <div className="self-center mr-[25px]">
                                <Image src={CheckIcon}/>
                            </div>}
                        </div>)}
                </div>
                <div className="border border-solid border-[#DFDFE0] mt-[18px]"/>
                <div className="mt-[22px] ml-[15px] flex flex-row cursor-pointer">
                    <Image src={PlusIcon}/>
                    <div className="ml-[16px] font-semibold">Create Account</div>
                </div>
                <div className="mt-[16px] pb-[33px] ml-[15px] flex flex-row cursor-pointer">
                    <Image src={DownloadIcon}/>
                    <div className="ml-[16px] font-semibold">Import Account</div>
                </div>
            </Modal>
        </>
    )
};

export default AccountModal;
