import styled from "@emotion/styled";
import background from "./assets/image/background.jpg";
import MyDetails from "./components/MyDetails";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Work from "./pages/Work";
import Blog from "./pages/Blog";
import FadeContent from "./components/AnimationContent";
import Contact from "./pages/Contact";

const RootContainer = styled.div({
  backgroundImage: `url(${background})`,
  height: "370px",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  boxSizing: "border-box",
  paddingTop: "250px",
  "@media screen and (max-width: 1400px)": {
    padding: "250px 100px 0",
  },
  "@media screen and (max-width: 1000px)": {
    padding: "250px 50px 0",
  },
  "@media screen and (max-width: 768px)": {
    padding: "200px 20px 0",
  },
  "@media screen and (max-width: 480px)": {
    padding: "150px 10px 0",
  },
});

const MainWrap = styled.div({
  margin: "0 auto 100px",
  maxWidth: "1300px",
  paddingBottom: 100,
  "@media screen and (max-width: 768px)": {
    paddingBottom: 50,
  },
  "@media screen and (max-width: 480px)": {
    paddingBottom: 20,
  },
});

const ContentWrap = styled.div({
  marginTop: 50,
  display: "flex",
  flexDirection: "row",
  boxSizing: "border-box",
  gap: 25,
  "@media screen and (max-width: 768px)": {
    flexDirection: "column",
    gap: 15,
  },
  "@media screen and (max-width: 480px)": {
    gap: 10,
  },
});

const SideWrap = styled.div({
  backgroundColor: "#212428",
  borderRadius: 10,
  height: 450,
  position: "sticky",
  top: 25,
  "@media screen and (max-width: 1400px)": {
    height: 545,
    position: "relative",
    top: 0,
  },
  "@media screen and (max-width: 768px)": {
    maxHeight: '160px',
    position: "relative",
    top: 0,
    marginBottom:40,
  },
});

const RouteWrap = styled.div({
  backgroundColor: "#212428",
  borderRadius: 10,
  boxSizing: "border-box",
  flex: 1,
});

const Navbar = styled.div({});

function App() {
  return (
    <RootContainer>
      <MainWrap>
        <MyDetails />
        <ContentWrap>
          <SideWrap>
            <Sidebar />
          </SideWrap>
          <RouteWrap>
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/work" element={<Work />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </RouteWrap>
        </ContentWrap>
      </MainWrap>
    </RootContainer>
  );
}

export default App;

