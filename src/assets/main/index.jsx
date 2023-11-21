import { styled } from "styled-components";
import * as Basic from "assets/BasicStyle";

// main
export const BoxWrapBg = styled.div`
  background-color: ${Basic.mainColor.gray0};
  min-height: 100vh;
`;

export const BoxWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 30px;
  max-width: 1280px;
  width: 90%;
  margin: 0 auto;
  position: relative;
  top: 100px;
  @media ${Basic.device.laptop} {
    flex-wrap: wrap;
    gap: 20px;
  }
`;

export const BoxLeft = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 15px 20px;
  position: fixed;
  min-height: 200px;
  @media ${Basic.device.laptop} {
    position: static;
    width: 100%;
  }
`;

export const BoxRight = styled.div`
  margin-left: 400px;
  min-height: 200px;
  width: 100%;
  @media ${Basic.device.laptop} {
    margin-left: 0;
  }
`;
