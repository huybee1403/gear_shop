import React from "react"
import Header from "../../global/Header/Header"
import Banner from "./Banner/Banner"
import Category from "./Category/Category"
import TopRated from "./TopRated/TopRated"
import Content from "./ContentTab/Content"
import BannerStory from "./BannerStory/BannerStory"
import CustomerRate from "./CustomerRate/CustomerRate"

const Home = () => {
    return (
        <>
            <Header></Header>
            <Banner></Banner>
            <Category></Category>
            <TopRated></TopRated>
            <BannerStory></BannerStory>
            <CustomerRate></CustomerRate>
        </>
    )
}

export default Home
