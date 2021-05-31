import React from 'react'
import {Row} from 'react-bootstrap'
import DonationSection , {DonationContact } from '../../components/DonationInfo'


export default function DonationDetails() {
    return (
        <div>
            <Row>
                <DonationSection/>
                <DonationContact/>
            </Row>
        </div>
    )
}
