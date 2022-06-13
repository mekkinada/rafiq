import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
    Form,
    Button,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message/Message'
import Loader from '../../components/Loader/Loader'
import FormContainer from '../../components/FormContainer/FormContainer'
import { getUserDetails, updateUser } from '../../actions/userActions'
import { USER_UPDATE_RESET } from './../../constants/userConstants'
import Meta from '../../components/Helmet/Meta'

const UserEditScreen = ({ match, history }) => {

    const userId = match.params.id

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const [address, setAddress] = useState('')
    const [level, setLevel] = useState('')
    const [phonenumber, setPhonenumber] = useState('')
    const [isAdmin, setIsAdmin] = useState(false)

    const dispatch = useDispatch()

    const userDetails = useSelector(state => state.userDetails)
    const { loading, user, error } = userDetails

    const userUpdate = useSelector(state => state.userUpdate)
    const { loading: loadingUpdate, success: successUpdate, error: errorUpdate } = userUpdate

    useEffect(() => {
        if (successUpdate) {
            dispatch({ type: USER_UPDATE_RESET })
            history.push('/admin/userList')
        } else {
            if (!user.name || user._id !== userId) {
                dispatch(getUserDetails(userId))
            } else {
                setName(user.name)
                setEmail(user.email)
                setPassword(user.password)
                setDescription (user.description)
                setDate (user.date)
                setAddress (user.address)
                setLevel (user.level)
                setPhonenumber (user.phonenumber)
                setIsAdmin(user.isAdmin)
            }
        }
    }, [user, userId, dispatch, successUpdate, history])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateUser({ _id: userId, name, email, isAdmin , password, description, date, address, level, phonenumber}))
    }

    return (
        <>
            <Meta
                title=" | Admin User Edit"
            />
            <FormContainer>
                <h1 style={{ marginTop: '120px' }}>تعديل المستخدم</h1>
                <Link to='/admin/userList' className="btn btn-light my-2">العودة</Link>
                {loadingUpdate && <Loader />}
                {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
                {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message>
                    : (
                        <Form onSubmit={submitHandler} style={{ marginBottom: '50px' }}>
                           
                          
                        <Form.Group controlId='name'>
                            <Form.Label>الاسم و اللقب <span style={{ color: 'red' }}>*</span></Form.Label>
                            <Form.Control
                                type="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

            <br />
           
                        <Form.Group controlId='email'>
                            <Form.Label> بريد الكتروني    </Form.Label>
                            <Form.Control
                                placeholder="ادخل بريدالكتروني  "
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
            <br />
            
                        <Form.Group controlId='password'>
                            <Form.Label>كلمه السر </Form.Label>
                            <Form.Control
                                placeholder="ادخل كلمة السر"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
            <br />
            
                
                    <Form.Group controlId='address'>
                            <Form.Label>العنوان  <span style={{ color: 'red' }}>*</span></Form.Label>
                            <Form.Control
                                type="address"
                                as="textarea" 
                                rows={1}
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
           <br />

                        <Form.Group controlId='phonenumber'>
                            <Form.Label>رقم الهاتف <span style={{ color: 'red' }}>*</span></Form.Label>
                            <Form.Control
                                type="phonenumber"
                                value={phonenumber}
                                onChange={(e) => setPhonenumber(e.target.value)}
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
                            <Form.Control
                              as="textarea" 
                                rows={1}
                                type="date" 
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            ></Form.Control>
                    <br />  
                            <Form.Group controlId='level'>
                            <Form.Label>المستوى الدراسي <span style={{ color: 'red' }}>*</span></Form.Label>

                            <select class="form-control" 
                                type="level"
                                value={level}
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

            <Form.Group controlId='description'>
                            <Form.Label>الوضعية الحالية <span style={{ color: 'red' }}>*</span></Form.Label>
                            
                            <select class="form-control" 
                                  type="description" 
                                  value={description}
                                  onChange={(e) => setDescription(e.target.value)}>
                                  <option>منقطع</option>
                                  <option>امر بصعوبات في الدراسة</option>
                            </select> 
                       </Form.Group>


                        </Form.Group>
                            <Form.Group controlId='isAdmin'>
                                <Form.Check
                                    type="checkbox"
                                    label="هل هو المشرف"
                                    value={isAdmin}
                                    checked={isAdmin}
                                    onChange={(e) => setIsAdmin(e.target.checked)}
                                ></Form.Check>
                            </Form.Group>
                            <Button type="submit" variant="primary">تحديث</Button>
                        </Form>
                    )
                }
            </FormContainer>
        </>
    )
}

export default UserEditScreen
