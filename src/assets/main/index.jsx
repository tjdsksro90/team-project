import { styled } from "styled-components";
import * as Basic from "assets/BasicStyle";

// main
export const UserProfile = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #ccc;
  margin: 0 auto;
`;

export const UserWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  > p {
    font-size: 12px;
    color: ${Basic.mainColor.gray2};
  }
  > div {
    font-weight: bold;
  }
`;

export const UserNoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  > p {
    font-size: 12px;
    color: ${Basic.mainColor.gray2};
  }
  > div {
    font-weight: bold;
  }
`;
