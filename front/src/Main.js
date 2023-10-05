import styled from "styled-components";
import React from 'react';
import './App.css';
import img from './img111.png';
import { useNavigate } from "react-router-dom";


let Top_Content = styled.img` //왜 여기서 const로 바꾸면 Main함수 안에서 불러올 수 없을까? 
    height : 50vh; 
    position : absolute;
    width : 82.05544710514318vw; 
    margin-left: 8.67469879518072vw;
    margin-top: 5%;
    // background-color : white;
    border-radius : 20px;
    display: inline-block;
    background-image: url(${img}), lightgray 50% / contain no-repeat;
    // opacity: 0.5;
`;
function Main(){
    const Top_Content_ = styled(Top_Content) `
        // background-image: url(${img});
        opacity: 0.5;
        object-fit: cover;
        background-size: cover;
        `;
    const Root = styled.div`
        width: 100%;
        height: 2387px;
        position : relative;
        background: linear-gradient(135deg, #30224C 0%, rgba(0, 0, 0, 0.96) 32.41%);
        // background-color: #c6c6c6;

    `;
    const BasicFont = styled.q`
        position: absolute;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        display: flex;
        align-items: center;
        
        color: #000000;
    `;
    const CategoryFontFont = styled(BasicFont)` //______________무료로 게임을... , 인기 게임 스차일
        font-size: 16px;
        width: 170px;
        height: 80px;
        margin-left: 19.2698540996761vwvw;
        margin-top: 54.4578313253012vh; //54.4578313253012vh 904px 54.4578313253012
        
    
    `;
    const MainFont = styled(BasicFont)`
        width: 704px;
        height: 75px;
        margin-left: 19.2698540996761vw;
        margin-top: 12.34939759036145vh;
    `;
    const ContentBox = styled.div`
        width : 62.05544710514318vw; 
        height : 30vh;
        position : absolute;
        
    `;
    

    
    const img_box = styled.img`
        border-radius : 20px;
    `;

    const Mostgame = styled(ContentBox)`
        // background-color : #f3f3f3;
        margin-left: 18.67469879518072vw;
        margin-top: 64.4578313253012vh;
        display: inline-block;
        align-items: center;

    `;
    const Profile_img_area = styled.div`
        // width: 80.7301459003239vw;
        width: 100%;
        height: 85%;
        // background-color: blue;
        display: flex;
        margin-top: 5px;
        // margin-left:5px;
    `;
    const Profile_text_area = styled.div`
        // width: 80.7301459003239vw;
        width: 100%;
        height: 10%;
        margin-top:2%;
        // background-color: red;
        // margin-left: 5px;
    `;
    const Profile_text = styled(BasicFont)`
        text-align: left;

    `;
    const Profile =  styled.div`
        width: 23.5%;
        height: 100%;
        background-color: black;
        margin-left: 2%;
        border-radius : 20px;
        border : 2px solid rgb(103, 103, 103);
        &:hover {
            border : 2px solid white;
            box-shadow: 0px 0px 71px 22px rgba(255, 255, 255, 0.25);
        }
        cursor: pointer;
    `;
    const Onleft =  styled(Profile)`
        margin-left: 0px;
    `;
   const navigate = useNavigate();
    const a = (e)=>{
        console.log("Asd");
        navigate('/viewGameDetails');
    }
    const click_r = (e)=>{
        
    }
    

    return(
        <Root>
            {/* <canvas id="canva">
            </canvas> */}
            {/* <p className="MainFont">무료로 게임을 플레이 하세요</p>
            <p className="MainFont_2">무료로 게임을 배포해 보세요</p> */}
            <Top_Content_ > 
                {/* <p className="Top_Content_Text">
                    모든 무료게임을<br/>
                    만나보세요
                </p> */}
            </Top_Content_>
            <p className="CategoryFont">인기 게임</p>
            <Mostgame>
                {/* <Left_btn onClick={click_l}></Left_btn>
                <Right_btn conClick={click_r}></Right_btn> */}
                <Profile_img_area>
                    <Onleft onClick={a}></Onleft>
                    <Profile></Profile>
                    <Profile></Profile>
                    <Profile></Profile>
                </Profile_img_area>
                <Profile_text_area>
                    <p className="Profile_text ver2">어의가 없네</p>
                    <p className="Profile_text">쌈싸라룸</p>
                </Profile_text_area>
                
            </Mostgame>
        </Root>
        //무료로 게임을 플레이 하세요 ,무료로 게임을 배포해 보세요
    );
}
export default (Main);
export {Top_Content};















 // const Basic_btn =  styled.div`
    //     position: absolute;
    //     border-radius: 100%;
    //     width: 40px;
    //     height:40px;
    //     background-color: green;
    //     margin-top : 85px;
    // `;
    // const Left_btn = styled(Basic_btn)`
    //     margin-left : 2%;
    // `;
    // const Right_btn = styled(Basic_btn)`
    //     right : 2%;
    // `;
    console.log()
    /*_________________________canvas___________________________*/
    
    // canvas.width = window.innerWidth;
    // canvas.height = window.innerHeight;
    
    // window.onload = function(){
    //     const canvas = document.getElementById("canva");
    //     const ctx = canvas.getContext("2d");
    //     canvas.width = window.innerWidth;
    //     canvas.height = window.innerHeight;
    //     // const anime = () => {
    //     //     console.log("anime is started");
    //     //     console.log(this.speed_height);
    //     //     ctx.beginPath();
            
    //     //     ctx.arc(this.speed_width,this.speed_height,this.x_position,0,Math.PI*2,false);
    //     //     ctx.stroke();
            
    //     //     this.speed_height++;
    //     //     if((this.speed_height+this.x_position) >= canvas.height){
    //     //         this.controler = false;
    //     //     }
    //     //     else if(this.controler){
    //     //         console.log("AnimationFrame is started");
    //     //         // ctx.clearRect(0,0,canvas.width,canvas.height);
    //     //         window.requestAnimationFrame(anime);
    //     //     }

    //     // }
    //     const anime = (speed_height,speed_width,x_position,controler) => {
    //         console.log("anime is started");
    //         console.log(speed_height);
    //         ctx.beginPath();
            
    //         ctx.arc(speed_width,speed_height,x_position,0,Math.PI*2,false);
    //         ctx.stroke();
            
    //         speed_height++;
    //         if((speed_height+x_position) >= canvas.height){
    //             controler = false;
    //         }
    //         else if(controler){
    //             console.log("AnimationFrame is started");
    //             // ctx.clearRect(0,0,canvas.width,canvas.height);
    //             window.requestAnimationFrame(anime);
    //         }

    //     }
    //     let makeCircle = () => {
    //         console.log("makeCircle is started");
    //         let speed_height = Math.random() * (canvas.height - canvas.height-(canvas.height-1)) + canvas.height-(canvas.height-1); 
    //         let speed_width = Math.random() * (canvas.width - canvas.width-(canvas.width-1)) + canvas.height-(canvas.height-1);
    //         let x_position = Math.random() * (80 - 0) + 0; 
    //         let controler = true;
    //         window.requestAnimationFrame(anime);
            
    //     };
    //     let wait_event = () => {
    //         console.log("wait_event is started");
    //         let random_time = (Math.random() * (7 - 3) + 3)*1000;
    //         setTimeout(()=>{
    //             makeCircle();
    //         },random_time);
    //     }
    //     setInterval(() => {
    //         console.log("setInterval is started");
    //         wait_event();
    //     }, 2000);
        
        
        

        
            
    // }