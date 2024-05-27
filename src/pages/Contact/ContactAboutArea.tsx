import styled from '@emotion/styled';
import React from 'react';
import contact from "../../assets/image/contact.png";
import ButtonComponent from '../../components/Button';
import FaceBookIcon from '../../components/Icon/FacebookIcon';
import InstaIcon from '../../components/Icon/InstaIcon';
import LinkedIn from '../../components/Icon/LinkedInIcon';
const RootContainer = styled.div`
  background: #212428;
  box-shadow: 10px 10px 19px #1c1e22, -10px -10px 19px #262a2e;
  padding: 30px;
  border-radius: 8px;
  height: 100%;
`;

const Thumbnail = styled.div`
  text-align: center;
  img {
    max-width: 100%;
    border-radius: 20px;
  }
`;

const TitleArea = styled.div`
  margin-top: 15px;
  h4 {
    margin-bottom: 5px;
  }
  span {
    color: #777;
  }
`;

const Description = styled.div`
  p {
    margin-bottom: 15px;
  }
  .phone,
  .mail {
    display: block;
    margin-bottom: 5px;
  }
`;
const Head = styled.h2({
    fontSize: 29,
    color: "#c4cfde",
    lineHeight: "34px",
    fontWeight: 600,
  });
  const Text = styled.p({
    color: "#878e99",
    fontSize: 18,
    lineHeight: "30px",
    margin: "20px 0 ",
  });
  const Link = styled.a({
    color: "#c4cfde",
    fontSize: 18,
    lineHeight: "30px",
    textDecoration: "none",
  });
const SocialArea = styled.div`
  margin-top: 20px;
`;
const ContactAboutArea = () => {
  return (
    <RootContainer>
            <Thumbnail>
              <img src={contact} alt="contact-img" />
            </Thumbnail>
            <TitleArea>
              <Head>Nevine Acotanza</Head>
              <Text>Chief Operating Officer</Text>
            </TitleArea>
            <Description>
              <Text>
                I am available for freelance work. Connect with me via and call
                in to my account.
              </Text>
              <Text className="phone">
                Phone: <Link href="tel:+01234567890">+01234567890</Link>
              </Text>
              <Text className="mail">
                Email:{" "}
                <Link href="mailto:admin@example.com">admin@example.com</Link>
              </Text>
            </Description>
            <SocialArea>
              <Text>FIND WITH ME</Text>
              <div style={{ gap: "30px", display: "flex", marginTop: "50px" }}>
                <ButtonComponent
                  width={61}
                  height={61}
                  children={<FaceBookIcon color="#c4cfde" size={24} />}
                />
                <ButtonComponent
                  width={61}
                  height={61}
                  children={<InstaIcon color="#c4cfde" size={24} />}
                />
                <ButtonComponent
                  width={61}
                  height={61}
                  children={<LinkedIn color="#c4cfde" size={24} />}
                />
              </div>
            </SocialArea>
          </RootContainer>
  )
}

export default ContactAboutArea
