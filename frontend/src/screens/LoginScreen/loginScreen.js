import axios from 'axios';
import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading';
import MainScreen from '../../components/MainScreen';

import "./loginScreen.css";

const LoginScreen = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);


    const submitHandler = async (e) => {
        console.log(email, password);
        e.preventDefault();

        try {
            const config = {
                headers: {
                    "Content-type" : "application/json",
                }
            }

            setLoading(true);

            const {data} = await axios.post(
                '/api/users/login',
                {
                    email,
                    password 
                },
                config
            );

            console.log(data);
            localStorage.setItem('userInfo', JSON.stringify(data));

            setLoading(false);
        } catch (error) {
            setError(error);
        }


        
    }

    return (
        <MainScreen title="Login">
            <div className='loginContainer'>

                {loading && <Loading />}

                <Form onSubmit={submitHandler}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" value={email} onChange={ (e) => setEmail(e.target.value) } placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value = {password} onChange={ (e) => setPassword(e.target.value) } placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <Row className='py-3'>
                    <Col>
                        New Customer?  <Link to="/register"> Register Here</Link>
                    </Col>
                </Row>
            </div>
        </MainScreen>
    )
}

export default LoginScreen;