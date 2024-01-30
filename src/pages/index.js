import { Inter } from "next/font/google";
import { Client } from "../../contentfull/contentful_entry";
import { Box } from "@mui/material";
import BannerSection from "./components/BannerSection";
import ActivitySection from "./components/ActivitySection";
import PostSection from "./components/PostSection";
import CtaSection from "./components/CtaSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home({pageThemedata}) {
  console.log(pageThemedata)
  return (
    <Box>
      {
        pageThemedata?.[0]?.fields?.components?.map((componentdata,i)=>{
          return(
            <>

              {(() => {
                switch (componentdata?.sys?.contentType?.sys?.id) {
                  case "bannerSection":
                    return <BannerSection data={componentdata?.fields}/>;
                      case "activitySlider":
                      return <ActivitySection data={componentdata?.fields}/>;
                      case "postSection":
                  return <PostSection data={componentdata?.fields}/>;
                      case "ctaSection":
                  return <CtaSection data={componentdata?.fields}/>;
                }
              })()}

            </>
          )
        })
      }
    </Box>
  );
}

export const getServerSideProps = async(res,params)=>{
  const pageContent= await Client.getEntries({
      content_type:"page",
      "fields.slug": "/",
      include:10
  })
  const pageData = pageContent.items;

  return{
    props:{
      pageThemedata:pageData
    },
  }
}