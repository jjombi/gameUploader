import {React, useState} from "react";
import styled from "styled-components";
import { Root, Welcome_message, Email_area, Password_area, Btn_area, Input_area, Login_btn, Text_area, Text, Text2, Line1 } from "./Styled_components_css";



const Signup_page = () => {
    const [boolen, setBoolen] = useState(false);
    const [text, setText] = useState('로그인');
    const contoler_boolen = () => {
        console.log('btn_br_clicked')
        setBoolen(true);
        setText('인증 번호 확인');
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
                <Password_area>
                    <Input_area type="password" placeholder="비밀번호를 다시 입력해 주세요"></Input_area>
                </Password_area>
                {
                    boolen == true
                    ?     
                    <Password_area>
                        <Input_area type="password" placeholder="인증 번호 입력"></Input_area>
                    </Password_area>
                    : null
                }
                <a>{boolen}</a>
                <Btn_area>
                    <Login_btn onClick={contoler_boolen}>{text}</Login_btn>
                </Btn_area>
                <Line1/>
                <Text_area>
                    <Text>비밀번호 찾기</Text>
                    <Text2>회원 가입</Text2>
                </Text_area>
            </Root>
        </div>
    )
}
export default Signup_page;
