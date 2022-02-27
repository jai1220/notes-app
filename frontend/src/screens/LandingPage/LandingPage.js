import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import './LandingPage.css'

const LandingPage = () => {
    return (
        <main className="main">
            <Container>
                <Row>
                    <div className='intro-text'>
                        <div>
                            <h1>Welcome To Notes</h1>
                            <p>One safe place for all your notes</p>
                        </div>
                    </div>
                    <div className='button-container'>
                        <a href='/login' class="login-button"><Button>Login</Button></a>
                        <a href='/register'><Button>Signup</Button></a>
                    </div>
                </Row>
            </Container>
        </main>
    )
}

export default LandingPage