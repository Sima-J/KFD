import React from 'react'
import { Card, Container } from 'react-bootstrap'
import Carousel from 'react-multi-carousel'
import { useSelector } from 'react-redux'
import uuid from 'react-uuid'
import PropTypes from 'prop-types'
import LandingPageCard from '../LandingPageCard'
import 'react-multi-carousel/lib/styles.css'
import '../../App.scss'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
}

export default function Carousal({ condition }) {
  const products = useSelector(state => state.products)

  return (
    <Container>
    <Carousel
      responsive={responsive}
      draggable
      ssr
      infinite
      keyBoardControl
      itemClass="grid justify-items-center p-6 my-5"
    >
      {products.loading === false ? (
        products.data
          .filter(item => item.state === condition)
          .map(item => {
            return (
              <Card key={uuid()}>
                <LandingPageCard
                  id={item.id}
                  productName={item.productName}
                  description={item.description}
                  date={item.date}
                  views={item.views}
                  price={Number(item.price)}
                  state={item.state}
                  location={item.location}
                  image={item.images ? item.images[0] : undefined}
                />
              </Card>
            )
          })
      ) : (
        <div>No data...</div>
      )}
    </Carousel>
    </Container>
  )
}

Carousal.propTypes = {
  condition: PropTypes.string,
}

Carousal.defaultProps = {
  condition: '',
}
