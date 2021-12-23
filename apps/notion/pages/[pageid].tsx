import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { NotionAPI } from 'notion-client'
import { NotionRenderer } from 'react-notion-x'

const notion = new NotionAPI();

export const getStaticProps = async (context) => {
    const pageId = context?.params?.pageid;

    // const props = await resolveNotionPage(domain, rawPageId)
    console.log(pageId);
    const recordMap = await notion.getPage(pageId)


    return { props: {
      recordMap
    }, revalidate: 10 }
  }

  export async function getStaticPaths() {
      return {
        paths: [],
        fallback: true
      }
  
    // const siteMaps = await getSiteMaps()
  
    // const ret = {
    //   paths: siteMaps.flatMap((siteMap) =>
    //     Object.keys(siteMap.canonicalPageMap).map((pageId) => ({
    //       params: {
    //         pageId
    //       }
    //     }))
    //   ),
    //   // paths: [],
    //   fallback: true
    // }
  
    // console.log(ret.paths)
    // return ret
  }


export default function Home(props) {

  return (
    <NotionRenderer recordMap={props?.recordMap} fullPage={true} darkMode={false} />
  )
}
