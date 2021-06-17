import React from 'react'
import {Row} from 'react-bootstrap'
import DonationSection , {DonationContact } from '../../components/DonationInfo'
// import { useTranslation } from 'react-i18next'

export default function DonationDetails() {
    /* const { t } = useTranslation() */
    return (
            <div Style = "overflow-x:scroll;" >
                <Row>
                    <DonationSection/>
                    <DonationContact/>
                </Row>
            </div>
            )}