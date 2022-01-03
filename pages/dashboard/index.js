import React from "react";
import {Layout} from "../../components";
import Exchange from "../../public/Dashboard/Exchange.svg";
import Collectibles from "../../public/Dashboard/Collectibles.svg";
import Utilities from "../../public/Dashboard/Utilities.svg";
import Marketplace from "../../public/Dashboard/Marketplace.svg";
import Defi from "../../public/Dashboard/Defi.svg";
import Games from "../../public/Dashboard/Games.svg";
import SearchBar from "../../components/SearchBar";
import Categories from "./components/Categories";
import Defi2 from "../../public/Experience/Defi.svg";
import Docu from "../../public/Experience/Docu.svg";
import Docu2 from "../../public/Experience/Docu2.svg";
import Experience from "./components/Experience";
import Search from "../../public/Search.svg";
import Image from "next/image";
import Image2 from "next/image";
import FilterIcon from "../../public/Filter.svg";
import styles from "../../styles/Dashboard.module.css";
import Filter from "../../components/Filter";


export default function Dashboard() {
    const categories = [
        {icon: Exchange, title: "Exchanges", bgColorCard: "#EAEFFF", bgColorIcon: "#587BE0", right: "3px"},
        {icon: Games, title: "Games", bgColorCard: "#F5F5F5", bgColorIcon: "#414047"},
        {icon: Marketplace, title: "Marketplace", bgColorCard: "#E2F9F3", bgColorIcon: "#34AE91"},
        {icon: Defi, title: "Defi", bgColorCard: "#FFF3EC", bgColorIcon: "#F98F54"},
        {icon: Collectibles, title: "Collectibles", bgColorCard: "#EBF5FF", bgColorIcon: "#54AAF9"},
        {icon: Utilities, title: "Utilities", bgColorCard: "#F0EBFF", bgColorIcon: "#885FFF"},
    ]
    const recentExperience = [
        {icon: Defi2, title: "DeFi Swap", subTitle: "Swap your digital assets", users: "+200"},
        {icon: Docu, title: "Docu sign", subTitle: "sign smart contracts seamlessly", users: "+1K"},
    ]
    const trendingExperience = [
        {icon: Docu2, title: "Docu Sign", subTitle: "sign smart contracts seamlessly", users: "+200"},
        {icon: Docu, title: "Docu sign", subTitle: "sign smart contracts seamlessly", users: "+200"},
    ]
    return (
        <Layout>
            {/*<div className={"flex pr-[16px]"}>*/}
            {/*    <SearchBar id={"searchBar"} className={"search-bar"} placeHolder={"Search experiences"}*/}
            {/*               icon={<Image alt="image"  src={Search}/>} placeholder={"Search experiences"}/>*/}
            {/*    <span className="self-center">*/}
            {/*        <Image alt="image"  src={FilterIcon} className={styles.filterButton}/>*/}
            {/*    </span>*/}
            {/*</div>*/}
            <Filter className={"pb-[14px]"}/>
            <div className={"overflow-auto h-[calc(100vh-136px)]"}>
                <Experience title="Recent Experiences" experience={recentExperience}/>
                <Categories categories={categories}/>
                <Experience className={"mt-[30px]"} title="Trending Experiences" experience={trendingExperience}/>
            </div>
        </Layout>
    )
}
