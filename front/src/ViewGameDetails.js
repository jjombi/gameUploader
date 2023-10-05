import styled from "styled-components";
import React from 'react';
import { useEffect } from "react";
import { Top_Content } from "./Main";
import { useNavigate } from "react-router-dom";
import img from './img111.png';

let Main_basic = styled.div`
    display: flex;
    flex-direction: column;
    height: 94vh;
`
let Left_main = styled(Main_basic)`
    width: 75%;
`
let Right_main = styled(Main_basic)`
    width: 25%;
`
let Left_main_img = styled.img`
    width: 100%;
    height: 70%;
    margin-top: 1%;
    background-color: white;
    background: url(${img}), lightgray 50% / contain no-repeat;
`
let Left_main_game_name = styled.div`
    width : 100%;
    height : 9%;
    margin-top: 1%;
    display: table;
`
let Game_name = styled.h1`
    display: table-cell;
    vertical-align: middle;
`
let Game_name_ = styled(Game_name)`
    text-align: center;
`
let Left_main_tag = styled.div`
    width: 100%;
    height : 4%;
    margin-top: 1%;
    display: table;
`
let Tag = styled.h5`
    display: table-cell;
    vertical-align: middle;
`
let Right_main_basic = styled.div`
    width : 90%;
    margin-left: 10%;
    margin-top: 3%;
    background-color: white;
`
let Logo_area = styled(Right_main_basic)`
    height: 20%;

`
let Game_name_area = styled(Right_main_basic)`
    height : 10%;
    display: table;
`
let Download_btn_area = styled(Right_main_basic)`
    height : 8%;

`
let Btn = styled.button`
    width: 100%;
    height: 100%;
    border-radius: 25px;
    background-color: rgb(38, 89, 219);
`
let Game_information = styled(Right_main_basic)`
    height: 25%;
    display: flex;
    flex-direction: column;
`
let Game_information_lines = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
let Game_review = styled(Right_main_basic)`
    height: 20%;
`
let Game_information_text_left = styled.h5`
    font-size: 16px;
    top: 1%;
    left: 0%;
`
let Game_information_text_right = styled.h5`
    font-size: 16px;
    top: 1%;
    right: 0%;
`
export default function ViewGameDetails(){
    const Root = styled.div`
        width: 80%;
        height: 2387px;
        position : relative;
        // background-color : #D0D0D0;
        display: flex;
        flex-direction: row;
        margin-left: 10%;
    `;
    useEffect(() => {
        window.scrollTo(0, 0);
    })
    const navigate = useNavigate();
    
    return(
        <div> {/*style={{backgroundColor:"#D0D0D0"}} */}
            <Root>
                <Left_main>
                    <Left_main_img></Left_main_img>
                    <Left_main_game_name><Game_name>쌈싸라룸</Game_name></Left_main_game_name>
                    <Left_main_tag><Tag>#액션 #호러 #스릴</Tag></Left_main_tag>
                </Left_main>
                <Right_main>
                    <Logo_area></Logo_area>
                    <Game_name_area>
                        <Game_name_>쌈싸라룸</Game_name_>
                    </Game_name_area>
                    <Download_btn_area>
                        <Btn>다운로드</Btn>
                    </Download_btn_area>
                    <Game_information>
                        <Game_information_lines>
                            <Game_information_text_left>개발사</Game_information_text_left>
                            <Game_information_text_right>이재건 컴퍼니</Game_information_text_right>
                        </Game_information_lines>
                        <Game_information_lines>
                            <Game_information_text_left>개발사</Game_information_text_left>
                            <Game_information_text_right>이재건 컴퍼니</Game_information_text_right>
                        </Game_information_lines>
                    </Game_information>
                    <Game_review></Game_review>
                </Right_main>
            </Root>
        </div>
    );
}
export {
    Left_main,
    Left_main_img,
    Left_main_game_name,
    Game_name,
    Left_main_tag,
    Tag,
    Right_main,
    Logo_area,
    Game_name_area,
    Game_name_,
    Download_btn_area,
    Btn,
    Game_information,
    Game_information_text_left,
    Game_information_text_right,
    Game_review
};