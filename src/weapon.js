import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Weapon(props) {
  let { Navigation } = props;
  let [allData, setAllData] = useState([]);
  let [ability, setAbility] = useState([]);
  let [sword, setSword] = useState([]);
  let [knife, setKnife] = useState([]);
  let [hammer, setHammer] = useState([]);
  let [slingshot, setSlingshot] = useState([]);
  useEffect(() => {
    let fetchWeapn = async () => {
      try {
        let response = await axios.get(
          'https://raw.githubusercontent.com/ming4718/NewPlant/main/weapon.json'
        );
        let allData = response.data;
        let ability = allData.능력치 || [];
        let sword = allData.검 || [];
        let knife = allData.단검 || [];
        let hammer = allData.둔기 || [];
        let slingshot = allData.새총 || [];

        setAllData(allData, '전체');
        setAbility(ability, '능력치');
        setHammer(hammer, '둔기');
        setKnife(knife, '단검');
        setSlingshot(slingshot, '새총');
        setSword(sword, '검');
      } catch (error) {
        console.log('Error', error);
      }
    };
    fetchWeapn();
  }, []);
  return (
    <div className="field">
      <Navigation />
      <div className="box">
        <div className="subTitle">
          <hr />
          <h2>무기 능력치</h2>
          <hr />
          {ability.map((e, i) => (
            <div key={i} className="animalBox">
              <table>
                <tr>
                  <th className="animalTitle1" rowSpan={2}>
                    <img
                      src={`./img/무기/능력/${e.id}.png`}
                      alt={`${e.name}`}
                      className="centeredImg"
                    />
                  </th>
                  <th className="animalTitle2">
                    <p className="mini">{e.name}</p>
                  </th>
                </tr>
                <tr>
                  <td className="animalDescription" colSpan={2}>
                    <p>{e.ability}</p>
                  </td>
                </tr>
              </table>
            </div>
          ))}
        </div>
        <div className="subTitle">
          <hr />
          <h2>검</h2>
          <hr />
          {sword.map((e, i) => (
            <div key={i} className="animalBox">
              <table>
                <tr>
                  <th className="animalTitle1" rowSpan={2}>
                    <img
                      src={`./img/무기/검/${e.id}.png`}
                      alt={`${e.name}`}
                      className="centeredImg"
                    />
                  </th>
                  <th className="animalTitle2">
                    <span className="mini">{e.name}</span>
                    <span className="pay">데미지 : {e.damage}</span>
                  </th>
                </tr>
                <tr>
                  <td className="animalDescription" colSpan={2}>
                    <span>{e.ability}</span>
                    <span className="pay">{e.get}</span>
                  </td>
                </tr>
              </table>
            </div>
          ))}
        </div>
        <div className="subTitle">
          <hr />
          <h2>단검</h2>
          <hr />
          {knife.map((e, i) => (
            <div key={i} className="animalBox">
              <table>
                <tr>
                  <th className="animalTitle1" rowSpan={2}>
                    <img
                      src={`./img/무기/단검/${e.id}.png`}
                      alt={`${e.name}`}
                      className="centeredImg"
                    />
                  </th>
                  <th className="animalTitle2">
                    <span className="mini">{e.name}</span>
                    <span className="pay">데미지 : {e.damage}</span>
                  </th>
                </tr>
                <tr>
                  <td className="animalDescription" colSpan={2}>
                    <span>{e.ability}</span>
                    <span className="pay">{e.get}</span>
                  </td>
                </tr>
              </table>
            </div>
          ))}
        </div>
        <div className="subTitle">
          <hr />
          <h2>둔기</h2>
          <hr />
          {hammer.map((e, i) => (
            <div key={i} className="animalBox">
              <table>
                <tr>
                  <th className="animalTitle1" rowSpan={2}>
                    <img
                      src={`./img/무기/둔기/${e.id}.png`}
                      alt={`${e.name}`}
                      className="centeredImg"
                    />
                  </th>
                  <th className="animalTitle2">
                    <span className="mini">{e.name}</span>
                    <span className="pay">데미지 : {e.damage}</span>
                  </th>
                </tr>
                <tr>
                  <td className="animalDescription" colSpan={2}>
                    <span>{e.ability}</span>
                    <span className="pay">{e.get}</span>
                  </td>
                </tr>
              </table>
            </div>
          ))}
        </div>
        <div className="subTitle">
          <hr />
          <h2>새총</h2>
          <hr />
          {slingshot.map((e, i) => (
            <div key={i} className="animalBox">
              <table>
                <tr>
                  <th className="animalTitle1" rowSpan={2}>
                    <img
                      src={`./img/무기/새총/${e.id}.png`}
                      alt={`${e.name}`}
                      className="centeredImg"
                    />
                  </th>
                  <th className="animalTitle2">
                    <span className="mini">{e.name}</span>
                    <span className="pay">데미지 : {e.damage}</span>
                  </th>
                </tr>
                <tr>
                  <td className="animalDescription" colSpan={2}>
                    <span>{e.ability}</span>
                    <span className="pay">{e.get}</span>
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

export default Weapon;
