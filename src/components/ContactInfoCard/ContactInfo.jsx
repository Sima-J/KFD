import React from 'react'
import {Col,Image} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import userIcon from '../../assets/userIcon.png'
import './DonationContact.scss'

export default function ContactInfo({
  profileImg,
  name,
  phone,
  location,
  views,
  publishDate,
}) {
  const { t } = useTranslation()
  return (
    
    <Col>

    <table>

        <thead>

            <tr>
                <Image className = "PIcon"
                src={profileImg}
                fluid />
                <br/>
                
                {name}
            </tr>  

        </thead> 
                    
        <tbody>

            <td className = "td">
                {t('donationcontact.callowner')}
                Call the Donors
                <br/>
                <FontAwesomeIcon className="icon" icon="phone"/>{'  '}
                {phone}
            </td>

            <tr>
{location}                        </tr>

           

            <tr>
               {publishDate}
            </tr>

            <tr>
                {views}
            </tr>

        </tbody>

    </table>          

 </Col>
  )
}



ContactInfo.propTypes = {
  profileImg: PropTypes.string,
  name: PropTypes.string,
  phone: PropTypes.string,
  location: PropTypes.string,
  views: PropTypes.number,
  publishDate: PropTypes.string,
}

ContactInfo.defaultProps = {
  profileImg: userIcon,
  name: 'Not Provided',
  phone: '',
  location: '',
  views: 0,
  publishDate: '',
}
