import styled from "@emotion/styled";
import { FC, useState } from "react";
import HeartIcon from "./Icon/HeartIcon";
import WorkModal from "./WorkModal";
import ButtonComponent from "./Button";

interface ImageProps {
  src: string;
  value: string;
  likes: number;
  caption: string;
}

const RootContainer = styled.button({
  padding: 30,
  background: "linear-gradient(145deg, #1e2024, #23272b)",
  boxShadow: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
  transition: "0.5s all ease-in-out",
  borderRadius: 20,
  width: 315,
  textAlign: "left",
  border: 0,
  "&:hover": {
    background: "linear-gradient(to right bottom, #212428, #16181c)",
    boxShadow: "0 0 5px 5px #ff014f",
  },
  cursor: "pointer",
  outline: "none",
  "&:hover img": {
    transform: "scale(1.1)",
  },
});

const ImageContainer = styled.div({
  overflow: "hidden",
  borderRadius: 10,
  marginBottom: 20,
});

const WorkCardImage = styled.img({
  height: "auto",
  objectFit: "cover",
  display: "block",
  width: "100%",
  transition: "transform 0.5s ease",
});

const Container = styled.div({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  marginBottom: 20,
});

const Span = styled.span({
  color: "#ff014f",
  textTransform: "uppercase",
  fontSize: 12,
  letterSpacing: 1,
});

const Text = styled.p({
  color: "white",
  fontSize: 13,
  alignItems: "center",
  display: "flex",
  gap: 5,
});

const Head = styled.h2({
  fontSize: 25,
  color: "#c4cfde",
  lineHeight: "34px",
  fontWeight: 600,
});

const WorkCard: FC<ImageProps> = ({ src, value, likes, caption }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <WorkModal CardImage={src} open={open} onClose={() => setOpen(false)}>
        {caption}
      </WorkModal>
      <RootContainer
        onClick={() => setOpen(true)}
        aria-label={`Work card for ${caption}`}
      >
        <ImageContainer>
          <WorkCardImage src={src} />
        </ImageContainer>
        <Container>
          <Span>{value}</Span>
          <Text>
            <HeartIcon size={13} color="white" />
            {likes}
          </Text>
        </Container>
        <Head>{caption}</Head>
      </RootContainer>
    </>
  );
};

export default WorkCard;
