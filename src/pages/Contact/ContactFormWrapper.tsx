import styled from '@emotion/styled';
import React from 'react'
import ButtonComponent from '../../components/Button';
const Col = styled.div<{ size: number }>`
  flex: ${({ size }) => (size / 12) * 100}%;
  padding: 15px;
`;



const RootContainer = styled.div`
  background: #212428;
  box-shadow: 10px 10px 19px #1c1e22, -10px -10px 19px #262a2e;
  padding: 20px;
  border-radius: 8px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
  label {
    display: block;
    margin-bottom: 14px;
    color: #a0a8b3;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 1px;
  }
  input {
    background-color: #191b1e;
    border-radius: 6px;
    height: 55px;
    border: 2px solid #191b1e;
    padding: 0 15px;
    font-size: 14px;
    box-shadow: 1px 4px 2px -3px rgba(0, 0, 0, 0.7) inset,
      -1px -3px 3px -2px rgba(255, 255, 255, 0.2) inset;
    letter-spacing: 1px;
    padding: 10px;
    width: 100%;
    color: #a0a8b3;
    &:focus {
      border-color: #ff014f;
      outline: none;
    }
  }
  textarea {
    width: 100%;
    color: #a0a8b3;
    min-height: 215px;
    background-color: #191b1e;
    border-radius: 6px;
    border: 2px solid #191b1e;
    padding: 10px 15px;
    font-size: 14px;
    line-height: 18px;
    box-shadow: 1px 4px 2px -3px rgba(0, 0, 0, 0.7) inset,
      -1px -3px 3px -2px rgba(255, 255, 255, 0.2) inset;
    letter-spacing: 1px;
    resize: none;
    &:focus {
      border-color: #ff014f;
      outline: none;
    }
  }
`;

const Span = styled.span({
  color: "#ff014f",
  fontSize: 15,
  letterSpacing: 1,
  textTransform: "uppercase",
  gap: 5,
  display:'flex',
  alignItems:'center',
  justifyContent:'center'
});
const ContactFormWrapper = () => {
  return (
   <RootContainer>
            <form
              className="rnt-contact-form rwt-dynamic-form row"
              id="contact-form"
              method="POST"
              action="#"
            >
              <Col size={6}>
                <FormGroup>
                  <label htmlFor="contact-name">Your Name</label>
                  <input
                    className="form-control form-control-lg"
                    name="contact-name"
                    id="contact-name"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col size={6}>
                <FormGroup>
                  <label htmlFor="contact-phone">Phone Number</label>
                  <input
                    className="form-control"
                    name="contact-phone"
                    id="contact-phone"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col size={12}>
                <FormGroup>
                  <label htmlFor="contact-email">Email</label>
                  <input
                    className="form-control form-control-sm"
                    id="contact-email"
                    name="contact-email"
                    type="email"
                  />
                </FormGroup>
              </Col>
              <Col size={12}>
                <FormGroup>
                  <label htmlFor="subject">Subject</label>
                  <input
                    className="form-control form-control-sm"
                    id="subject"
                    name="subject"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col size={12}>
                <FormGroup>
                  <label htmlFor="contact-message">Your Message</label>
                  <textarea
                    name="contact-message"
                    id="contact-message"
                    cols={30}
                    rows={10}
                  ></textarea>
                </FormGroup>
              </Col>
              <Col size={12}>
                <ButtonComponent
                  width={"100%"}
                  height={53}
                  children={<Span>SEND MESSAGE <h2> &#187;</h2> </Span>}
                />
              </Col>
            </form>
          </RootContainer>
  )
}

export default ContactFormWrapper
