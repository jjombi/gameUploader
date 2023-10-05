import React from "react";
import styled from "styled-components";

/*_________________________----로그인 __________________________- */
const Root = styled.div`
width: 25%;
height: 70%;
background-color: black;
margin-left: 37.5%;
display: flex;
flex-direction: column;
margin-top: 6%;
text-align: center;
border-radius: 10px;
`
const Welcome_message = styled.h1`
font-size: 30px;
color: white;
margin-top: 12%;
font-family: Logo;
`
const Email_area = styled.div`
width: 100%;
height: 6%;
margin-top: 20%;
// align-items: center;
text-align: center;
`
const Password_area =styled.div`
width: 100%;
height: 6%;
margin-top: 4%;
text-align: center;

`
const Btn_area = styled.div`
width: 100%;
height: 4%;
margin-top: 5%;
text-align: center;
`
const Input_area = styled.input`
width: 80%;
height: 100%;
border:0;
border-radius: 5px;
text-align: center;
`
const Login_btn = styled.button`
border:0;
border-radius: 5px;
width: 80%;
height: 100%;
cursor: pointer;
background-color: #BAA9FF;
&:hover{
    background-color: #5F38FF;
}
`
const Text_area = styled.div`
width : 100%;
height: 4%;
margin-top: 3%;
justify-content: center;
text-align: center;
display: flex;
flex-direction: row;
`
const Text = styled.h4`
font-size: 16px;
margin-right: 1%;
color: white;
cursor: pointer;

`
const Text2 = styled.h4`
margin-left: 1%;
font-size: 16px;
color: white;
cursor: pointer;

`
const Line = styled.div`
width:60%;
height: 2px;
background-color: white;
margin-left: 20%;
`
const Line1 = styled(Line)`
margin-top: 40%;
`
/*+______________________________________---회원가입__________________________________ */
export {Root, Welcome_message, Email_area, Password_area,Btn_area,Input_area, Login_btn, Text_area, Text, Text2,Line1}