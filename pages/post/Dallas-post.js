import Link from "next/link"
import Layout from "../../components/layout"
import Head from 'next/head'

export default function DallasPost(){
    return(
        <Layout>
            <Head>
                <title>Dallas's Post</title>
            </Head>
        <h1>Dallas is the best</h1>
        <h2><Link href="/">Back home</Link></h2>
        </Layout>
    )
}