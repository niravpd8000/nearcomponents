import React, {useState} from 'react';
import {Modal, Checkbox, Avatar} from 'antd';
import Image from "next/image";
import AccountIcon from "../../public/account.svg";
import ExchangeIcon from "../../public/exchange.svg";
import GameIcon from "../../public/game.svg";
import MarketIcon from "../../public/marketplace.svg";
import DeFiIcon from "../../public/defi.svg";
import CollectibleIcon from "../../public/collectibles.svg";
import OtherIcon from "../../public/other.svg";

const FilterModal = ({selectedFilters, setFilters, isShow, setShow}) => {
    const Filters = [
        {icon: <Image alt="image"  src={ExchangeIcon} />, label: "Exchanges"},
        {icon: <Image alt="image"  src={GameIcon} />, label: "Games"},
        {icon: <Image alt="image"  src={MarketIcon} />, label: "Marketplace"},
        {icon: <Image alt="image"  src={DeFiIcon} />, label: "DeFi"},
        {icon: <Image alt="image"  src={CollectibleIcon} />, label: "Collectibles"},
        {icon: <Image alt="image"  src={OtherIcon} />, label: "Others"},
    ]
    const handleCheck = (name) => {
        const index = selectedFilters.indexOf(name);
        if( index <= -1){
            setFilters([...selectedFilters, name]);
        } else {
            const data = selectedFilters.filter(item => item !== name);
            setFilters([...data]);
        }
    };

    const handleAllCheck = (e) => {
        if(e.target.checked){
            const newFilter = Filters.map(item => item.label);
            setFilters([...newFilter]);
        } else {
            setFilters([]);
        }
    };

    return (
        <>
            <Modal
                visible={isShow}
                onCancel={() => setShow(false)}
                maskClosable={true}
                footer={null}>
                <div className=" pb-[23px]">
                    <div className="text-[#414047] font-semibold ml-[19px] pt-[18px]">
                        Filters
                        <Avatar style={{ marginLeft: '12px', backgroundColor: '#885FFF' }}>{selectedFilters?.length || 0}</Avatar>
                    </div>
                    <div className="ml-[18px] mt-[22px]">
                        <Checkbox onChange={handleAllCheck}><span className="font-semibold">All Experiences</span></Checkbox>
                        {Filters.length > 0 && Filters.map((item, index) => {
                            return(
                                <div className="mt-[20px]" key={index}>
                                    <Checkbox
                                        style={{ alignItems: 'center' }}
                                        onChange={() => {handleCheck(item.label)}}
                                        checked={selectedFilters.indexOf(item.label) > -1}
                                    >
                                        <div className="flex flex-row">
                                        {item.icon}
                                        <div className="ml-[15px] my-auto font-semibold">{item.label}</div>
                                        </div>
                                    </Checkbox>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Modal>
        </>
    )
};

export default FilterModal;
