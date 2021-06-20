import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import { Col } from 'react-bootstrap'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import uuid from 'react-uuid'
import PropTypes from 'prop-types'
import noPhoto from '../../assets/noPhoto.jpg'
import './DonationSection.scss'

export default function SlideShow({ images }) {
  if (images.length < 1) {
    images.push(noPhoto)
  }
  return (
      <Col >
        <Carousel
          showArrows
          showThumbs
          className="lg:col-span-8 lg:col-start-2  "
        >
          {images.map(img => {
            return (
              <div
                key={uuid()}
                className = "Dimag"                >
                <img
                  alt=""
                  src={img}
                  className="  object-contain max-h-96 w-full "
                />
              </div>
            )
          })}
        </Carousel>
      </Col>
  )
}
SlideShow.defaultProps = {
  images: [noPhoto],
}

SlideShow.propTypes = {
  images: PropTypes.arrayOf,
}
