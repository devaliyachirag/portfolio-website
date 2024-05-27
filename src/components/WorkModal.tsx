import styled from "@emotion/styled";
import { Box, Button, Modal } from "@mui/material";
import * as React from "react";
import ButtonComponent from "./Button";
import HeartIcon from "./Icon/HeartIcon";
interface ModalProp {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
  CardImage: any;
}
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "500px ",
  bgcolor: "#1e2024",
  border: "0px",
  boxShadow: 24,
  padding: "40px",
  borderRadius: "10px",
  color: "white",
};
const Container = styled.div({
  display: "flex",
  flexDirection:'column',
  width: "100%",
  justifyContent: "space-between",
  marginBottom: 20,
  flexWrap:'wrap',
  alignItems:'center',
  gap:40
});
const Image = styled.img({
  width: "100%",
  borderRadius: 10,
  display: "block",
});
const ModelCaption = styled.p({
  fontSize: 18,
  lineHeight: "30px",
  color: "#878e99",
  marginTop: 20,
  textWrap:'wrap'
});
const ButtonWrap = styled.div({
  display: "flex",
  justifyContent: "space-between",
  marginTop: 20,
  "@media screen and (max-width: 600px)": {
    flexDirection:'column',
    gap:20
  },
});
const Head = styled.h2({
  fontSize: 25,
  color: "#c4cfde",
  lineHeight: "34px",
  fontWeight: 600,
});
const Span = styled.div({
  color: "#ff014f",
  fontSize: 15,
  letterSpacing: 1,
  display: "flex",
  alignItems: "center",
  textTransform: "uppercase",
  gap: 5,
});
const ButtonStyle = styled.button<{ width: any; height: any }>(
  ({ width, height }) => ({
    background: "linear-gradient(to right bottom, #212428, #16181c);",
    boxShadow: "10px 10px 19px #1c1e22, -10px -10px 19px #2a2929;",
    border: "none",
    padding: 15,
    color: "white",
    borderRadius: 6,
    cursor: "pointer",
    width: width,
    height: height,
    "@media screen and (max-width: 600px)": {
      width:' 200px',
    },
  })
);
const WorkModal: React.FC<ModalProp> = ({
  children,
  onClose,
  open,
  CardImage,
}) => {
  const handleClose = () => {
    onClose();
  };
  return (
    <>
      <Modal
        keepMounted
        open={open}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
        sx={{
          backdropFilter:'blur(30px)'
        }}
        onClose={onClose}
      >
        <Box sx={style}>
          <Container>
            <Image src={CardImage}></Image>
            <div>
              <Head>{children}</Head>
              <ModelCaption>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate distinctio assumenda explicabo veniam temporibus
                eligendi.
              </ModelCaption>
              <ButtonWrap>
                <ButtonStyle height={51} width={"auto"}>
                  <Span>
                    <HeartIcon size={14} color="#ff014f" /> like this
                  </Span>
                </ButtonStyle>
                <ButtonStyle height={51} width={"auto"}>
                  <Span>view projects</Span>
                </ButtonStyle>
              </ButtonWrap>
            </div>
          </Container>
          <Button onClick={handleClose}>close</Button>
        </Box>
      </Modal>
    </>
  );
};
export default WorkModal;
