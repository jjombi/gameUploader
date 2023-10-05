import React from 'react';
import './App.css';
import styled from 'styled-components';
import { useNavigate,useLocation } from 'react-router-dom';
// import Upload_game_page from "./Upload_game_page";

function Header() {
  const pathname = useLocation().pathname;

   const Header = styled.header`
    background-color: black;
    width: 100%; // 1707.33
    height: 6vh; // 80px, 90px , / 1660 = 4.819277108433735, 5.421686746987952, / 2387 = 3.351487222454964(80px),3.770423125261835(90px)
    display: flex;
    align-items: center;  
  `;
  
  const HeaderBtn = styled.p`
    // width: 11.77vw; //200 11.7141970210797 7.8125
    height: 3.5vh; //60 3.514259106323909 3.75
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #949494;
    cursor: pointer;
  `;
  const Logo = styled(HeaderBtn)`
    left: 3vw; //329 19.2698540996761 12.8515625
    font-family: Logo;
  `;
  const Btn2 = styled(HeaderBtn)`
    margin-left: 80%; //40.5078125 ,53.359375 1369 3.281524926686217  77.44862097363768 80.7301459003239
    
  `;
  const Profile_area = styled.div`
    border: 3px solid rgb(0, 248, 50);
    border-radius: 50%;
    width: 33px;
    height: 33px;
    background-color: red;
    margin-left: 93%;
    cursor: pointer;
  `
  const Login_btn = styled.button`
    border-radius: 5px;
    width: 70px;
    height: 25px;
    background-color: white;
    border : 0;
    margin-left: 32%;
    cursor: pointer;
    background-color: #BAA9FF;
    &:hover{
        background-color: #5F38FF;
    }
  `
  const Login_btn_2 = styled(Login_btn)`
    margin-left: 94%;
  ` 
  const Community_btn = styled(HeaderBtn)`
    margin-left: 64%;
  `
  const Lecture_btn = styled(HeaderBtn)`
    margin-left: 73%;
  `
  const Search_ = styled.input`
    border: 1px solid black;
    width: 200px;
    height: 60%;
    margin-left: 50%;
    border-radius: 25px;
  `
  const navigate = useNavigate();
  const move_to_developerMain = (e)=>{
      navigate('/developerMain');
  }
  const move_to_main = (e)=>{
    navigate('/');
  }
  const move_to_profile = ()=>{
    navigate('/login_page');
  }
  const move_to_community = () => {
    navigate('/community');
  }
  const move_to_lecture = () => {
    navigate('/lecture');
  }
  const move_to_user_setting = () => {
    navigate('/user_setting');
  }
  return (
    
    <div className="App">
        <Header>
          <Logo onClick={move_to_main}>SMALL GAME ZONE</Logo>
          <Community_btn onClick={move_to_community}>커뮤니티</Community_btn>
          <Lecture_btn onClick={move_to_lecture}>강의</Lecture_btn>
          <Btn2 onClick={move_to_developerMain}>개발자 바로가기</Btn2>
          {
            pathname == '/developerMain' // && 로그인이 완료되어 있어야함
            ? <Profile_area onClick={move_to_user_setting}></Profile_area>
            : <Login_btn_2 onClick={move_to_profile}>로그인</Login_btn_2> // 로그인이 안되어 있으면 로그인, 회원 가입 버튼으로 바꾸기  
          }

        </Header>

    </div>
  );
}

export default Header;
