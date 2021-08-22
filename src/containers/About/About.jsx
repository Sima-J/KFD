import React from 'react'
import AboutUs, {TeamMembers , Sponser} from '../../components/AboutUs' 

export default function About() {
    document.title = "About";
    return (
            <div>
                <AboutUs />
                <TeamMembers />
                <Sponser />
            </div>
            )}