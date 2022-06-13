import React, { Component } from 'react';
import PropTypes from "prop-types";
import Icofont from 'react-icofont';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import './styleActivities.css'

class Activities extends Component {

    componentDidMount() {
        let scrollWithOffset = (el, offset) => {
            const elementPosition = el.offsetTop - offset;
            window.scroll({
                top: elementPosition,
                left: 0,
                behavior: "smooth"
            });
        };
        this.setState({ scrollWithOffset });
    }

  render() {
    //Blog loop start
    const blogdata = this.props.blogsData.map((blog, index) => (
        
        <div className="col-md-6 col-lg-6 main"  key={index}>
            <div className="blog-item">
                <Link to={blog.postLink} className="blog-img">
                  
                    <img  src= {blog.postImage}  alt="blog-one" />

                    <br/>         <br/>        <br/>
                    </Link>
             
                    <div className="title-meta text-center ">
                        <h2><Link to={blog.postLink}>{blog.posttitle}</Link></h2>
                       
                    </div>
            
              
            </div>
        </div>
    ));
    //Blog loop END
    return (
        <React.Fragment>
            <section id="blog" className="our-blog ptb-100 main">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <ScrollAnimation animateIn="fadeInUp">
                                <div className="section-title">

                    <h1   >    {this.props.sectionTitle}   </h1>
                                
                                             

                                    <p>{this.props.sectionDescription}</p>
                                    <span className="section-title-bg">{this.props.SectionbgTitle}</span>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>

                    <div className="row">
                        {blogdata}
                       
                    </div>
                </div>
            </section>   
        </React.Fragment>
    );
  }
}
//Props Types
Activities.propTypes = {
    SectionbgTitle: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    btnLink: PropTypes.string,
    BlogBtn: PropTypes.string,
    blogsData: PropTypes.array
};

//Default Props
Activities.defaultProps = {
    SectionbgTitle: "",
    sectionTitle: "أنشطتنا  ",
    sectionDescription:  "",

        blogsData: [
        {
            postImage:  "./a101.jpg" ,
            postLink: "/acit1",
            posttitle: "ورشات علمية و تكنولوجية",
            
        },

        {
            postImage:  "./a302.jpg" ,
            postLink: "/acit2",
            posttitle: "أنشطة ثقافية و رياضية",
           
        },

        {
            postImage:  "./a72000.jpg" ,
            postLink: "/a7",
            posttitle: " احدثنا المهمة ",
           
        },

        {
            postImage:  "./a207.jpg" ,
            postLink: "/acit3",
            posttitle: "زيارات ميدانية /تربصات ",
           
        },

    ]
};

export default Activities;
