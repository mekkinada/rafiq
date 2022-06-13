import React, { Component } from 'react';
import Icofont from 'react-icofont';
import OwlCarousel from "react-owl-carousel3";
import PropTypes from "prop-types";
import './stylesTestimonials.css';

class Testimonials extends Component {
  render() {
    //Testimonials loop start
    const testimonialsitem = this.props.testimonialsData.map((testimonials, index) => (
        <div className="single-testimonial-item text-center main  " key={index}>
                    
                    <br /> 
                    <br /> 
              

                    <h1  className="text-success" >      <Icofont icon="icofont-quote-left icofont-sm" />   احداثنا   <Icofont icon="icofont-quote-right icofont-sm" /> </h1>

                  <p>{testimonials.Content}</p>


                  <div class="row client-profile">
  <div class="column ">
    <img src={testimonials.clientImage} alt="client-one" ></img>
  </div>
  <div class="column">
    <img src={testimonials.clientImage1} alt="client-one" ></img>
  </div>
  
</div>



            
            <div className="client-info ">
                <h3>{testimonials.Name}</h3>
                <span>{testimonials.Profession}</span>
            </div>
        </div>
    ));
    //Testimonials loop END
    return (
        <React.Fragment>
            <section className="testimonials ptb-100 main">
                <div className="container"  >
                    <OwlCarousel
                   
                        className="owl-theme testimonial-slides"
                        items={1}
                        nav= {true}
                        dots= {false}
                        autoplay= {false}
                        loop= {true}
                        autoplayHoverPause= {true}
                        smartSpeed= {1000}
                        navText= {[
                            "<i class='icofont-arrow-left  text-success'  ></i>", 
                            "<i class='icofont-arrow-right text-success'  ></i>"
                        ]}
                    >
                            {testimonialsitem}
                    </OwlCarousel>
                </div>
            </section>
        </React.Fragment>
    );
  }
}

//Props Types
Testimonials.propTypes = {
    testimonialsData: PropTypes.array
};

//Default Props
Testimonials.defaultProps = { 
    testimonialsData: [
        {
            clientImage: "./a71000.jpg",
            clientImage1: "./a71001.jpg",
            Content: "زيارةالسيدة ونسة العامري  منسقة تعاون موناكو في تونس لمدرسة الفرصة الثانية بأريانة بحضور السيد طاهر بلخضر، تم التعريف من خلال هذه الزيارة بمختلف الخدمات والأنشطة التي تقدمها  المدرسة للشباب المسجل بها",
         
        },
        {
            clientImage: "./a72000.jpg",
            clientImage1: "./a72001.jpg",
            Content: "    الجمعة 1 افريل 2022 :  امضاء اتفاقيتي شراكة وتعاون بين بلدية تونس و مدرسة الفرصة الثانية  و المدرسة الخاصة للهندسة والتكنولوجيا  ",
           
        },

        {
            clientImage: "./a73000.jpg",
            clientImage1: "./a73001.jpg",
            Content: " يومي 16و17 أفريل 2022  Soyons actifs/actives مشاركة جمعية رفيق مدرسة الفرصة الثانية في  دورتين تدريبيتين لفائدة ممثلي/ وممثلات الجمعيات المنخرطة في قطب التربية ببرنامج لنكن فاعلين/فاعلات ",
           
        },
    ]
};



export default Testimonials;
