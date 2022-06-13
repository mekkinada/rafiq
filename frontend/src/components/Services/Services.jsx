import React, { Component } from 'react';
import PropTypes from "prop-types";
import Icofont from 'react-icofont';
import ScrollAnimation from 'react-animate-on-scroll';
import './services.css'
class Services extends Component {
    render() {
        //About loop start
        const aboutdata = this.props.aboutsData.map((about, index) => (

            <div className=" mb-3 col-md-6 col-lg-6 " key={index}>

        <div className="about-info {about.style} ">
                <h5> {about.numb} </h5>
                    <h5 >{about.title}</h5>
                 

           <div class="row" className= {about.style}>

                  <p>{about.content}  </p>
                  <p>{about.content1}  </p>
                  <p>{about.content2}  </p>
                  <p>{about.content3}  </p>
                  <p>{about.content4}  </p>

               </div>       
        </div>
                
            </div>
        ));


        //About loop END
        return (
            <React.Fragment>
                <section id="about" className="about-us ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 text-center ">
                            <ScrollAnimation animateIn="fadeInUp">
                                <div className="section-title">
                                    <h2 >{this.props.sectionTitle}</h2>
                                    <p>{this.props.sectionDescription}</p>
                                    <span className="section-title-bg">{this.props.SectionbgTitle}</span>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                    
                    <div className="row">
                        {aboutdata}
                    </div>
                </div>
            </section>   
            </React.Fragment>
        );
    }
}
//Props Types
Services.propTypes = {
    SectionbgTitle: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    aboutsData: PropTypes.array
};

//Default Props
Services.defaultProps = {
    SectionbgTitle: "	",
    sectionTitle: "خدماتنا",
   
        aboutsData: [
     
           

       
       
         
            { numb: "2",
                style : "p-3 py-8 bg-success text-white",
                title: "المرافقة والتوجيه ",
                content: "مراكز التكوين المهني*",   
                content1: "عقود تدريب*",
                content2 :"العودة إلى مقاعد الدراسة*" ,
                content3 : "تشغيل*",
                content4 :"تربصات  شركات/مؤسسات*",
            },

            {
                numb: "1",
                style: "p-3 py-8 bg-primary text-white" ,
                title:"الاستقبال",
                content: "استقبال المستفيدين و أوليائهم*",
            },



            {   numb: "4",
                style : "p-3 py-8 px-8 bg-warning text-white",
                title: "  المتابعة  ",
                content: "متابعة المستفيد أثناء و بعدالمسار*",
            },

        {
            numb: "3",
            style : "p-3 py-8 bg-danger text-white",
            title: " التأهيل الاجتماعي المهني  ",
            content1: "ورشات عمل مختلفة*", 
            content:"زيارات ميدانية للمؤسسات الصناعية/تربصات*", 
        },




      

        

        

       
       
    ]
};

export default Services;
