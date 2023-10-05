import styled from "styled-components";
import React from 'react';
import { useEffect } from "react";
import { Top_Content } from "./Main";
import { useNavigate } from "react-router-dom";

const Lecture = () => {

    const Root = styled.div`
        width: 80%;
        display: flex;
        flex-direction: column;
        margin-left: 10%;
    `
    const Content_area = styled.div`
        width : 100%;
        background-color : blue;
        display: flex;
        flex-direction: row;
        align-items: center;
    `
    const Tag = styled.div`
        width : 100%;
        height : 6vh;
        background-color : blue;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom : 5%;
    `
    const Tag_text = styled.a`
        font-size : 16px;
        margin-right : 2%;
    `
    const Left = styled.div`
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;   
        background-color: Green;
    `
    const Box = styled.div`
        display : flex;
        width: 100%;
        height: 20vh;
        background-color: black;
    `
    const Right = styled.div`
        width: 50%;
        display: flex;
        flex-direction: column;
        border: 1px solid black;
        justify-content: center;   
        background-color: Green;

    `
    const Content = styled.div`
        width: 33%;
        height : 100%;
        background-color: red;
        // margin-left
        border : 1px solid black;
    `

    return(
        <div className="Background_color_basic Comm_node">
            <Root>
                <Tag>
                    <Tag_text>qqqqqqqqqqq</Tag_text>
                    <Tag_text>wwwwwwwwwwwwwwwww</Tag_text>
                    <Tag_text>eeeeeeeeeeeeeeeeeeeee</Tag_text>
                    <Tag_text>qqqqqqqqqqq</Tag_text>
                    <Tag_text>wwwwwwwwwwwwwwwww</Tag_text>
                    <Tag_text>eeeeeeeeeeeeeeeeeeeee</Tag_text>
                </Tag>
                <Content_area>
                    <Left>
                        
                        <Box>
                            <Content></Content>
                            <Content></Content>
                            <Content></Content>
                        </Box>
                        
                        <Box>
                            <Content></Content>
                            <Content></Content>
                            <Content></Content>
                        </Box>
                    </Left>
                    <Right>
                    <Box>
                            <Content></Content>
                            <Content></Content>
                            <Content></Content>
                        </Box>
                        
                        <Box>
                            <Content></Content>
                            <Content></Content>
                            <Content></Content>
                        </Box>
                    </Right>
                </Content_area> 
            </Root>
        </div>
    );
}

export default Lecture;
