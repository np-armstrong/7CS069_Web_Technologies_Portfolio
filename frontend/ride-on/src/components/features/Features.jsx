import React from 'react'
import './features.css'
import { Container, Row, Col } from 'react-bootstrap';
import {Bandaid, Calendar2Heart, ChatDots } from 'react-bootstrap-icons'

function Features(){
  return (
    <Container className='feature-container'>
      <Row>
        <Col xs={12} md={4}>
          <Bandaid className="feature-icon" />
          <h4 className="feature-description">Fully Insured</h4>
        </Col>
        <Col xs={12} md={4}>
          <Calendar2Heart className="feature-icon" />
          <h4 className="feature-description">Flexible Bookings</h4>
        </Col>
        <Col xs={12} md={4}>
          <ChatDots className="feature-icon" />
          <h4 className="feature-description">24/7 Support</h4>
        </Col>
      </Row>
    </Container>
  )
}

export default Features
