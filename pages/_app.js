import '../styles/globals.css';
import 'antd/dist/antd.css';
import Header from "../components/Header";
import React from "react";
import {useRouter} from "next/router";

function MyApp({Component, pageProps}) {
    const router = useRouter()
    return <>
        <div className="relative">
            {router.pathname !== "/" && <Header/>}
            <Component {...pageProps} />
        </div>
    </>
}

export default MyApp
