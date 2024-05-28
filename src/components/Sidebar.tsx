import styled from "@emotion/styled";
import { wrap } from "module";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const RootContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  
  "@media screen and (max-width: 600px)": {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#212428",
    padding: "10px 0",    
  },
});

const List = styled.ul({
  padding: "20px 15px",
  margin: 0,
  listStyleType: "none",
  "@media screen and (max-width: 768px)": {
    display: "flex",
    flexDirection: "row",
    justifyContent:'space-between',
    flexWrap:'wrap',
    width:'100%'
  },
});

const ListItem = styled.li<{ isActive: boolean }>(({ isActive }) => ({
  borderRadius: 10,
  margin: 0,
  textAlign: "center",
  backgroundColor: isActive ? "#f9004d" : "transparent",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#f9004d",
  },
  }));
  
  const SideButton = styled.button({
  padding: "30px 40px",
  border: 0,
  background: "none",
  color: "white",
  fontSize: "18px",
  cursor: "pointer",
  width: "100%",
  "@media screen and (max-width: 768px)": {
    padding: "15px",
    fontSize: "16px",
  },
  "@media screen and (max-width: 400px)": {
    padding: "10px",
    fontSize: "10px",
  },
});

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <RootContainer>
      <List>
        <ListItem isActive={location.pathname === "/"}>
          <SideButton onClick={() => navigate("/")}>About</SideButton>
        </ListItem>
        <ListItem isActive={location.pathname === "/resume"}>
          <SideButton onClick={() => navigate("/resume")}>Resume</SideButton>
        </ListItem>
        <ListItem isActive={location.pathname === "/work"}>
          <SideButton onClick={() => navigate("/work")}>Work</SideButton>
        </ListItem>
        <ListItem isActive={location.pathname === "/blog"}>
          <SideButton onClick={() => navigate("/blog")}>Blog</SideButton>
        </ListItem>
        <ListItem isActive={location.pathname === "/contact"}>
          <SideButton onClick={() => navigate("/contact")}>Contact</SideButton>
        </ListItem>
      </List>
    </RootContainer>
  );
};

export default Sidebar;

