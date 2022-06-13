import React from 'react'

import {
    Col,
    Container,
    Row,
    Image
} from 'react-bootstrap'
import './ourSerices.css'

const OurServices = () => {
    return (
        <Container className="main" fluid>
            
            <h5>
            يعتمد برنامج الفرصة الثانية  على جهازين متكاملين "معاك" و "أنطلق" مهمتهما مزيد إثراء 
             و تغذية  الإجراءات و المجهودات الحالية لمواجهة الانقطاع المدرسي
             </h5>
             <br></br>
             <h5>
              ويمثلان نهجًا مبتكرًا ومتكاملًا ،
             مصممًا للاستجابة للتباين القوي في المستوى و التطلعات لدى التلاميذ المنقطعين عن الدراسة   
                 </h5>
            <Container className="services">
                <Row>
                    <Col >
                        <h5 className="sub-title">معاك - MA3AK</h5>
                        <Image className="img" src="/Logo.jpg" fluid />
                        <p className="sub-desc">نظام دعم وتوجيه ، وتحديد واستقبال جميع المراهقين الذين تتراوح أعمارهم بين 12 و 18 عامًا ، والذين يتركون التعليم العام كل عام وليس لديهم حل.
                                               و نحن نقوم بمرافقته و توجيهي و متابعتك </p>
                    </Col>
                    <Col >
                        <h5 className="sub-title"> إنطلق - INTALE9 </h5>
                        <Image className="img" src="/Logo2.png" fluid />
                        <p className="sub-desc">نظام تعليمي يستقبل الأطفال الذين تتراوح أعمارهم بين 12 و 18 عامًا للتحضير لأيٍّ منهما: العودة إلى المدرسة , حصول كبار السن على التدريب المهني , 
                                                التكامل المهني المباشر في إطار تخصص "المهن وقابلية التوظيف".</p>
                    </Col>

                </Row>

            </Container>
            <h1 className="main-title">شركاء</h1>
            
        </Container>
    )
}

export default OurServices
