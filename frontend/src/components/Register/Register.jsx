import React,  { useState, useEffect } from 'react'

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
import { register } from '../../actions/userActions'
import Meta from '../Helmet/Meta'

const Register = ({ location, history }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

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
            dispatch(register(name, email, password))
        }
    }

    return (

        <FormContainer>
            <Meta
                title=" | Register"
            />
            <h1 style={{ marginTop: '120px' }}>قم بالتسجيل</h1>
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>
            <Row>
                    <Col md={5}>
                        <Form.Group controlId='name'>
                            <Form.Label>الاسم و اللقب <span style={{ color: 'red' }}>*</span></Form.Label>
                            <Form.Control
                                type="name"
                                placeholder="ادخل اسم "
                                value={name}
                                required
                                onChange={(e) => setName(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='email'>
                            <Form.Label> بريد الكتروني <span style={{ color: 'red' }}>*</span> </Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="ادخل بريد الكتروني"
                                value={email}
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                    </Col>
                    <Col md={5}>
                        <Form.Group controlId='password'>
                            <Form.Label> كلمه السر</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="ادخل كلمه السر"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='confirmPassword'>
                            <Form.Label>تأكيد كلمة المرور </Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="تأكيد كلمة المرور "
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                  
                        <Button type="submit" variant="primary">تسجيل</Button>
                    </Col>
                </Row>
                <br />
                <br />  <br />
            </Form>
            
        </FormContainer>
    )
}

export default Register
