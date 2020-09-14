import React, { Component, useState, useEffect } from "react"
import { connect } from "react-redux"
import Categories from "../components/Categories"
import Carousel from "../components/Carousel"
import Header from "../components/Header"
import CarouselItem from "../components/CarouselItem"
import useInitialState from "../hooks/useInitialState"
import "../assets/styles/App.scss"
import firebase from "../config.js"
import { getRoutesApi } from "../utils/api"
const API = "http://localhost:3000/initalState"

const Home = ({ mylist, trends, originals }) => {
  const [routes, setRoutes] = useState([])
  const [filteredRoutes, setfilteredRoutes] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const editSearchTerm = e => {
    setSearchTerm(e.target.value)
    dynamicSearch()
  }

  const dynamicSearch = async () => {
    let filtered = routes.filter(route =>
      route.agencyName.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
    setfilteredRoutes(filtered)
  }
  const getRoutes = async () => {
    try {
      const { data } = await getRoutesApi()
      setRoutes(data.data.routeList)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getRoutes()
  }, [])

  return (
    <>
      <Header />
      <h2 className="main__title">¿Qué empresa de transporte buscas?</h2>
      <input
        className="input"
        type="text"
        value={searchTerm}
        onChange={editSearchTerm}
        placeholder="Search for a name!"
      />
      <Categories title="Mi Lista">
        <Carousel>{
          searchTerm == '' ? routes.map(item => (
            <CarouselItem key={item.id} {...item} isList />
          )) : filteredRoutes.map(item => (
            <CarouselItem key={item.id} {...item} isList />
          ))
        }
          
        </Carousel>
      </Categories>
    </>
  )
}

const mapStateToProps = state => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals
  }
}

export default connect(mapStateToProps, null)(Home)
