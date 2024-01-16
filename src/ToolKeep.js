import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Toolkeep(props) {
  let { Navigation } = props;

  let [homi, setHomi] = useState([]);
  let [ax, setAx] = useState([]);
  let [pick, setPick] = useState([]);
  let [water, setWatering] = useState([]);
  let [trash, setTrash] = useState([]);
  let [etc, setEct] = useState([]);
  let [fish, setFish] = useState([]);

  useEffect(() => {
    let fetchToolKeep = async () => {
      try {
        let response = await axios.get(
          'https://raw.githubusercontent.com/ming4718/NewPlant/main/toolkeep.json'
        );
        let allData = response.data;
        let homi = allData.호미 || [];
        let ax = allData.도끼 || [];
        let pick = allData.곡괭이 || [];
        let water = allData.물뿌리개 || [];
        let fish = allData.낚싯대 || [];
        let trash = allData.쓰레기통 || [];
        let etc = allData.기타 || [];

        setEct(etc, '기타');
        setHomi(homi, '호미');
        setPick(pick, '곡괭이');
        setTrash(trash, '쓰레기통');
        setWatering(water, '물뿌리개');
        setAx(ax, '도끼');
        setFish(fish, '낚싯대');
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchToolKeep();
  }, []);
  return (
    <div className="field">
      <Navigation />
      <div className="box">
        <div className="subTitle">
          <hr />
          <h2>호미</h2>
          <hr />
          {homi.map((e, i) => (
            <div key={i} className="animalBox">
              <table>
                <tr>
                  <th className="animalTitle1" rowSpan={2}>
                    <img
                      src={`./img/도구/호미/${e.id}.png`}
                      alt={`${e.name}`}
                      className="centeredImg"
                    />
                  </th>
                  <th className="animalTitle2">
                    <span className="mini">{e.name}</span>
                    <span className="pay">{e.pay}</span>
                  </th>
                </tr>
                <tr>
                  <td className="animalDescription" colSpan={2}>
                    <span>{e.ability}</span>
                    <span className="pay">{e.stuff}</span>
                  </td>
                </tr>
              </table>
            </div>
          ))}
        </div>
        <div className="subTitle">
          <hr />
          <h2>곡괭이</h2>
          <hr />
          {pick.map((e, i) => (
            <div key={i} className="animalBox">
              <table>
                <tr>
                  <th className="animalTitle1" rowSpan={2}>
                    <img
                      src={`./img/도구/곡괭이/${e.id}.png`}
                      alt={`${e.name}`}
                      className="centeredImg"
                    />
                  </th>
                  <th className="animalTitle2">
                    <span className="mini">{e.name}</span>
                    <span className="pay">{e.pay}</span>
                  </th>
                </tr>
                <tr>
                  <td className="animalDescription" colSpan={2}>
                    <span>{e.ability}</span>
                    <span className="pay">{e.stuff}</span>
                  </td>
                </tr>
              </table>
            </div>
          ))}
        </div>
        <div className="subTitle">
          <hr />
          <h2>도끼</h2>
          <hr />
          {ax.map((e, i) => (
            <div key={i} className="animalBox">
              <table>
                <tr>
                  <th className="animalTitle1" rowSpan={2}>
                    <img
                      src={`./img/도구/도끼/${e.id}.png`}
                      alt={`${e.name}`}
                      className="centeredImg"
                    />
                  </th>
                  <th className="animalTitle2">
                    <span className="mini">{e.name}</span>
                    <span className="pay">{e.pay}</span>
                  </th>
                </tr>
                <tr>
                  <td className="animalDescription" colSpan={2}>
                    <span>{e.ability}</span>
                    <span className="pay">{e.stuff}</span>
                  </td>
                </tr>
              </table>
            </div>
          ))}
        </div>
        <div className="subTitle">
          <hr />
          <h2>물뿌리개</h2>
          <hr />
          {water.map((e, i) => (
            <div key={i} className="animalBox">
              <table>
                <tr>
                  <th className="animalTitle1" rowSpan={2}>
                    <img
                      src={`./img/도구/물뿌리개/${e.id}.png`}
                      alt={`${e.name}`}
                      className="centeredImg"
                    />
                  </th>
                  <th className="animalTitle2">
                    <span className="mini">{e.name}</span>
                    <span className="pay">{e.pay}</span>
                  </th>
                </tr>
                <tr>
                  <td className="animalDescription" colSpan={2}>
                    <span>{e.ability}</span>
                    <span className="pay">{e.stuff}</span>
                  </td>
                </tr>
              </table>
            </div>
          ))}
        </div>
        <div className="subTitle">
          <hr />
          <h2>낚싯대</h2>
          <hr />
          {fish.map((e, i) => (
            <div key={i} className="animalBox">
              <table>
                <tr>
                  <th className="animalTitle1" rowSpan={2}>
                    <img
                      src={`./img/도구/낚싯대/${e.id}.png`}
                      alt={`${e.name}`}
                      className="centeredImg"
                    />
                  </th>
                  <th className="animalTitle2">
                    <span className="mini">{e.name}</span>
                    <span className="pay">{e.pay}</span>
                  </th>
                </tr>
                <tr>
                  <td className="animalDescription" colSpan={2}>
                    <span>{e.ability}</span>
                    <span className="pay">{e.stuff}</span>
                  </td>
                </tr>
              </table>
            </div>
          ))}
        </div>
        <div className="subTitle">
          <hr />
          <h2>쓰레기통</h2>
          <hr />
          {trash.map((e, i) => (
            <div key={i} className="animalBox">
              <table>
                <tr>
                  <th className="animalTitle1" rowSpan={2}>
                    <img
                      src={`./img/도구/쓰레기통/${e.id}.png`}
                      alt={`${e.name}`}
                      className="centeredImg"
                    />
                  </th>
                  <th className="animalTitle2">
                    <span className="mini">{e.name}</span>
                    <span className="pay">{e.pay}</span>
                  </th>
                </tr>
                <tr>
                  <td className="animalDescription" colSpan={2}>
                    <span>{e.ability}</span>
                    <span className="pay">{e.stuff}</span>
                  </td>
                </tr>
              </table>
            </div>
          ))}
        </div>
        <div className="subTitle">
          <hr />
          <h2>기타</h2>
          <hr />
          {etc.map((e, i) => (
            <div key={i} className="animalBox">
              <table>
                <tr>
                  <th className="animalTitle1" rowSpan={2}>
                    <img
                      src={`./img/도구/기타/${e.id}.png`}
                      alt={`${e.name}`}
                      className="centeredImg"
                    />
                  </th>
                  <th className="animalTitle2">
                    <span className="mini">{e.name}</span>
                    <span className="pay">{e.pay}</span>
                  </th>
                </tr>
                <tr>
                  <td className="animalDescription" colSpan={2}>
                    <span>{e.ability}</span>
                    <span className="pay">{e.stuff}</span>
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

export default Toolkeep;
