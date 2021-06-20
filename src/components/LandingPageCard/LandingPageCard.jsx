import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useHistory } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { db } from '../../Firebase'
import noPhoto from '../../assets/noPhoto.jpg'

export default function LandingPageCard({
  productName,
  description,
  location,
  date,
  views,

  price,
  state,
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
    history.push(`/donationdetails/${id}`)
  }
  return (
    <Card
      className="w-72 h-96 bg-white  flex cursor-pointer rounded-3xl focus:outline-none relative shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
      style={{ Width: '360px', Height: '600px' }}
      onClick={handleClick}
      onKeyDown={handleClick}
      role="link"
      tabIndex={0}
    >
      <Card.Img 
        
          src={image}
          alt="Donation card"
          style={{ height: '10vm' }}
        />
        
      <Card.Body>
        <Card.Title >{productName}</Card.Title>
<Card.Text >
        <FontAwesomeIcon icon="eye" />
          {state}
       </Card.Text>
        <Card.Text>
        <FontAwesomeIcon icon="eye" />
          {description}
        </Card.Text>
        <Card.Text >
        <FontAwesomeIcon icon="eye" />
        {price}
      </Card.Text>
          <Card.Text>
            <FontAwesomeIcon icon="eye" />
            {views}</Card.Text>
            <Card.Text>
              <FontAwesomeIcon icon="clock" />
              {date.slice(0, 10)}
            </Card.Text>
            <Card.Text >
              <FontAwesomeIcon icon="map-marker-alt" />
              {location}</Card.Text>
      </Card.Body>
    </Card>
  )
}

LandingPageCard.propTypes = {
  image: PropTypes.string,
  id: PropTypes.string,
  productName: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,
  views: PropTypes.number,
  price: PropTypes.number,
  state: PropTypes.string,

  location: PropTypes.string,
}

LandingPageCard.defaultProps = {
  image: noPhoto,
  id: 0,
  productName: '',
  description: '',
  date: '',
  views: 0,
  price: 0,
  state: 'unknown',

  location: '',
}
