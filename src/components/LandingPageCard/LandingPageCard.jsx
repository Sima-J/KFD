import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useHistory } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { db } from '../../Firebase'
import noPhoto from '../../assets/noPhoto.jpg'
import './LandingCard.scss'

export default function LandingPageCard({
  productName,
  location,
  date,
  views,

  quantity,
  state,
  id,
  image,
}) {
  const history = useHistory()

  const hanldeView = async () => {
    const fileRef = db.collection('donations').doc(id)
    fileRef.set({ views: views + 1 }, { merge: true })
  }
  const handleClick = () => {
    hanldeView()
    history.push(`/donationdetails/${id}`)
  }
  return (
    <Card className="CardLa"
      onClick={handleClick}
      onKeyDown={handleClick}
      role="link"
      
      tabIndex={0}
    >
     
      
     <Card.Img className="card-img-top"
      src={image} 
          alt="Donation card"
        />
      
      <Card.Body>
        <Card.Title >{productName}</Card.Title>
<Card.Text >
        <FontAwesomeIcon icon="hand-holding-heart" className="mr-1" />
          {state}
       </Card.Text>
        
        <Card.Text className="text-center" >
        <FontAwesomeIcon icon="balance-scale"  className="mr-1" />
        {quantity}
    
            <FontAwesomeIcon icon="eye"  className="ml-2 mr-1" />
            {views}
            </Card.Text>
            <Card.Text className="text-center">
              <FontAwesomeIcon icon="clock"  className="mr-1" />
              {date.slice(0, 10)}
              <FontAwesomeIcon icon="map-marker-alt"  className="ml-2 mr-1"/>
              {location}</Card.Text>
      </Card.Body>
    </Card>
  )
}

LandingPageCard.propTypes = {
  image: PropTypes.string,
  id: PropTypes.string,
  productName: PropTypes.string,
  date: PropTypes.string,
  views: PropTypes.number,
  quantity: PropTypes.number,
  state: PropTypes.string,

  location: PropTypes.string,
}

LandingPageCard.defaultProps = {
  image: noPhoto,
  id: 0,
  productName: '',
  date: '',
  views: 0,
  quantity: 0,
  state: 'unknown',

  location: '',
}
