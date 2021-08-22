import React from 'react'
import AddDonationForm from '../../components/AddDonationForm'

export default function AddDonation() {
  document.title = "Add Donation";
  return (
    <div className="lg:px-20 ">
      <AddDonationForm />
    </div>
  )
}
