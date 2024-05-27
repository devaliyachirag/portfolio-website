import styled from "@emotion/styled";
import ContactAboutArea from "./ContactAboutArea";
import ContactFormWrapper from "./ContactFormWrapper";
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -10px;
`;

const Col = styled.div<{ size: number }>`
  flex: ${({ size }) => (size / 12) * 100}%;
  padding: 15px;
`;

const Contact = () => {
  return (
    <Container>
      <Row>
        <Col size={5}>
          <ContactAboutArea />
        </Col>
        <Col size={7}>
          <ContactFormWrapper />
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
