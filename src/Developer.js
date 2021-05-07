// https://mail.google.com/mail/u/0/#inbox?compose=DmwnWsCbJgdVxhrlwvwBxbjFFnnvPHvLCVnWntbwJMzHCMmQVFknkfJhbDzXhmWVsrqpjlnmwsTL
import React from 'react'
import { Avatar } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import './Developer.css';
function Developer({avatar, title, FB__id, LinkedIn__Url,Github_url,Contribution}) {
    return (
        <div className="developer">
            <div className="Top_Content">
            {avatar && (
                <Avatar className='headerOption__icon' src={avatar} />
            ) }
            <h4>{title}</h4>
            
            <IconButton aria-label="gmail.com" onClick={() => window.open(FB__id)}>
                <FacebookIcon fontSize="large" />
            </IconButton>
            <IconButton aria-label="Linkedin.com" onClick={() => window.open(LinkedIn__Url)}>
                    <LinkedInIcon fontSize="large"/>                
            </IconButton>
            <IconButton aria-label="Github.com" onClick={() => window.open(Github_url)}>
                    <GitHubIcon fontSize="large"/>                
            </IconButton>
            
            </div>
            <p>{Contribution}</p> 
        </div>
    )
}

export default Developer
