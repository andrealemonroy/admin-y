import React from "react"
import "../assets/styles/components/CarouselItem.scss"
import { Text } from "./"
//icons
import playIcon from "../assets/static/play-icon.png"
import plusIcon from "../assets/static/plus-icon.png"
import removeIcon from "../assets/static/remove-icon.png"

//Data validation
import PropTypes from "prop-types"

//Redux
import { connect } from "react-redux"
import { setFavorite, deleteFavorite } from "../actions"

const CarouselItem = props => {
  const { id, agencyName, mode, shortName, cover, isList } = props
  const handleSetFavorite = () => {
    props.setFavorite({
      id,
      agencyName,
      mode,
      shortName
    })
  }
  const handleDeleteFavorite = itemId => {
    props.deleteFavorite(itemId)
  }
  return (
    <div className="carousel-item">
      {/* <img className="carousel-item__img" src={cover} alt={agencyName} /> */}
      {/* <div className="carousel-item__details"> */}
      <div>
        <img
          className="carousel-item__details--img"
          src={playIcon}
          alt="Play Icon"
        />
        {isList ? (
          <img
            className="carousel-item__details--img"
            src={removeIcon}
            alt="Remove Icon"
            onClick={() => handleDeleteFavorite(id)}
          />
        ) : (
          <img
            className="carousel-item__details--img"
            src={plusIcon}
            alt="Plus Icon"
            onClick={() => handleSetFavorite(id)}
          />
        )}
      </div>
      <Text large semibold>
        {agencyName}
      </Text>
      <br />
      <Text little semibold>
      {`${mode} ${shortName}`}
      </Text>
    </div>
    // </div>
  )
}

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number
}

// Redux
const mapDispatchToProps = {
  setFavorite,
  deleteFavorite
}

// export default CarouselItem;
export default connect(null, mapDispatchToProps)(CarouselItem)
