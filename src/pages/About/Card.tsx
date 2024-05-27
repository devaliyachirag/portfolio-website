import styled from "@emotion/styled";
import React from "react";
const RootContainer = styled.div({
  marginTop: 50,
  flexWrap:'wrap'
});
const Head = styled.h2({
  fontSize: 20,
  color: "#c4cfde",
  textAlign: "center",
});
const Container = styled.div({
  display: "flex",
  padding: "30px 0",
  gap:40,
  justifyContent:'center',
  flexWrap: "wrap",
  boxSizing:'border-box'
});
const Box = styled.div({
  borderRadius: 10,
  border: "1px solid #191B1E",
  padding: "35px 20px",
  textAlign: "center",
  maxWidth:485
});
const Icon = styled.span<{ size: any }>(({ size }) => ({
  color: "#f9004d",
  fontSize: size,
}));
const Text = styled.p({
  fontSize: 18,
  lineHeight: "25px",
  color: "#878e99",
  margin: "15px 0 ",
});
const Card = () => {
  return (
    <RootContainer>
      <Head>What I am Doing</Head>
      <Container>
        <Box>
          <Icon size={55}>&#10162;</Icon>
          <Head>Web Design Full stack</Head>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
            dolorum atque dicta distinctio mollitia fuga.
          </Text>
        </Box>
        <Box>
          <Icon size={55}>&#10162;</Icon>
          <Head>Web Design Full stack</Head>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
            dolorum atque dicta distinctio mollitia fuga.
          </Text>
        </Box>
      </Container>
    </RootContainer>
  );
};

export default Card;
