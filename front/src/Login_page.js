import styled from "styled-components";
import React from 'react';
import { useEffect } from "react";
import { Top_Content } from "./Main";
import { useNavigate } from "react-router-dom";
import Font from './Font/KaushanScript-Regular.otf';
import {Root, Welcome_message, Email_area, Password_area,Btn_area,Input_area, Login_btn, Text_area, Text, Text2,Line1} from './Styled_components_css';

const Login_page = () => {
    const navigate = useNavigate();
    const move_to_signup_page = () => {
        navigate('/signup_page');
    }
    return(
        <div className="Background_color_basic Login_page_root">
            <Root>
                <Welcome_message>Welcome our<br/>   compeny</Welcome_message>
                <Email_area>
                    <Input_area type="email" placeholder="이메일을 입력해 주세요"></Input_area>
                </Email_area>
                <Password_area>
                    <Input_area type="password" placeholder="비밀번호를 입력해 주세요"></Input_area>
                </Password_area>
                <Btn_area>
                    <Login_btn>로그인</Login_btn>
                </Btn_area>
                <Line1/>
                <Text_area>
                    <Text>비밀번호 찾기</Text>
                    <Text2 onClick={move_to_signup_page}>회원 가입</Text2>
                </Text_area>
            </Root>
        </div>
    );
}
export default Login_page;