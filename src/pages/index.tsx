import { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
    return (
        <div className="text-blue-300">
            <Head>
                <title>Twitter Clone</title>
            </Head>
            <h1>Twitter clone home page</h1>
        </div>
    );
};

export default Home;
