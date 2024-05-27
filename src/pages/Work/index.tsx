import WorkCard from "../../components/WorkCard";
import image1 from "../../assets/image/work-image1.png";
import image2 from "../../assets/image/work-image2.png";
import image3 from "../../assets/image/work-image3.png";
import image4 from "../../assets/image/work-image4.png";
import image5 from "../../assets/image/work-image5.png";
import image6 from "../../assets/image/work-image6.png";
import styled from "@emotion/styled";
import ButtonComponent from "../../components/Button";
import EyeIcon from "../../components/Icon/EyeIcon";
import AnimationContent from "../../components/AnimationContent";
import { useState } from "react";
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
const WrapContainer = styled.div({
  border: 0,
  padding: 0,
  margin: 0,
});

const Work = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  return (
    // <AnimationContent animationClass="fade-in">
      <RootContainer>
        <WorkCard
          caption="The services provide for design "
          src={image1}
          likes={940}
          value="development"
        ></WorkCard>
        <WorkCard
          caption="Mobile app landing design & app maintain"
          src={image2}
          likes={600}
          value="APPLICATION"
        ></WorkCard>
        <WorkCard
          caption="Logo design creativity & Application "
          src={image3}
          likes={850}
          value="PHOTOSHOP"
        ></WorkCard>
        <WorkCard
          caption="Mobile app landing design & Services"
          src={image4}
          likes={740}
          value="FIGMA"
        ></WorkCard>
        <WorkCard
          caption="Design for tecnology,service"
          src={image5}
          likes={960}
          value="WEB DESIGN"
        ></WorkCard>
        <WorkCard
          caption="App for tecnology & services"
          src={image6}
          likes={200}
          value="WEB DESIGN"
        ></WorkCard>
        <Container>
          <ButtonComponent height={51} width={"auto"}>
            <Span>
              See More <EyeIcon size={13} color=" #ff014f"></EyeIcon>
            </Span>
          </ButtonComponent>
        </Container>
      </RootContainer>
    // </AnimationContent>
  );
};

export default Work;
