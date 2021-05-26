import React from 'react'
import {Image} from 'react-bootstrap'
import Cover from '../../assets/Pcover.png'
import Prof from '../../assets/Profile.png'
import './ProfileCard.scss'
// import ProfileCard from '../../components/ProfileCard';

export default function ProfileCard() {
    return (
        <div>
            <div>
                <box className= "box">
                    The main issues to solve are achieving food security,
                    end hunger improving the food nutrition.
                </box>
                <Image className = "cover" src={Cover} fluid/>
            </div>
        
            <div>
                <div>
                    <Image src={Prof} fluid className = "profile" />
                </div>
                <div>
                    <h1 className= "name" > Name Of The User</h1>
                    <h1 className= "info"> User Info </h1>
                </div>
                <div> 
                    <h1> Experimental</h1>
                    {/* this is only to seperate the header from the footer for the time being */}
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    Donations.....
                </div>
            </div>
        </div>
    )
}