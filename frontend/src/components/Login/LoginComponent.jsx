import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
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
import { login } from '../../actions/userActions'
import Meta from '../Helmet/Meta'

const LoginComponent = ({ location, history }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { loading, error } = userLogin
   

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    return (
        <FormContainer >
            <Meta
                title=" | Sign In"
            />
           
            { error && <Message variant='danger'>{error}</Message>}
            { loading && <Loader />}
            <br />
            <br />
            <br />

            <Form onSubmit={submitHandler} className="text-center" >
                <Form.Group controlId='email'>
                    <Form.Label> (الإداري) بريد الكتروني <span style={{ color: 'red' }}>*</span></Form.Label>
                    <Form.Control
                        type="email"
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId='password'>
                    <Form.Label>كلمه السر <span style={{ color: 'red' }}>*</span></Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Button type="submit" variant="primary">تسجيل الدخول </Button>
                <br /><br /><br />
            </Form>

            

            <h5>
            <Row className='py-3  text-center'>
                <Col style={{ marginBottom: '30px' }}>
                انت  مستخدم جديد ؟ <Link to={'/register'}>سجل</Link>
                </Col>
            </Row>
            </h5>
        </FormContainer>
    )
}

export default LoginComponent
