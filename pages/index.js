import React, {useEffect, useState} from "react";
import {Layout} from "../components";
import styles from "../styles/Home.module.css"
import Logo from "../public/HomePage/Logo.svg"
import Near from "../public/HomePage/NearLogo.svg"
import SubTitle from "../public/HomePage/SubTitile.svg"
import PoweredBy from "../public/HomePage/PoweredBy.svg"
import Image from "next/image";
import {useRouter} from "next/router";

export default function Home() {
    const [redirectSeconds, setRedirectSeconds] = useState(3);
    const router = useRouter();
    const query = router.query;

    useEffect(() => {
        setInterval(() => {
            router.push("/dashboard");
        }, 2000)
    }, []);

    return (
        <Layout>
            <div align={"center"} className={` !h-[100vh] ${styles.home}`}>
                <Image src={Logo}/>
                <div className="mt-[9px]">
                    <Image src={SubTitle}/>
                </div>
                <div className={"absolute w-full bottom-[34px]"}>
                    <div>
                        <Image src={PoweredBy}/>
                    </div>
                    <div className={"mt-[21px]"}>
                        <Image src={Near}/>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
