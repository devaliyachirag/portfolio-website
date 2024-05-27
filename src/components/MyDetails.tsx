import styled from "@emotion/styled";
import React from "react";
import thumbnail from "../assets/image/thumbnail.png";
import FaceBookIcon from "./Icon/FacebookIcon";
import ButtonComponent from "./Button";
import InstaGramIcon from "./Icon/InstaIcon";
import LinkedIn from "./Icon/LinkedInIcon";
const RootContainer = styled.div({
  display: "flex",
  padding: "20px",
  backgroundColor: "#212428",
  borderRadius: "10px",
  flexWrap: "wrap",
  alignItems: "center",
  "@media screen and (max-width: 1400px)": {
    justifyContent:'center'
    // padding: "250px 80px 0",
  },
});
const ThumbNail = styled.div({
  padding: "5px",
  width: 200,
  height: 200,
  backgroundColor: "#1D1E24",
  marginTop: "-70px",
  boxSizing: "border-box",
  borderRadius: "10px",
}); 
const About = styled.div({
  padding: 25,
});

const Text = styled.div<{ size: string | number; color: string }>(
  ({ size, color }) => ({
    fontSize: size,
    color: color,
  })
);
const Head = styled.h2<{ size: string | number; color: string }>(
  ({ size, color }) => ({
    fontSize: size,
    color: color,
  })
);
const P = styled.p<{ color: string }>(({ color }) => ({
  fontSize: 20,
  color: color,
}));
const Col = styled.div<{ width: any }>(({ width }) => ({
  minWidth: width,
  display: "flex",
  flexWrap: "wrap",
  padding: "0 20px",
  boxSizing: "border-box",
  gap:30,
  justifyContent:'center',

  // "@media screen and (max-width: 1400px)": {
  // },
  // "@media screen and (max-width: 1000px)": {
  //   justifyContent:'center',
  //   textAlign:'center'
  //   // padding: "250px 80px 0",
  // },
}));
const MyDetails = () => {
  return (
    <RootContainer>
      <Col width={"auto"}>
        <ThumbNail>
          <img src={thumbnail} alt="" />
        </ThumbNail>
        <About>
          <Head size={32} color="white">
            Chirag Devaliya
          </Head>
          <P color="#5F656D">I am React Developer</P>
          <div style={{ gap: "30px", display: "flex", marginTop: "30px" }}>
            <ButtonComponent
              width={53}
              height={53}
              children={<FaceBookIcon color="#c4cfde" size={20} />}
            />
            <ButtonComponent
              width={53}
              height={53}
              children={<InstaGramIcon color="#c4cfde" size={20} />}
            />
            <ButtonComponent
              width={53}
              height={53}
              children={<LinkedIn color="#c4cfde" size={20} />}
            />
          </div>
        </About>
      </Col>
      <Col width={"auto"}>
        <ul>
          <li>
            <Text size={14} color="#778B83">
              EMAIL
            </Text>
            <P color="#c4cfde">example@gmail.com</P>
          </li>
          <li>
            <Text size={14} color="#778B83">
              PHONE
            </Text>
            <P color="#c4cfde">+880123456789</P>
          </li>
        </ul>
        <ul>
          <li>
            <Text size={14} color="#778B83">
              BIRTHDAY
            </Text>
            <P color="#c4cfde">20 August</P>
          </li>
          <li>
            <Text size={14} color="#778B83">
              LOCATION
            </Text>
            <P color="#c4cfde">Gujarat,India</P>
          </li>
        </ul>
      </Col>
    </RootContainer>
  );
};

export default MyDetails;
