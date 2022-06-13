import React, { useRef } from "react";
import ReactPlayer from "react-player";

import {
    Col,
    Container,
    Row,
    Image
} from 'react-bootstrap'

import './etablissement.css'

const Etablissement = () => {

    const reactPlayerRef = useRef();

    return (
        <Container className="main" fluid>
            <br />
            <br />
            <br/>

            <h5 class="text-center ">
           
تتولى مدرسة الفرصة الثانية مهام الاستقبال والتوجيه والتأهيل والمرافقة والإحاطة بالأطفال الذين تتراوح أعمارهم بين 12 و 18 سنة
<br/> <br/>
 والذين انقطعوا عن الدراسة دون الحصول على شهادة مدرسية تختم مرحلة تعليمية أو مؤهل تكوين مهني وذلك قصد تمكينهم من مواصلة الدراسة 
 
 <br/> <br/>
 بالمؤسسات التربوية التابعة لوزارة التربية أو الالتحاق بمنظومة التكوين المهني أو الإعداد للاندماج بسوق الشغل والحياة النشيطة
 <br/> <br/> <br/> <br/>


             </h5>
          
    
     

    <ReactPlayer
      style={{ maxWidth: "100%", width: "800px", margin: "0 auto" }}
      autoplay
      url="https://www.youtube.com/watch?v=sGF1sV7A4N4"
      ref={reactPlayerRef}
      config={{
        youtube: {
          playerVars: { controls: 1  }  
        }
      }}
    />
            
        </Container>
    )
}

export default Etablissement
