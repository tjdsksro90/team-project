import React from "react";
import * as Styled from "assets/BasicStyle";

function Footer() {
  const memeber = ["윤호준", "진영호", "김범수", "김지예"];
  return (
    <Styled.FooterBgStyle>
      <Styled.FooterStyle>
        <Styled.MemberWrapper>
          {memeber.map((item) => {
            return (
              <ul key={item}>
                <li>{item}</li>
              </ul>
            );
          })}
        </Styled.MemberWrapper>
        copyright @B-8
      </Styled.FooterStyle>
    </Styled.FooterBgStyle>
  );
}

export default Footer;
