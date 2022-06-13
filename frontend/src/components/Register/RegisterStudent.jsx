import React, { useState, useEffect } from 'react'
import {
    Form,
    Button,
    Row,
    Col
} from 'react-bootstrap'


import { useDispatch, useSelector } from 'react-redux'
import Message from '../Message/Message'
import Loader from '../Loader/Loader'
import FormContainer from '../FormContainer/FormContainer'
import { registerstudent } from '../../actions/userActions'
import Meta from '../Helmet/Meta'

const RegisterStudent = ({ location, history }) => {


   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [confirmPassword, setConfirmPassword] = useState('')

    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const [address, setAddress] = useState('')
    const [level, setLevel] = useState('')
    const [phonenumber, setPhonenumber] = useState('')

    const [message, setMessage] = useState(null)



    const dispatch = useDispatch()

    const userRegister = useSelector(state => state.userRegister)
    const { loading, userInfo, error } = userRegister

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [userInfo, history, redirect])


    const submitHandler = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            dispatch(registerstudent(name, email, password, date, address, level, phonenumber, description))
        }
    }

    return (

        <FormContainer>
            <Meta
                title=" | Register Student"
            />
         

            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}

            {loading && <Loader />}
            <br /><br /><br />
            <Form onSubmit={submitHandler}>
           
            <Row>
            <br />
                    <Col md={5}>

                    <Form.Group controlId='address'>
                            <Form.Label  style={{textAlign: "center"}} >العنوان  <span style={{ color: 'red' }}>*</span></Form.Label>
                            <Form.Control
                                type="address"
                                as="textarea" rows={1}
                                value={address}
                                required
                                onChange={(e) => setAddress(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
            <br />
           
                      
                        <Form.Group controlId="date">
                            <Form.Label>تاريخ الولادة  <span style={{ color: 'red' }}>*</span></Form.Label>
                            <Form.Control
                                type="date" 
                                value={date}
                        
                                onChange={(e) => setDate(e.target.value)}
                            ></Form.Control>
                           
                        </Form.Group>
                      
           <br />
           <Form.Group controlId='description'>
                            <Form.Label>الوضعية الحالية <span style={{ color: 'red' }}>*</span></Form.Label>
                            
                            <select class="form-control" 
                                  type="description" 
                                  value={description}
                                  required
                                  onChange={(e) => setDescription(e.target.value)}>
                                  <option>منقطع</option>
                                  <option>امر بصعوبات في الدراسة</option>
                            </select> 
                       </Form.Group>
            <br />
                    </Col>
                    <Col md={5}>

                    <Form.Group controlId='name'>
                            <Form.Label>الاسم و اللقب <span style={{ color: 'red' }}>*</span></Form.Label>
                            <Form.Control
                                type="name"
                                value={name}
                                required
                                onChange={(e) => setName(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                   
           <br />

                        <Form.Group controlId='level'>
                            <Form.Label>المستوى الدراسي <span style={{ color: 'red' }}>*</span></Form.Label>

                            <select class="form-control" 
                                type="level"
                                value={level}
                                required
                                onChange={(e) => setLevel(e.target.value)}>
                                  <option>دون مستوى السادسة ابتدائي</option>
                                  <option> السادسة ابتدائي </option>
                                  <option>7 أساسي</option>
                                  <option>8 أساسي</option>
                                  <option>9 أساسي</option>
                                  <option>1 ثانوي</option>
                                  <option>2 ثانوي</option>
                                  <option>3 ثانوي</option>
                                  <option>مستوى باكالوريا</option>
                                  <option>لم يلتحق بمدرسة</option>
                            </select>

                        </Form.Group>
            <br />         
                        <Form.Group controlId='phonenumber'>
                            <Form.Label>رقم الهاتف <span style={{ color: 'red' }}>*</span></Form.Label>
                            <Form.Control
                                type="phonenumber"
                                value={phonenumber}
                                required
                                onChange={(e) => setPhonenumber(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
           <br />           
        
                        <Button type="submit" variant="primary">إرسال</Button>
                    </Col>
                </Row>
            </Form>
            <br />
            <br />
            <br />
       
           
        </FormContainer>
    )
}

export default RegisterStudent
