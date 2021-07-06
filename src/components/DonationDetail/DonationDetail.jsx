import React from 'react'
import PropTypes from 'prop-types'
import './DonationSection.scss'
import { Col } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

export default function DonationDetail({ title, quantity, state,category, description }) {
  const { t } = useTranslation()
  return (
    <>
    <Col className = "col">  
        <text  className = "Pname">{title}</text>
        <br/>
      <text className = "stakeholder">
      {t('Donations.quantity')}  {quantity}
      </text>
      <br/>
      <text className = "stakeholder">
      {t('Donations.state')} : {state}
      </text><br/>
      <text className = "stakeholder">
      {t('Donations.state')} : {category}
      </text>
      <br/>
      <text  lassName = "description"> {t("Donations.desc")}</text>
      <br/>
      <h1 className = "desc">
        {description}
      </h1>
      </Col>
    </>
  )
}

DonationDetail.propTypes = {
  title: PropTypes.string,
  quantity: PropTypes.string,
  state: PropTypes.string,
  category: PropTypes.string,
  description: PropTypes.string,
}

DonationDetail.defaultProps = {
  title: '',
  quantity: 0,
  state:'unknown',
  category:'unknown',
  description: '',
}
