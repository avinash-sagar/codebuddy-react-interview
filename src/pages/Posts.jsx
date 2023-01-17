import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './multiStepForm/MultiForm.css';

const Posts = () => {
  const [users, setUsers] = useState();
  useEffect(() => {
    fetch('https://codebuddy.review/posts')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <div className="post_div">
        <h2>Posts</h2>
        <Container>
          <Row className="tabSection">
            {users &&
              users?.data?.posts.map(item => (
                <Col xs={12} md={6} lg={4}>
                  <Card className="cards">
                    <Card.Img variant="top" src={item.image} alt="avatar" />
                    <Card.Body>
                      <Card.Title>
                        {item.firstName} {item.lastName}
                      </Card.Title>
                      <Card.Text>{item.writeup.slice(0, 80)}...</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Posts;
