import { styled } from "styled-components";

export const mainColor = {
  basic: "#3747ff",
  light: "#d9dcfa",
  dark: "#1e29ab",
  gray0: "#f6f6f8",
  gray1: "#eaeaec",
  gray2: "#ccc"
};

export const device = {
  smallDesktop: `(max-width: 1080px)`,
  laptop: `(max-width: 780px)`,
  phone: `(max-width: 480px)`
};

export const InputStyle = styled.input`
  display: flex;
  border: none;
  outline: none;
  font-size: 13px;
  padding: 0px;
  line-height: 1.1em;
  background-color: ${mainColor.gray0};
  color: #000;
  padding: 6px 12px 6px 8px;
  border-radius: 10px;
  transition: all 0.3s;
  &:focus {
    outline-style: solid;
    outline-color: ${(props) => (props.line === "line" ? mainColor.light : mainColor.light)};
  }
`;
export const BtnWrap = styled.div`
  display: flex;
  gap: 8px;
`;
export const BtnWrapMLAuto = styled.div`
  display: flex;
  gap: 8px;
  margin-left: auto;
`;
export const BtnWrapMRAuto = styled.div`
  display: flex;
  gap: 8px;
  margin-right: auto;
`;
export const MainBtn = styled.button`
  padding: 12px;
  background-color: ${(props) => (props.line === "line" ? "#fff" : mainColor.basic)};
  border: 1px solid ${(props) => (props.line === "line" ? mainColor.gray1 : mainColor.basic)};
  font-size: 14px;
  color: ${(props) => (props.line ? "black" : "#fff")};
  line-height: 1em;
  text-decoration: none;
  border-radius: 20px;
  font-weight: 400;
  width: auto;
  text-align: center;
  cursor: pointer;
  outline: none;
  white-space: nowrap;
  transition: all 0.1s ease-out 0s;
  &:hover {
    background-color: ${(props) => (props.line === "line" ? mainColor.gray0 : "#fff")};
    color: ${(props) => (props.line ? "#000" : mainColor.basic)};
    border: 1px solid ${(props) => (props.line === "line" ? mainColor.gray1 : mainColor.basic)};
    outline-style: ${(props) => (props.line === "line" ? "none" : "solid")};
    outline-color: ${(props) => (props.line === "line" ? "none" : mainColor.light)};
  }
  &:focus,
  &:active {
    outline-style: solid;
    outline-color: ${(props) => (props.line ? mainColor.light : mainColor.light)};
  }
`;
export const BoxBtn = styled.button`
  font-size: 12px;
  cursor: pointer;
  white-space: nowrap;
  text-align: center;
  font-weight: 400;
  padding: 6px;
  border-radius: 8px;
  line-height: 1em;
  border: 1px solid ${(props) => (props.line === "line" ? "#fff" : mainColor.light)};
  background-color: ${(props) => (props.line === "line" ? "#fff" : mainColor.light)};
  color: ${mainColor.basic};
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  margin: ${(props) => props.margin || "0"};
  transition: all 0.1s ease-out 0s;
  &:hover {
    background-color: ${(props) => (props.line === "line" ? "#fff" : "#fff")};
    color: ${mainColor.basic};
    border: 1px solid ${(props) => (props.line === "line" ? "#fff" : mainColor.basic)};
    outline-style: solid;
    outline-color: ${mainColor.light};
  }
  &:focus,
  &:active {
    outline-style: solid;
    outline-color: ${mainColor.light};
  }
`;
export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
`;
export const RountImg = styled.span`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ImgWidth = styled.img`
  width: 100%;
`;
export const Line = styled.div`
  width: 100%;
  border-bottom: 1px solid ${mainColor.gray1};
`;

// header
export const HeaderBgStyle = styled.header`
  background-color: #fff;
  box-shadow: ${mainColor.gray1} 0px 1px 0px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  width: 100%;
`;
export const HeaderStyle = styled.div`
  margin: auto;
  padding: 0px 16px;
  width: 1280px;
  max-width: 90%;
  height: 52px;
  min-height: 3rem;
  display: flex;
  align-items: center;
  gap: 30px;
  h1 {
    width: 40px;
    height: 28px;
    font-size: 10px;
    > a {
      display: flex;
      width: 100%;
      height: 100%;
      svg {
        width: 100%;
        height: 100%;
        path {
          fill: ${mainColor.dark};
        }
      }
    }
  }
`;

// footer
export const FooterBgStyle = styled.footer`
  padding: 20px;
  background-color: #fff;
  border-top: 1px solid ${mainColor.gray1};
`;
export const FooterStyle = styled.div`
  margin: auto;
  padding: 0px 16px;
  width: 1280px;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: ${mainColor.gray2};
`;

export const MemberWrapper = styled.div`
  width: 100%;
`;

// basic
export const BoxWrapBg = styled.div`
  background-color: ${mainColor.gray0};
  min-height: 100vh;
`;

export const BoxWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 150px;
  max-width: 1280px;
  width: 90%;
  margin: 0 auto;
  position: relative;
  top: 100px;
  @media ${device.laptop} {
    flex-wrap: wrap;
    gap: 20px;
  }
`;

export const BoxWrapBasic = styled.div`
  max-width: 1280px;
  width: 90%;
  margin: 0 auto;
  position: relative;
  top: 100px;
`;

export const BoxLeft = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 15px 20px;
  position: fixed;
  width: 256px;
  > .box {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-height: 400px;
  }
  > .box.mini {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-height: 20px;
  }
  @media ${device.laptop} {
    position: static;
    width: 100%;
  }
`;

export const BoxRight = styled.div`
  margin-left: 400px;
  min-height: 200px;
  width: 100%;
  @media ${device.laptop} {
    margin-left: 0;
  }
`;

export const customModal = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    zIndex: 10
  },
  content: {
    WebkitOverflowScrolling: "touch",
    padding: "30px"
  }
};
