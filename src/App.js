import React, { useRef, useEffect, useState } from 'react';
import Crops from '../src/crops';
import Livestock from './Livestock';
import Fertilizer from './Fertilizer';
import Toolkeep from './ToolKeep';
import Weapon from './weapon';
import MonsterDetail from './MonsterDetail';
import Ore from './ore';
import Monster from './monster';
import Fish from './Fish';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Button,
  Navbar,
  Container,
  Nav,
  NavDropdown,
  InputGroup,
  FormControl,
} from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="App">
                <Navigation></Navigation>
                <div className="main">
                  <img src="./img/Main_Logo.png" alt="Title"></img>
                </div>
                {/* 다운로드 페이지 이동  */}
                <div>
                  <button className="Apple" onClick={AppPage}>
                    App Store
                    <img
                      className="GameImg"
                      src="./img/apple.png"
                      alt="icon"
                    ></img>
                  </button>
                  <button className="Google" onClick={GooglePage}>
                    Google Play
                    <img
                      className="GameImg"
                      src="./img/google.png"
                      alt="icon"
                    ></img>
                  </button>
                  <button className="Steam" onClick={SteamPage}>
                    Steam
                    <img
                      className="GameImg"
                      src="./img/steam.png"
                      alt="icon"
                    ></img>
                  </button>
                </div>
                <div className="StroryBox">
                  <div className="Story">
                    <p>
                      User에게,
                      <br />
                      이걸 읽고 있다면, 인생의 변화가 필요한 때구나
                      <br />
                      내게도 오래전에 같은 일이 있었지. 인생에서 진정으로 중요한
                      것이 무엇인지 잊었어...
                      <br />
                      다른 사람들과 자연과 하나 되어 지내는 삶을 그래서
                      <br /> 난 모든걸 버리고 내가 진정 있어야 할 곳으로
                      떠났단다. <br />
                      그곳의 증서를 여기에 동봉하마... 내자랑이자 기쁨 농장
                      스타듀 밸리에 있단다.
                    </p>
                    <div className="ImageContainer">
                      <img src="./img/Grandpa.png" alt="NPC"></img>
                    </div>
                  </div>
                </div>
                <footer>
                  <div class="footer">
                    <div class="footer-message">
                      개인 포트폴리오 프로젝트 제작 용도 입니다.
                    </div>
                    <div class="footer-contact">컨택: alstj6009@gmail.com</div>
                    <div class="footer-copyright">
                      Copyrigh 2024 All ⓒ Stardew Valley
                    </div>
                  </div>
                </footer>
              </div>
            </>
          }
        ></Route>
        <Route path="/작물" element={<Crops Navigation={Navigation} />}></Route>
        <Route path="/도구" element={<Toolkeep Navigation={Navigation} />} />
        <Route path="/생선" element={<Fish Navigation={Navigation} />}></Route>
        <Route
          path="/몬스터"
          element={<Monster Navigation={Navigation} />}
        ></Route>
        <Route path="/광물" element={<Ore Navigation={Navigation} />}></Route>
        <Route
          path="/몬스터/:category/:id"
          element={<MonsterDetail Navigation={Navigation} />}
        />
        <Route
          path="/무기"
          element={<Weapon Navigation={Navigation} />}
        ></Route>

        <Route
          path="/비료"
          element={<Fertilizer Navigation={Navigation} />}
        ></Route>
        <Route
          path="/가축"
          element={<Livestock Navigation={Navigation} />}
        ></Route>
      </Routes>
    </Router>
  );
}

function SteamPage() {
  let goSteam = (window.location.href =
    'https://store.steampowered.com/app/413150/Stardew_Valley/?l=koreana');
}
function AppPage() {
  let goApp = (window.location.href =
    'https://apps.apple.com/kr/app/stardew-valley/id1406710800');
}
function GooglePage() {
  let goGoogle = (window.location.href =
    'https://play.google.com/store/apps/details?id=com.chucklefish.stardewvalley&hl=ko-KO');
}

function Navigation() {
  return (
    <div style={{ fontFamily: 'NPSfontBold' }}>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img src={`./img/logo.png`} alt="logo"></img>
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavDropdown title="농장" id="basic-nav-dropdown">
              <NavDropdown.Item href="/작물">작물</NavDropdown.Item>
              <NavDropdown.Item href="/가축">가축</NavDropdown.Item>
              <NavDropdown.Item href="/비료">비료</NavDropdown.Item>
              <NavDropdown.Item href="/도구">도구</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>

            <NavDropdown title="광산" id="basic-nav-dropdown">
              <NavDropdown.Item href="/무기">무기</NavDropdown.Item>
              <NavDropdown.Item href="/광물">광물</NavDropdown.Item>
              <NavDropdown.Item href="/몬스터">몬스터</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <Nav.Link href="/생선">낚시</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;
