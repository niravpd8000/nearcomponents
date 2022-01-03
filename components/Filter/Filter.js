import React, { useState } from "react";
import CustomSearchInput from "../SearchBar";
import Image from "next/image";
import FilterModal from "./FilterModal";
import SearchIcon from "../../public/search.svg";
import FilterIcon from "../../public/filter.svg";

const Filter = () => {
    const [isShow, setShow] = useState(false);
    const [selectFilters, setFilters] = useState([]);
    return (
        <>
            <div className="w-full sticky top-[70px] bg-white pb-[14px] z-[100]">
                <div className="flex pl-[16px]">
                    <CustomSearchInput
                        name="search"
                        className="search-bar !border-0 !bg-[#F5F5F5] !rounded-[8px] !w-4/5 !py-[8px] "
                        onChange={() => {
                        }}
                        id="searchBar"
                        placeHolder="Search experiences"
                        icon={<Image alt="image"  src={SearchIcon}/>}
                    />
                    <span className=" self-center mt-[14px] cursor-pointer" onClick={() => setShow(!isShow)}>
                            <Image alt="image"  src={FilterIcon}/>
                        </span>
                </div>
            </div>
            <FilterModal isShow={isShow} selectedFilters={selectFilters} setFilters={setFilters} setShow={setShow} />
        </>
    )
};

export default Filter;
