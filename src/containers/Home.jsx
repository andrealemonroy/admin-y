import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import Header from "../components/Header";
import CarouselItem from "../components/CarouselItem";
import useInitialState from "../hooks/useInitialState";
import "../assets/styles/App.scss";
import firebase from '../config.js';
import { getRoutesApi } from '../utils/api'
const API = "http://localhost:3000/initalState";

const Home = ({ mylist, trends, originals }) => {
  
  const getRoutes = async() =>{
    try{
      const { data } = await getRoutesApi()
      setRoutes(data.data.routeList)
    }
    catch(err){
      console.log(err)
    }
  }
  useEffect(() => {
    getRoutes()
  }, [])
  const [routes, setRoutes] = useState([])
  console.log(routes)
  return (
    <>
      <Header />
      <Search />
        <Categories title="Mi Lista">
          <Carousel>
            {routes.map((item) => (
              <CarouselItem key={item.id} {...item} isList />
            ))}
          </Carousel>
        </Categories>
      {/* <Categories title="Empresas de transporte">
        <Carousel>
          {trends.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
      <Categories title="Rutas"> 
        <Carousel>
          {trends.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>*/}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);
