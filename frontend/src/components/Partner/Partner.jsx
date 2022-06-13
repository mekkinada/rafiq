import React, { Component } from "react";
import PropTypes from "prop-types";
import OwlCarousel from "react-owl-carousel3";
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import Icofont from 'react-icofont';

import './stylespartner.css'
class Partners extends Component {
    render() {
        //Partner loop start
        const partnerData = this.props.partnersData.map((partner, index) => (
            <div className="single-partner-logo main" key={index}>
                <Link to={partner.partnerLink} className="logo-preview">
                    <img src={partner.partnerLogo} alt="partnerLogo" width = "100px"   height = "100px" />
                    
                </Link>
            </div>
        ));
        //Partner loop END
        return (
            <React.Fragment>
                <section className="our-partners ptb-100 main">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <ScrollAnimation animateIn="fadeInUp">
                                    <div className="section-title">
                                    <h1 > {this.props.sectionTitle} </h1>

                                        
                                        <p>{this.props.sectionDescription}</p>
                                        <span className="section-title-bg">{this.props.SectionbgTitle}</span>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>

                        <div className="row">
                            <OwlCarousel
                                className="owl-theme partners-slides"
                                dots= {false}
                                loop={true}
                                margin={100}
                                autoplay={true}
                                smartSpeed={1000}
                                nav={true}
                                navText={[
                                    "<i class='icofont-arrow-left text-success'></i>",
                                    "<i class='icofont-arrow-right text-success'></i>"
                                ]}
                                responsive={{
                                    0: { items: 1 },
                                    768: {
                                        items: 3
                                    },
                                    1200: {
                                        items: 5
                                    }
                                }}
                            >
                                {partnerData}
                            </OwlCarousel>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

//Props Types
Partners.propTypes = {
    SectionbgTitle: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    partnersData: PropTypes.array
};

//Default Props
Partners.defaultProps = {
    SectionbgTitle: "",
    sectionTitle: " شركاؤنا",
    sectionDescription: "",
    partnersData: [
        {
            partnerLogo:   "./imageP1.jpeg" ,  
        
        },
       
        {
            partnerLogo:   "./imageP2.jpeg" ,  
        
        },

        {
            partnerLogo:   "./imageP3.jpeg" ,  
        
        },

        {
            partnerLogo:   "./imageP4.jpeg" ,  
        
        },

        {
            partnerLogo:   "./imageP5.jpeg" ,  
        
        },

        {
            partnerLogo:   "./imageP6.jpeg" ,  
        
        },

        {
            partnerLogo:   "./imageP1.jpeg" ,  
        
        },

        {
            partnerLogo:   "./imageP7.jpeg" ,  
        
        },

        {
            partnerLogo:   "./imageP8.jpeg" ,  
        
        },

        {
            partnerLogo:   "./imageP9.jpeg" ,  
        
        },

        {
            partnerLogo:   "./imageP10.jpeg" ,  
        
        },

        {
            partnerLogo:   "./imageP11.jpeg" ,  
        
        },

     
    ]
};
export default Partners;
