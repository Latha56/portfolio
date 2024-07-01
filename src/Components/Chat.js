import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Dropdown, DropdownButton } from 'react-bootstrap';


const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (message) => {
    if (message.trim() !== '') {
      const newMessages = [...messages, { sender: 'user', text: message }];
      setMessages(newMessages);
      setNewMessage('');
      generateResponse(message);
    }
  };

  const generateResponse = (message) => {
    let response = '';
    const lowerCaseMessage = message.toLowerCase().trim(); 
    
    switch (lowerCaseMessage) {
      case 'tell me about yourself.':
        response = 'Hi.. I am Latha HN Passionate computer science engineer | Recent graduate';
        break;
      case 'show me your projects.':
        response = 'You can check out my projects on my GitHub page or in the Projects section of this portfolio.';
        break;
      case 'what concepts do you specialize in.':
        response = 'I specialize primarily in web development, with a strong focus on React.js';
        break;
      case 'what are your interests outside of work?':
        response = [
          'Singing: I am good at singing and enjoy it as a hobby.',
          'Drawing: I sketch in my free time, though I am still improving.',
          'Language Learning: I am passionate about learning different languages.',
          'Reading: I enjoy reading books when I have the chance.'
        ];
        break;
      case 'contact information.':
        response = 'You can contact me via email at lathahn2002@gmail.com.';
        break;
      case 'good morning':
        response = 'Very good morning!';
        break;
      case 'good afternoon':
        response = 'Very good afternoon!';
        break;
      case 'good evening':
        response = 'Very good evening!';
        break;
      case 'bye':
        response = 'Bye! Have a wonderful day.';
        break;
      default:
        response = 'I\'m here to help! Please ask me anything about my portfolio.';
    }
    
    if (Array.isArray(response)) {
      response.forEach(text => {
        setMessages(prevMessages => [...prevMessages, { sender: 'bot', text }]);
      });
    } else {
      setMessages(prevMessages => [...prevMessages, { sender: 'bot', text: response }]);
    }
    
  };

  const predefinedMessages = [
    'Tell me about yourself.',
    'Show me your projects.',
    'What concepts do you specialize in.',
    'What are your interests outside of work?',
    'contact information.',
  ];

  return (
    <div style={{ position: 'absolute', top: '40px', right: '20px', width: '350px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', overflow: 'hidden' }}>
      <Container>
        <Col xs={12}>
          <Row className="bg-light p-2 mb-3 d-flex justify-content-between align-items-center">
            <Col xs={8}>
              <h1 className="h4">Chat with Us</h1>
            </Col>
            <Col xs={4} className="text-right">
              <DropdownButton id="dropdown-basic-button" title="You may ask" className="w-100">
                {predefinedMessages.map((msg, index) => (
                  <Dropdown.Item key={index} onClick={() => handleSendMessage(msg)}>{msg}</Dropdown.Item>
                ))}
              </DropdownButton>
            </Col>
          </Row>
          <Row className="chat-window bg-white p-3 border rounded" style={{ height: '60vh', overflowY: 'scroll' }}>
            <Col>
              {messages.map((message, index) => (
                <div key={index} className={`d-flex ${message.sender === 'user' ? 'justify-content-start' : 'justify-content-end'} mb-2`}>
                  <div className={`message ${message.sender === 'user' ? 'bg-primary text-white' : 'bg-secondary text-white'} p-2 rounded`}>
                    {message.text}
                  </div>
                </div>
              ))}
            </Col>
          </Row>
          <Row className="mt-2">
            <Col>
              <Form>
                <Form.Group className="d-flex">
                  <Form.Control
                    type="text"
                    placeholder="Type your message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleSendMessage(newMessage);
                      }
                    }}
                  />
                  <Button variant="primary" onClick={() => handleSendMessage(newMessage)} className="ml-2">Send</Button>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Col>
      </Container>
    </div>
  );
};


export default Chat;
