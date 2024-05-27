import styled from "@emotion/styled";
import client from "../../assets/image/client.png";
import CardBox from "../../components/CardBox";

const RootContainer = styled.div({
  marginTop: 50,
  display: "flex",
  flexWrap: "wrap",
  boxSizing: "border-box",
  justifyContent: "center",
  gap: 40,
});

const Image = styled.img({
  display: "block",
  boxSizing: "border-box",
  padding: 30,
  borderBottom: "1px solid #191B1E",
});

const Text = styled.div({
  fontSize: 18,
  padding: "16px 30px",
  textAlign: "center",
  color: "#878e99",
});

const Client = () => {
  return (
    <RootContainer>
      <CardBox width="auto" height="auto">
        <Image src={client} alt="Client" />
        <Text>Marth Smith</Text>
      </CardBox>
      <CardBox width="auto" height="auto">
        <Image src={client} alt="Client" />
        <Text>Marth Smith</Text>
      </CardBox>
      <CardBox width="auto" height="auto">
        <Image src={client} alt="Client" />
        <Text>Marth Smith</Text>
      </CardBox>
      <CardBox width="auto" height="auto">
        <Image src={client} alt="Client" />
        <Text>Marth Smith</Text>
      </CardBox>
    </RootContainer>
  );
};

export default Client;
