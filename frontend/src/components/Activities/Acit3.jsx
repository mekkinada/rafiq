import React, { Component } from "react";
import Icofont from "react-icofont";
import PropTypes from "prop-types";
import ScrollAnimation from "react-animate-on-scroll";
import { MDBContainer, MDBRow } from "mdbreact";
import Lightbox from "react-image-lightbox";
import './styleAcit.css'


const images = [
    "./a200.jpg" ,
    "./a201.jpg" ,
    "./a202.jpg" ,
    "./a203.jpg" ,
    "./a204.jpg" ,
    "./a205.jpg" ,
    "./a206.jpg" ,
    "./a207.jpg" ,
    "./a208.jpg" ,
    "./a209.jpg" ,
    "./a210.jpg" ,
    "./a211.jpg" 
     
  ];
  
  const smallImages = [
    "./a200.jpg" ,
    "./a201.jpg" ,
    "./a202.jpg" ,
    "./a203.jpg" ,
    "./a204.jpg" ,
    "./a205.jpg" ,
    "./a206.jpg" ,
    "./a207.jpg" ,
    "./a208.jpg" ,
    "./a209.jpeg" ,
    "./a210.jpg" ,
    "./a211.jpg" 
     
  ];

class Acit3 extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          photoIndex: 0,
          isOpen: false
        };
      }

    render() {
        const { photoIndex, isOpen } = this.state;
        return (
            <React.Fragment>
                <section id="works" className="our-works ptb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <ScrollAnimation animateIn="fadeInUp">
                                    <div className="section-title">
                                        <h2>{this.props.sectionTitle}</h2>
                                        <p>{this.props.sectionDescription}</p>
                                        <span className="section-title-bg">
                                            {this.props.SectionbgTitle}
                                        </span>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>

                    <MDBContainer>
                        <div className="mdb-lightbox no-margin">
                            <MDBRow>
                                <div className="col-md-6 col-lg-4">
                                    <div className="work-details">
                                        <figure>
                                            <img
                                            src={smallImages[0]}
                                            alt="Gallery 0"
                                            className="img-fluid"
                                            width= "360px"
                                            height = "390px"
                                            />
                                          
                                        </figure>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-4">
                                    <div className="work-details">
                                        <figure>
                                            <img
                                            src={smallImages[1]}
                                            alt="Gallery 1"
                                            className="img-fluid"
                                            width= "360px"
                                            height = "390px"
                                            />
                                          
                                        </figure>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-4">
                                    <div className="work-details">
                                        <figure>
                                            <img
                                            src={smallImages[2]}
                                            alt="Gallery 2"
                                            className="img-fluid"
                                            width= "360px"
                                            height = "390px"
                                            />
                                            
                                        </figure>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-4">
                                    <div className="work-details">
                                        <figure>
                                            <img
                                            src={smallImages[3]}
                                            alt="Gallery 3"
                                            className="img-fluid"
                                            width= "360px"
                                            height = "390px"
                                            />
                                            
                                        </figure>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-4">
                                    <div className="work-details">
                                        <figure>
                                            <img
                                            src={smallImages[4]}
                                            alt="Gallery 4"
                                            className="img-fluid"
                                            width= "360px"
                                            height = "390px"
                                            />
                                        </figure>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-4">
                                    <div className="work-details">
                                        <figure>
                                            <img
                                            src={smallImages[5]}
                                            alt="Gallery 5"
                                            className="img-fluid"
                                            width= "360px"
                                            height = "390px"
                                            />
                                        </figure>
                                    </div>
                                </div>

                                
                                <div className="col-md-6 col-lg-4">
                                    <div className="work-details">
                                        <figure>
                                            <img
                                            src={smallImages[6]}
                                            alt="Gallery 6"
                                            className="img-fluid"
                                            width= "360px"
                                            height = "390px"
                                            />
                                        </figure>
                                    </div>
                                </div>

                                
                                <div className="col-md-6 col-lg-4">
                                    <div className="work-details">
                                        <figure>
                                            <img
                                            src={smallImages[7]}
                                            alt="Gallery 7"
                                            className="img-fluid"
                                            width= "360px"
                                            height = "390px"
                                            />
                                        </figure>
                                    </div>
                                </div>

                                
                                <div className="col-md-6 col-lg-4">
                                    <div className="work-details">
                                        <figure>
                                            <img
                                            src={smallImages[8]}
                                            alt="Gallery 8"
                                            className="img-fluid"
                                            width= "360px"
                                            height = "390px"
                                            />
                                        </figure>
                                    </div>
                                </div>

                                
                                <div className="col-md-6 col-lg-4">
                                    <div className="work-details">
                                        <figure>
                                            <img
                                            src={smallImages[9]}
                                            alt="Gallery 9"
                                            className="img-fluid"
                                            width= "360px"
                                            height = "390px"
                                            />
                                        </figure>
                                    </div>
                                </div>

                                
                                
                                <div className="col-md-6 col-lg-4">
                                    <div className="work-details">
                                        <figure>
                                            <img
                                            src={smallImages[10]}
                                            alt="Gallery 10"
                                            className="img-fluid"
                                            width= "360px"
                                            height = "390px"
                                            />
                                        </figure>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-4">
                                    <div className="work-details">
                                        <figure>
                                            <img
                                            src={smallImages[11]}
                                            alt="Gallery 11"
                                            className="img-fluid"
                                            width= "360px"
                                            height = "390px"
                                            />
                                        </figure>
                                    </div>
                                </div>
                             
                            </MDBRow>
                        </div>
                        {isOpen && (
                        <Lightbox
                            mainSrc={images[photoIndex]}
                            nextSrc={images[(photoIndex + 1) % images.length]}
                            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                            imageTitle={photoIndex + 1 + "/" + images.length}
                            onCloseRequest={() => this.setState({ isOpen: false })}
                            onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length
                            })
                            }
                            onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length
                            })
                            }
                        />
                        )}
                    </MDBContainer>
                </section>
            </React.Fragment>
        );
    }
}
//Props Types
Acit3.propTypes = {
    SectionbgTitle: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
};

//Default Props
Acit3.defaultProps = {
    SectionbgTitle: "",
    sectionTitle:  "زيارات ميدانية /تربصات ",
    sectionDescription:
        "",
};

export default Acit3;
