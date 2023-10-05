import React from "react";
import styled from "styled-components";
import { Top_Content } from "./Main";

function DeveloperMain() {
    const Root = styled.div`
    width: 100%;
    height: 2000px;
    `
    const Top_Content_Developer = styled(Top_Content)`
        position: static;
        background-color: white;
    `
    return(
        <div className="Background_color_basic">
            <Root >
                <Top_Content_Developer> 
                    {/* 배경에 background-size: cover하고 opacity 좀 줘서 
                    흐린 배경 만들고 안에는 박스에 너비 높이 지정하지 말고 이미지만
                     넣어서 자동조정 시킴 */}

                </Top_Content_Developer>
                <Top_Content_Developer>

                </Top_Content_Developer>
                <Top_Content_Developer>
                    
                </Top_Content_Developer>
            </Root>
        </div>
    );
}
export default DeveloperMain;