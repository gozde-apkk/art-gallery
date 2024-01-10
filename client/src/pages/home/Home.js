import React from "react";

import { Link } from "react-router-dom";
import "../../style/style.css";
import Artist from "../../layout/Artist";
import HomeNftSection from "../../components/home/HomeNftSection";
import Footer from "../../components/footer/Footer";
import HomeInfoBox from "../../customer/components/HomeInfoBox";
import { useSelector } from "react-redux";
import { selectAllProducts } from "../../redux/features/products/productsSlice";
import Section from "../../components/section/Section";

const Home = () => {

    const products = useSelector(selectAllProducts);
  return (
    <div className="w-full h-full text-white bg-black">
      <div className="flex-grow flex-1 mx-auto  my-5 w-full max-w-screen-xl ">
        <div className="py-20 md:px-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold px-2.5  tracking-tight text-gray-300 sm:text-6xl">
          Digital presence is the inner expression  
            <span
              style={{
                color: "crimson",
              }}
            >
              {" "}
              of creativity.{" "}
            </span>
            .{" "}
          </h1>{" "}
          <div className="flex flex-col text-white sm:flex-row gap-4 mt-6">
            <Link to="/store" className="hover:text-crimson">
              Browse Trending{" "}
            </Link>{" "}
         <Link  className="hover:text-crimson" to='/quality'>
         <button>  Our quality promise  </button>{" "}
         </Link>
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className=" h-full w-full justify-center flex flex-col">

        <Section products={products}/>


        <Artist />
        <HomeInfoBox />
        <Footer />
      </div>{" "}
    </div>
  );
};

export default Home;
