import React from "react"
import Banner from "./Banner/Banner"
import Category from "./Category/Category"
import TopRated from "./TopRated/TopRated"
import Content from "./ContentTab/Content"
import BannerStory from "./BannerStory/BannerStory"
import CustomerRate from "./CustomerRate/CustomerRate"
import LatestNew from "./LatestNew/LatestNew"
import BannerVideo from "./BannerVideo/BannerVideo"

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Category></Category>
            <TopRated></TopRated>
            <BannerStory></BannerStory>
            <BannerVideo></BannerVideo>
            <CustomerRate></CustomerRate>
            <LatestNew></LatestNew>
            <Content></Content>
        </>
    )
}

export default Home
