import React from 'react'
import {
    Container,
    Row,
    CardDeck,
    Card,
    Button

} from 'react-bootstrap';
import Meta from '../../components/Helmet/Meta';
import './studentStyles.css'

const StudentScreen = () => {
    return (
        <Container className='studentContainer   text-center ' >
            <Meta
                title="فضاء المستخدم   "
            />
       
            <br />
           
            <h1 style={{color: "DarkGreen"  }} >    مرحباً بك معنا مدرسة الفرصة الثانية بأريانة    </h1>
            <br />
            <h4 className="student-title"> سيقع الاتصال بك عبر الهاتف </h4> 
            <br />
            <br />
            <br />
     

        
        </Container>
    )
}

export default StudentScreen