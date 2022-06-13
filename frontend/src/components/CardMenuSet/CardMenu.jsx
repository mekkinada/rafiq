
import React, { useRef } from "react";
import ReactPlayer from "react-player";

import {
    Container,
    Row,
    Card,
    Col,
    CardDeck,
    
} from 'react-bootstrap'

import './CardMenuStyles.css'
import SliderCoverflowServ from '../../components/SliderCoverflow/SliderCoverflowServ';
import SliderCoverflowActi from '../../components/SliderCoverflow/SliderCoverflowActi';
const CardMenu = () => {
  
    const reactPlayerRef = useRef();

    return (
        
        <Container className="main" fluid>
    
     

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
         <h1 style={{ marginTop: '60px' }}> تعرف علينا اكثر من خلال انشطتنا وخدماتنا </h1>
            <Row xs={1} md={2} className="g-4">
            <CardDeck className='card-deck' >
               
            <Col> 
                <Card border='primary' style={{  height: 700, width: 1300  , marginBottom: '30px'    }}>
                    <Card.Body className="main">
                        <Card.Title className='title'> الخدمات</Card.Title>
                        <Card.Text className='card-text'>
                       
                               نحنا نعاونوك ونأطروك بش تدخل في حياة عملية
                          <p>      
                      هنا تجد طريقة احترافية لتواصل معنا وتعرف اكثر على خدماتنا      
                                     </p>

                           </Card.Text>
                           <SliderCoverflowServ />
                    </Card.Body>
                </Card>

                </Col>
                <Col>
                <Card  border='primary' style={{  height: 700, width: 1300  }}>
                    <Card.Body className="main">
                        <Card.Title className='title'>الأنشطة</Card.Title>
                        <Card.Text className='card-text'>
                            إذا كنت شاب(ة)، فأنت في منصة مثالية يمكنك من خلالها
                            
                            <p>
                             تغير مسار حياتك وتعلم مهارات جديد وانشطة
                            </p>
                            </Card.Text>
                        
                        <SliderCoverflowActi />
                        
                    </Card.Body>
                </Card>

                </Col>

            </CardDeck>
        </Row>
     


        </Container>
    )
}

export default CardMenu
