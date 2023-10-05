import React from 'react';
import './App.css';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {
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
} from './ViewGameDetails';
const Gameupload = () => {
    const Root = styled.div`
        width: 40%;
        height: 2387px;
        position : relative;
        background-color : #D0D0D0;
        display: flex;
        flex-direction: column;
        margin-left: 30%;
    `
    const Top_title_area = styled.div`
        width: 100%;
        height: 1.5%;
        // background-color: red;
        display: table;
        margin-top:2%;
    `
    const Top_title_text = styled.h5`
        display: table-cell;
        vertical-align: middle;
        text-align: center;
        font-size: 16px;

    `
    const Bottom_input_area = styled.input`
        width: 100%;
        border-radius: 25px;
        border: 1px solid black;
    `
    const input_basic = styled.input`

    `
    return(
        <div>
            <Root>
                <Top_title_area><Top_title_text>제목</Top_title_text></Top_title_area>
                <input className='Input_basic Game_name'></input>
                <Top_title_area><Top_title_text>설명</Top_title_text></Top_title_area>
                <input className='Input_basic Game_information'></input>
                <Top_title_area><Top_title_text>제목</Top_title_text></Top_title_area>
                <input className='Input_basic Game_name'></input>
            </Root>
        </div>
    )
}

export default Gameupload;