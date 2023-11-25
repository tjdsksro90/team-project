import React from "react";
import * as Styled from "assets/BasicStyle";

function Footer() {
  const memeber = ["윤호준", "진영호", "김범수", "김지예"];
  return (
    <Styled.FooterBgStyle>
      <Styled.FooterStyle>
        copyright @B-8
        <div>
          {memeber.map((item) => {
            return (
              <ul key={item}>
                <li>{item}</li>
              </ul>
            );
          })}
        </div>
      </Styled.FooterStyle>
    </Styled.FooterBgStyle>
  );
}

export default Footer;
