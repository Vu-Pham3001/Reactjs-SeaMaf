import React from "react";
import './content.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Button } from "@mui/material";

const slideImages = [
    'assets/img/slider-1.webp',
    'assets/img/slider-2.webp'
];

export default function Slider() {
    return(
        <div>
            <Slide easing="ease">
                <div className="each-slide">
                    <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                        <div className="title-slider">
                            <div style={{fontSize:'18px', color:'#fff',  fontWeight:'600'}}>Beads</div>
                            <p style={{fontSize:'16px', color:'#fff'}}>We have a wide range of beads from hair beads, necklaces, bracelets etc</p>
                            <div style={{display:'flex'}}>
                                <Button variant="contained"
                                    sx={{background:'none', marginRight:'3%'}}
                                >
                                    Buy Now
                                </Button>
                                <Button variant="contained"
                                    sx={{background:'#fff', color:'#000'}}
                                >
                                    INQUIRE
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                        <div className="title-slider">
                            <div style={{fontSize:'18px', color:'#fff', fontWeight:'600'}}>Event planning and Management</div>
                            <p style={{fontSize:'16px', color:'#fff'}}>We do event planning management for all different types of events from weddings, birthdays ,coopera...</p>
                            <div style={{display:'flex'}}>
                                <Button variant="contained"
                                    sx={{background:'none', marginRight:'3%'}}
                                >
                                    Buy Now
                                </Button>
                                <Button variant="contained"
                                    sx={{background:'#fff', color:'#000'}}
                                >
                                    INQUIRE
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Slide>
        </div>
    );
}