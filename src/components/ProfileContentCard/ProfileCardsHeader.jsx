import React from 'react'
import {Row} from 'react-bootstrap'
import AddDonationBtn from '../AddDonationBtn/AddDonationBtn'

export default function ProfileCardsHeader() {
  return (
    <Row className="border p-4 mx-5 mt-4 mb-2">
          My Donations
          <AddDonationBtn />
      </Row>
  )
}
