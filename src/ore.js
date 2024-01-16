import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Ore(props) {
  let { Navigation } = props;

  let [quartz, setQuartz] = useState([]);
  let [gem, setGem] = useState([]);
  let [mineral, setMineral] = useState([]);
  let [process, setProcess] = useState([]);
  useEffect(() => {
    let fetchOre = async () => {
      try {
        let response = await axios.get(
          'https://raw.githubusercontent.com/ming4718/NewPlant/main/ore.json'
        );
        let allData = response.data;
        let quartz = allData.석영 || [];
        let gem = allData.보석 || [];
        let mineral = allData.광물 || [];
        let process = allData.정동석 || [];

        setGem(gem, '보석');
        setMineral(mineral, '광물');
        setProcess(process, '정동석');
        setQuartz(quartz, '석영');
      } catch (error) {
        console.log('Error', error);
      }
    };
    fetchOre();
  }, []);
  return (
    <div className="field">
      <Navigation />
      <div className="box">
        <div className="subTitle">
          <hr />
          <h2>석영</h2>
          <hr />
          <p className="explanation">
            채집 광물은 광산와 해골 동굴의 바닥에서 찾을 수 있습니다. 이
            광물들은 다른 채집 가능한 것들처럼 주우면 되고 만약 채집 레벨 5때
            채집가 직업을 선택할 경우 확률적으로 2개를 얻을 수도 있습니다.
            &#40;이 광물들을 주워도 채집 경험치는 얻을 수 없습니다.&#41; 이
            광물들은 제작이나 마을 회관 보일러실의지질학자 꾸러미에 사용할 수
            있습니다. 채집 광물은 일반적으로 채집 경험치를 얻을 수 없지만,
            버그로 인해 채집가 직업 효과로 추가로 나온 광물만 채집 경험치 7을
            얻을 수 있습니다.
          </p>
          {quartz.map((e, i) => (
            <div key={i} className="animalBox">
              <table>
                <tr>
                  <th className="animalTitle1" rowSpan={2}>
                    <img
                      src={`./img/광물/채집/${e.id}.png`}
                      alt={`${e.name}`}
                      className="centeredImg"
                    />
                  </th>
                  <th className="animalTitle2">
                    <span className="mini">{e.name}</span>
                    <span className="pay"> {e.get}</span>
                  </th>
                </tr>
                <tr>
                  <td className="animalDescription" colSpan={2}>
                    <span>{e.explanation}</span>
                    <span className="pay">&#40;사용용도 : {e.usage}&#41;</span>
                  </td>
                </tr>
              </table>
            </div>
          ))}
        </div>
        <div className="subTitle">
          <hr />
          <h2>보석</h2>
          <hr />
          <p className="explanation">
            보석은 제작에 사용하거나 일반적으로 "사랑하는" 또는 "좋아하는"
            선물입니다.
          </p>
          {gem.map((e, i) => (
            <div key={i} className="animalBox">
              <table>
                <tr>
                  <th className="animalTitle1" rowSpan={2}>
                    <img
                      src={`./img/광물/보석/${e.id}.png`}
                      alt={`${e.name}`}
                      className="centeredImg"
                    />
                  </th>
                  <th className="animalTitle2">
                    <span className="mini">{e.name}</span>
                    <span className="pay">{e.get},</span>
                  </th>
                </tr>
                <tr>
                  <td className="animalDescription" colSpan={2}>
                    <span>{e.explanation}</span>
                    <span className="pay">&#40;사용용도 : {e.usage}&#41;</span>
                  </td>
                </tr>
              </table>
            </div>
          ))}
        </div>
        <div className="subTitle">
          <hr />
          <h2>정동석 광물</h2>
          <hr />
          <p className="explanation">
            정동석 광물은 정동석에서 추출한 것들입니다. 이것들은 주로 박물관에
            기증하는데 사용하며 소정의 수익을 위해 판매할 수도 있습니다.
            재단이나 의류 염색에 사용할 수도 있습니다. 일반적으로 대부분
            싫어하는 선물이지만 마법사는 좋아합니다.
          </p>
          {mineral.map((e, i) => (
            <div key={i} className="animalBox">
              <table>
                <tr>
                  <th className="animalTitle1" rowSpan={2}>
                    <img
                      src={`./img/광물/추출/${e.id}.png`}
                      alt={`${e.name}`}
                      className="centeredImg"
                    />
                  </th>
                  <th className="animalTitle2">
                    <span className="mini">{e.name}</span>
                    <span className="pay">{e.get},</span>
                  </th>
                </tr>
                <tr>
                  <td className="animalDescription" colSpan={2}>
                    <p>{e.explanation}</p>
                  </td>
                </tr>
              </table>
            </div>
          ))}
        </div>
        <div className="subTitle">
          <hr />
          <h2>정동석</h2>
          <hr />
          <p className="explanation">
            정동석은 다른 광물들을 포함하는 광물입니다. 광산에서 바위를
            부수다보면 얻을 수 있습니다. 정동석은 반드시 대장간에서 가공해야
            안에 들어있는 광물을 얻을 수 있습니다. 클린트가 한 개당 25골드로
            가공해줍니다. 정동석의 종류에 따라 나오는 광물이 정해져있지만 전
            정동석은 모든 광물이 나올 수 있습니다. 주의: 도구를 업그레이드 중일
            때는 정동석 가공을 할 수 없습니다.
          </p>
          {process.map((e, i) => (
            <div key={i} className="animalBox">
              <table>
                <tr>
                  <th className="animalTitle1" rowSpan={2}>
                    <img
                      src={`./img/광물/정동석/${e.id}.png`}
                      alt={`${e.name}`}
                      className="centeredImg"
                    />
                  </th>
                  <th className="animalTitle2">
                    <span className="mini">{e.name}</span>
                    <span className="pay">{e.get},</span>
                  </th>
                </tr>
                <tr>
                  <td className="animalDescription" colSpan={2}>
                    <p>{e.explanation}</p>
                  </td>
                </tr>
              </table>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Ore;
