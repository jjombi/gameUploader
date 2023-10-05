import styled from "styled-components";
import React from "react";
import { useNavigate } from "react-router-dom";
function Footer(){
  const Footer = styled.footer`
    position: absolute;
    background-color: white;
    width: 100%;
    height: 400px;
    margin-buttom: 0;
    //bottom :500px; // 120.6632530120482 ,,83.91328026811898
    margin-bottom: 16px; //16.08671973188102
  `;
  const BasicLine = styled.div`
    position : absolute;
    width:100%;
    height:0;
    border : 1px solid black;
  `;
  const LineTop = styled(BasicLine)`

  `;
  const LineBottom = styled(BasicLine)`
    top : 50px;
  `;
   // const navigate = useNavigate();
  // function b() {navigate('/DeveloperMain');}`
    return(
        <>
        <Footer>
          <LineTop/>
          <LineBottom/>
        </Footer>
        </>
    );
}
export default Footer;