// import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
// import { json } from 'react-router-dom';
// import Form from 'react-bootstrap/Form';
import EmailForm from './multiStepForm/EmailForm';
import OtherDetails from './multiStepForm/OtherDetails';
import UseMultiStepForm from './multiStepForm/UseMultiStepForm';
import UserForm from './multiStepForm/UserForm';
import './multiStepForm/MultiForm.css';

const INITIAL_DATA = {
  emailId: '',
  password: '',
  firstName: '',
  lastName: '',
  address: '',
  countryCode: '',
  phoneNumber: '',
};

const Home = () => {
  const [data, setData] = useState(INITIAL_DATA);
  const updateField = fields => {
    setData(prev => ({ ...prev, ...fields }));
  };

  const navigate = useNavigate();
  // const onSubmit = () => navigate('/posts');
  const { steps, step, currentStep, isFirstStep, back, next, isLastStep } = UseMultiStepForm([
    <EmailForm {...data} updateField={updateField} />,
    <UserForm {...data} updateField={updateField} />,
    <OtherDetails {...data} updateField={updateField} />,
  ]);

  const submitForm = details => {
    fetch('https://codebuddy.review/submit', {
      method: 'POST',
      body: JSON.stringify(details),
    })
      .then(res => res.JSON())
      .then(item => item)
      .catch(err => console.log(err))
      .then(() => navigate('/posts'));
  };

  function onSubmit(e) {
    e.preventDefault();
    if (!isLastStep) {
      return next();
    }

    submitForm(data);
    return false;
  }

  return (
    <main>
      <div className="bg-light p-5 mb-5">
        <h1>React + Bootstrap v4</h1>
        <p>React template with Bootstrap version v4</p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </div>
      <Container className="main_container" style={{ border: '1px solid black' }}>
        <form onSubmit={onSubmit}>
          <div>
            <h4 className="steper">
              Page {currentStep + 1} of {steps.length}
            </h4>
          </div>
          {step}
          <div className="btn_div">
            {!isFirstStep && (
              <Button onClick={back} type="button">
                Back
              </Button>
            )}

            <Button className="save_btn" type="submit">
              {isLastStep ? 'Submit' : 'Save and Next'}
            </Button>
          </div>
        </form>
      </Container>
    </main>
  );
};

export default Home;
