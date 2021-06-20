import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { useParams, useHistory } from 'react-router-dom'
import moment from 'moment'
import { Col, Row } from 'react-bootstrap'
import ContactInfoCard from '../../components/ContactInfoCard'
import DonationDetail, { SlideShow } from '../../components/DonationDetail'


export default function ProductDetails() {
  const { t } = useTranslation()
  const history = useHistory()
  function timing(date) {
    const now = moment()
    const then = moment(date)
    const seconds = now.diff(then, 'seconds')

    const week = parseInt(seconds / 604800, 10)
    const day = parseInt((seconds % 604800) / 86400, 10)
    const hour = parseInt(((seconds % 604800) % 86400) / (60 * 60), 10)
    const min = parseInt((((seconds % 604800) % 86400) / (60 * 60)) * 60, 10)

    if (week > 0) return `${week} w`

    if (day > 0) return `${day} d`

    if (hour > 0) return `${hour} h`

    return `${min} m`
  }

  const products = useSelector(state => state.products)
  const { id } = useParams()
  const [data, setData] = useState(null)

  useEffect(() => {
    const currentItem = products.data.find(item => item.id === id)
    if (currentItem) {
      setData(currentItem)
    } else if (products.data.length !== 0 && !currentItem) {
      history.push('/NotFound')
    }
  }, [products.data, id])

  return (
    <>
      <button
        type="button"
        className="border focus:outline-none  lg:mx-40 my-4 px-5 py-2 rounded-md hover:bg-blue hover:text-white transition duration-300 ease-in-out shadow-md hover:shadow-none "
        onClick={() => history.goBack()}
      >
        <FontAwesomeIcon icon="chevron-left" /> {t('back')}
      </button>

      <div className="  lg:space-x-5 grid  grid-cols-1 lg:grid-cols-3 lg:px-20  ">
        {data ? (
          <>
              <SlideShow images={data.images} />
              <Row>

              <Col >
                <DonationDetail
                  title={data.productName}
                  price={new Intl.NumberFormat().format(data.price)}
                  description={data.description}
                />
              </Col>
            <Col className="     ">
              <ContactInfoCard
                profileImg={data.userImg}
                name={data.userName}
                phone={data.phone ? data.phone : 'Not Provided'}
                location={data.location}
                views={data.views}
                publishDate={`${timing(data.date)} ago`}
              />
            </Col>
            </Row>
          </>
        ) : (
          <div className="grid justify-center items-center h-screen max-w-screen-xl w-screen ">
            <FontAwesomeIcon
              icon="spinner"
              spin
              size="10x"
              className="text-blue "
            />
          </div>
        )}
      </div>
    </>
  )
}
