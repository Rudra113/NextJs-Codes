import React from 'react'
import Script from 'next/script'

const About = () => {
    return (
        <div>
            <Script>{`alert("Welcome to About Page")`}</Script>
            About
        </div>
    )
}

export default About

export const metadata = {
    title: "About Facebook from Meta - Connecting The World",
    description: "About Facebook",
};