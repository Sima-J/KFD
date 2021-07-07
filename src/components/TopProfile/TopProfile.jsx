import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Image, Card, Button} from 'react-bootstrap'
import Cover from '../../assets/Pcover.png'
import { OpenSettingModal } from '../../redux'
import './TopProfile.scss'

export default function TopProfile() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.authentication)
  
  return (
   
    <div className = "fontcolorb"  >
        <box className= "box">
        The KFD Web App is an online platform that allow user to donate food or request Donations.
        </box>
        <Image className = "cover" src={Cover} fluid/>

    <div>  
                    <Card className="cardCol pt-1 " data-aos="zoom-in">

                        <div>
                            <Image               src={user.user.photo}
                            fluid className = "profile" />
                        </div>

                        <text className= "name" >   
                            <h1 className = "align2"> 
                            {user.user.name}

                            <Button
                        type="button"
                        className="TPC"
                        onClick={() => dispatch(OpenSettingModal())}
                      >
                        <FontAwesomeIcon icon="edit" className=" hover:shadow" />
                      </Button>   </h1>
                        </text>   

                        <text className= "info">  
                        
                            <h1 className = "align1"> 
                            {user.user.phone}
                                                            <br/> 
                                                            {user.user.city}
                                                                                        </h1> 
                        </text>

                        <br/>
                        <br/>
                        <br/>

                    </Card>
                    </div>
</div>

      
    
  )
}
