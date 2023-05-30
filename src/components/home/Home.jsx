import React from "react";
import BooksCard from "../bookcard/BooksCard";
import CategoryCard from "../categorycard/CategoryCard";
import "./home.css";
import { UilArrowRight } from "@iconscout/react-unicons";
import Layout from "../layout/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="home-container">
        <h2 className="home-title">Trending Books</h2>
        <BooksCard />
        <button className="view-more">
          <div className="view-more-text">View More</div>
          <div className="view-arrow">
            <UilArrowRight />
          </div>
        </button>
        <h2 className="home-title">Top Categories</h2>
        <CategoryCard />
        <button className="view-more">
          <div className="view-more-text">View More</div>
          <div className="view-arrow">
            <UilArrowRight />
          </div>
        </button>
      </div>
    </Layout>
  );
};

export default Home;
