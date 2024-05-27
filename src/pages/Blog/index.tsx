import WorkCard from "../../components/WorkCard";
import image1 from "../../assets/image/image1.png";
import image2 from "../../assets/image/image2.png";
import image3 from "../../assets/image/image3.png";
import styled from "@emotion/styled";
import ButtonComponent from "../../components/Button";
import EyeIcon from "../../components/Icon/EyeIcon";
import AnimationContent from "../../components/AnimationContent";
const RootContainer = styled.div({
  padding: "45px 40px",
  display: "flex",
  gap: 30,
  flexWrap: "wrap",
  justifyContent: "center",
});
const Container = styled.div({
  textAlign: "center",
  marginTop: 40,
});
const Span = styled.div({
  color: "#ff014f",
  fontSize: 14,
  letterSpacing: 1,
  display: "flex",
  alignItems: "center",
  gap: 5,
});
const Blog = () => {
  return (
    // <AnimationContent animationClass="fade-in">
      <RootContainer>
        <WorkCard
          caption="The services provide for design "
          src={image1}
          likes={200}
          value="development"
        ></WorkCard>
        <WorkCard
          caption="Mobile app landing design & app maintain"
          src={image2}
          likes={200}
          value="APPLICATION"
        ></WorkCard>
        <WorkCard
          caption="Logo design creativity & Application "
          src={image3}
          likes={200}
          value="PHOTOSHOP"
        ></WorkCard>
        <WorkCard
          caption="Mobile app landing design & Services"
          src={image3}
          likes={200}
          value="FIGMA"
        ></WorkCard>
        <WorkCard
          caption="Design for tecnology,service"
          src={image2}
          likes={200}
          value="WEB DESIGN"
        ></WorkCard>
        <WorkCard
          caption="App for tecnology & services"
          src={image1}
          likes={200}
          value="WEB DESIGN"
        ></WorkCard>
        <Container>
          <ButtonComponent height={51} width={"auto"}>
            <Span>
              See More <EyeIcon size={14} color="#ff014f"></EyeIcon>
            </Span>
          </ButtonComponent>
        </Container>
      </RootContainer>
  );
};

export default Blog;
