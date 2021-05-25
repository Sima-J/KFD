import React from 'react';
import { Image} from 'react-bootstrap'
import ProfilePic from '../../assets/ProfilePic.png'
import Cover from '../../assets/ProfileBackground.png'
import ProfileCard from '../../components/ProfileCard';

function Profile() {
    return(
        <div className="profile-wrapper">
        <ProfileCard />
            <div className="cover">
                <Image src = {Cover} fluid />
            </div>

            <div className="profile-info">
                <div className="profile-picture">
                
                    <Image 
                    src={ProfilePic} 
                    fluid />
h
                </div>
                <div className="info">
h
                </div>
            </div>
        </div>

    

        
    )
}

export default Profile;
