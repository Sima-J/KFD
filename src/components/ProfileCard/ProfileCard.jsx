



import React from 'react'
import {Image, Card} from 'react-bootstrap'
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
                

                <Card className="cardCol pt-1 " data-aos="zoom-in">

                <div>
                    <Image src={Prof} fluid className = "profile" />
                </div>
                    <text className= "name" > <h1 className = "align2"> Best Super Market </h1> </text>
                                
                    <text className= "info"> <h1 className = "align1"> +964 750 113 0495      <br/> Iraq, Sulaymaniyah      </h1> </text>
                    <br/>
                    <br/>
                    <br/>
                </Card>
                <div> 
                    <br/>
                    <br/>
                    <br/>
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
                    <h1>Donations.....</h1>
                </div>
            </div>
        </div>
    )
}