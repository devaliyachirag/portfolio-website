import styled from "@emotion/styled";
import about from "../../assets/image/about-2.jpg";
import ButtonComponent from "../../components/Button/index";
import { useNavigate } from "react-router-dom";
import Hero from "./Hero";
import Card from "./Card";
import Client from "./Client";
import AnimationContent from "../../components/AnimationContent";
// import a from "../../components/FadeIn";
const RootContainer = styled.div({
  padding: "40px",
  flexWrap: "wrap",
  boxSizing: "border-box",
});
const About = () => {
  return (
    <RootContainer>
      <AnimationContent animationClass="fade-in">
        <Hero />
      </AnimationContent>
      <Card />
      <AnimationContent animationClass="fade-in">
        <Client />
      </AnimationContent>
    </RootContainer>
  );
};

export default About;
