import React from 'react'
import { useHistory } from 'react-router-dom'
import { PropTypes } from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import noPhoto from '../../assets/noPhoto.jpg'
import { db } from '../../Firebase'

export default function SearchPageCard({
  productName,
  description,
  price,
  views,
  state,
  location,
  date,
  id,
  image,
}) {
  const history = useHistory()
  const hanldeView = async () => {
    const fileRef = db.collection('products').doc(id)
    fileRef.set({ views: views + 1 }, { merge: true })
  }
  const handleClick = () => {
    hanldeView()
    history.push(`/donationsdetails/${id}`)
  }
  return (
    <div
      className="w-52 cursor-pointer rounded-xl  h-72 bg-white shadow-md mx-6 mb-10 relative rounded-md transform hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out"
      onClick={handleClick}
      onKeyDown={handleClick}
      role="link"
      tabIndex={0}
    >
      <img
        src={image}
        alt="car"
        className="rounded-t-xl  border  object-cover  h-40 w-full"
      />
    
        <div className="absolute text-white bg-orange top-0 left-0 px-2 rounded-tl-md">
          {state}
        </div>
      
      <div className="font-bold my-2 ml-1 truncate">{productName}</div>

      <div className="flex justify-between items-center ml-1 space-x-2">
        <p className="text-xs h-12 overflow-ellipsis overflow-hidden ">
          {description}
        </p>
        <div className="bg-yellow text-xs font-black px-3 rounded-l py-1.5">
          {state === 'Free'
            ? 'Free'
            : ` $${new Intl.NumberFormat().format(price)}`}
        </div>
      </div>

      <div className="text-xs flex justify-between px-2 pb-2 absolute inset-x-0 bottom-0 ">
        <div className="flex space-x-1">
          <FontAwesomeIcon icon="eye" />
          <p className="">{views}</p>
        </div>
        <div className="flex space-x-2">
          <div className="flex space-x-1">
            <FontAwesomeIcon icon="clock" />
            <p>{date.slice(0, 10)}</p>
          </div>

          <div className="flex space-x-1">
            <FontAwesomeIcon icon="map-marker-alt" />
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

SearchPageCard.propTypes = {
  image: PropTypes.string,
  id: PropTypes.number,
  productName: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,
  views: PropTypes.number,
  price: PropTypes.number,
  state: PropTypes.string,
  location: PropTypes.string,
}

SearchPageCard.defaultProps = {
  image: noPhoto,
  id: null,
  productName: '',
  description: '',
  date: '',
  views: 0,
  price: 0,
  state: '',
  location: '',
}
