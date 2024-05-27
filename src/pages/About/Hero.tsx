import styled from "@emotion/styled";
import about from "../../assets/image/about-2.jpg";
import ButtonComponent from "../../components/Button/index";

const RootContainer = styled.div({
  display: "flex",
  gap: 40,
  justifyContent: "center",
  boxSizing: "border-box",
  alignItems: "center",
  padding: "20px",

  "@media screen and (max-width: 1000px)": {
    flexDirection: "column",
    padding: "20px",
  },
});

const Image = styled.img({
  display: "block",
  boxSizing: "border-box",
  borderRadius: "10px",
  maxWidth: 380,
  width: "100%",
});

const Span = styled.span<{ size: number }>(({ size }) => ({
  color: "#f9004d",
  fontSize: size,
}));

// const Head = styled.div<{ size: string | number; color: string; align: string }>(
//   ({ size, color, align }) => ({
//     fontSize: size,
//     color: color,
//     marginTop: 20,
//     textAlign: align,
//     "@media screen and (max-width: 600px)": {
//       fontSize: 24,
//     },
//   })
// );

const Head = styled.div<{
  size: string | number;
  color: string;
  align: string;
}>(({ size, color, align }) => ({
  fontSize: size,
  color: color,
  marginTop: 20,
  // textAlign: align,
  "@media screen and (max-width: 600px)": {
    fontSize: 24,
  },
}));

const P = styled.p<{ color: string; size: number }>(({ color, size }) => ({
  fontSize: size,
  lineHeight: "25px",
  color: color,
  maxWidth: 550,
  margin: "15px 0 ",
  "@media screen and (max-width: 600px)": {
    fontSize: "16px",
  },
}));

const FlexContainer = styled.div({
  display: "flex",
  gap: 20,
  "@media screen and (max-width: 600px)": {
    // flexDirection: "column",
    gap: 10,
  },
});

const ButtonWrap = styled.div({
  marginTop: 20,
  "@media screen and (max-width: 600px)": {
    textAlign: "center",
  },
});

const Hero = () => {
  return (
    <RootContainer>
      <Image src={about} />
      <div>
        <Span size={16}>VISIT MY PORTFOLIO & HIRE ME</Span>
        <Head size={32} color="#c4cfde" align="left">
          About ME
        </Head>
        <P size={18} color="#878e99">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum in eos
          saepe ipsa cupiditate accusantium voluptatibus quidem nam,
          reprehenderit, et necessitatibus adipisci.
        </P>
        <FlexContainer>
          <P size={20} color="#c4cfde">
            &#10004;
          </P>
          <P size={20} color="#878e99">
            Web Design Full stack
          </P>
        </FlexContainer>
        <FlexContainer>
          <P size={20} color="#c4cfde">
            &#10004;
          </P>
          <P size={20} color="#878e99">
            24/7 Support
          </P>
        </FlexContainer>
        <FlexContainer>
          <P size={20} color="#c4cfde">
            &#10004;
          </P>
          <P size={20} color="#878e99">
            Unlimited Revisions
          </P>
        </FlexContainer>
        <ButtonWrap>
          <ButtonComponent width={200} height={57}>
            <Span size={18}>DOWNLOAD MY CV</Span>
          </ButtonComponent>
        </ButtonWrap>
      </div>
    </RootContainer>
  );
};

export default Hero;
