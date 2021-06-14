import React from 'react'
import {Row} from 'react-bootstrap'
import DonationSection , {DonationContact } from '../../components/DonationInfo'

export default function DonationDetails() {
    return (
            <div Style = "overflow-x:scroll;" >
                <Row>
                    <DonationSection/>
                    <DonationContact/>
                </Row>
            </div>
            )}