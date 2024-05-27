import styled from "@emotion/styled";
import ProgressBar from "../../components/ProgressBar";
import AnimationContent from "../../components/AnimationContent";

const RootContainer = styled.div({
  padding: "45px 40px",
  display: "flex",
  gap: 30,
  flexWrap: "wrap",
  justifyContent: "center",
});
const Container = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: 30,
});
const Span = styled.span<{ size: any }>(({ size }) => ({
  color: "#f9004d",
  fontSize: size,
}));
const Head = styled.h2<{ size: string | number }>(({ size }) => ({
  fontSize: size,
  color: "#c4cfde",
}));
const CardStyle = styled.div<{ width: any; height: any }>(
  ({ width, height }) => ({
    background: "linear-gradient(to right bottom, #212428, #16181c);",
    boxShadow: "10px 10px 19px #1c1e22, -10px -10px 19px #2a2929;",
    border: "none",
    padding: 40,
    color: "white",
    borderRadius: 6,
    transition: "all .3s ease-in-out",
    maxWidth: width,
    height: height,
    display: "flex",
    flexDirection: "column",
    gap: 20,
    "&:hover": {
      background: "linear-gradient(to right bottom, #16181c, #212428);",
      boxShadow: "10px 10px 19px #2a2929, -10px -10px 19px #1c1e22;",
      color: "",
    },
  })
);
const Wrap = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "40px",
});
const Text = styled.div<{ size: any }>(({ size }) => ({
  fontSize: size,
  color: "#7c838e",
  lineHeight: "25px",
}));

const Heading = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: 15,
});

const Details = styled.div({
  paddingBottom: "15px",
  borderBottom: "1px solid black",
  display: "flex",
  flexDirection: "column",
  gap: 15,
});
const Resume = () => {
  return (
    // <AnimationContent animationClass="fade-in">
      <RootContainer>
        <Container>
          <Heading>
            <Span size={18}>2007 - 2010</Span>
            <Head size={36}>Education Quality</Head>
          </Heading>
          <CardStyle width={"493px"} height="auto">
            <Details>
              <Wrap>
                <Head size={24}>Personal Portfolio April Fools</Head>
                <Span size={16}>4.30/5</Span>
              </Wrap>
              <Text size={16}>University of DVI (1997 - 2001)</Text>
            </Details>
            <Text size={18}>
              The education should be very interactual. Ut tincidunt est ac
              dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem
              in, lobortis mauris hendrerit ante.
            </Text>
          </CardStyle>
          <CardStyle width={"493px"} height="auto">
            <Details>
              <Wrap>
                <Head size={24}>Examples Of Personal Portfolio</Head>
                <Span size={16}>4.50/5</Span>
              </Wrap>
              <Text size={16}>College of Studies (2000 - 2002)</Text>
            </Details>
            <Text size={18}>
              Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor
              aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in,
              lobortis mauris hendrerit ante.
            </Text>
          </CardStyle>
          {/* <div> */}
          <Details>
            <Text size={18}>Features</Text>
            <Head size={40}>Design Skill</Head>
          </Details>
          <ProgressBar width="100%"> PHOTOSHOT</ProgressBar>
          <ProgressBar width="95%"> FIGMA</ProgressBar>
          <ProgressBar width="60%"> ADOBE XD</ProgressBar>
          <ProgressBar width="70%"> ADOBE ILLUSTRATOR</ProgressBar>
          {/* </div> */}
        </Container>
        <Container>
          <Heading>
            <Span size={18}>2007 - 2010</Span>
            <Head size={36}>Job Experience</Head>
          </Heading>
          <CardStyle width={"493px"} height="auto">
            <Details>
              <Wrap>
                <Head size={24}>Diploma in Web Development</Head>
                <Span size={16}>4.70/5</Span>
              </Wrap>
              <Text size={16}>BSE In CSE (2004 - 2008)</Text>
            </Details>
            <Text size={18}>
              Contrary to popular belief. Ut tincidunt est ac dolor aliquam
              sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis
              mauris hendrerit ante.
            </Text>
          </CardStyle>
          <CardStyle width={"493px"} height="auto">
            <Details>
              <Wrap>
                <Head size={24}>The Personal Portfolio Mystery</Head>
                <Span size={16}>4.95/5</Span>
              </Wrap>
              <Text size={16}>Job at Rainbow-Themes (2008 - 2016)</Text>
            </Details>
            <Text size={18}>
              Generate Lorem Ipsum which looks. Ut tincidunt est ac dolor
              aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in,
              lobortis mauris hendrerit ante.
            </Text>
          </CardStyle>
          {/* <div> */}
          <Details>
            <Text size={18}>Features</Text>
            <Head size={40}>Development Skill</Head>
          </Details>
          <ProgressBar width="85%"> HTML</ProgressBar>
          <ProgressBar width="80%"> CSS</ProgressBar>
          <ProgressBar width="90%"> JAVASCRIPT</ProgressBar>
          <ProgressBar width="75%"> SOFTWARE</ProgressBar>
          {/* </div> */}
        </Container>
      </RootContainer>
    // </AnimationContent>
  );
};

export default Resume;
