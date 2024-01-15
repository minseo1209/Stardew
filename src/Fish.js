import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Fish(props) {
  let { Navigation } = props;
  let [allData, setAllData] = useState([]);
  let [fishing, setFishing] = useState([]);
  let [market, setMarket] = useState([]);
  let [legend, setLegend] = useState([]);
  let [trap, setTrap] = useState([]);
  let [etc, setEtc] = useState([]);
  useEffect(() => {
    let fetchFish = async () => {
      try {
        let response = await axios.get(
          'https://raw.githubusercontent.com/ming4718/NewPlant/main/fish.json'
        );
        let allData = response.data;
        let fishing = allData.낚시 || [];
        let market = allData.야시장 || [];
        let legend = allData.전설 || [];
        let trap = allData.통발 || [];
        let etc = allData.외 || [];
        setAllData(allData, '전체');
        setTrap(trap, '통발');
        setFishing(fishing, '낚시');
        setLegend(legend, '전설');
        setMarket(market, '야시장');
        setEtc(etc, '외');
      } catch (error) {
        console.log('Error:', error);
      }
    };
    fetchFish();
  }, []);
  return (
    <div className="field">
      <Navigation />
      <div className="box">
        <div className="subTitle">
          <hr />
          <h2>낚시</h2>
          <hr />
          {fishing.map((e, i) => (
            <div key={i} className="animalBox">
              <table>
                <tr>
                  <th className="animalTitle1" rowSpan={2}>
                    <img
                      src={`./img/물고기/낚시/${e.id}.png`}
                      alt={`${e.name}`}
                      className="centeredImg"
                    />
                  </th>
                  <th className="animalTitle2">
                    <span className="mini">{e.name}</span>
                    <span className="pay">{e.location}</span>
                  </th>
                </tr>
                <tr>
                  <td className="animalDescription" colSpan={2}>
                    <span>{e.explanation}</span>
                    <span className="pay">{e.season}</span>
                  </td>
                </tr>
              </table>
            </div>
          ))}
        </div>
        <div className="subTitle">
          <hr />
          <h2>야시장</h2>
          <hr />
          {market.map((e, i) => (
            <div key={i} className="animalBox">
              <table>
                <tr>
                  <th className="animalTitle1" rowSpan={2}>
                    <img
                      src={`./img/물고기/야시장/${e.id}.png`}
                      alt={`${e.name}`}
                      className="centeredImg"
                    />
                  </th>
                  <th className="animalTitle2">
                    <span className="mini">{e.name}</span>
                    <span className="pay">{e.location}</span>
                  </th>
                </tr>
                <tr>
                  <td className="animalDescription" colSpan={2}>
                    <span>{e.explanation}</span>
                    <span className="pay">{e.season}</span>
                  </td>
                </tr>
              </table>
            </div>
          ))}
        </div>
        <div className="subTitle">
          <hr />
          <h2>전설</h2>
          <hr />
          {legend.map((e, i) => (
            <div key={i} className="animalBox">
              <table>
                <tr>
                  <th className="animalTitle1" rowSpan={2}>
                    <img
                      src={`./img/물고기/전설/${e.id}.png`}
                      alt={`${e.name}`}
                      className="centeredImg"
                    />
                  </th>
                  <th className="animalTitle2">
                    <span className="mini">{e.name}</span>
                    <span className="pay">{e.location}</span>
                  </th>
                </tr>
                <tr>
                  <td className="animalDescription" colSpan={2}>
                    <span>{e.explanation}</span>
                    <span className="pay">{e.season}</span>
                  </td>
                </tr>
              </table>
            </div>
          ))}
        </div>
        <div className="subTitle">
          <hr />
          <h2>통발</h2>
          <hr />
          {trap.map((e, i) => (
            <div key={i} className="animalBox">
              <table>
                <tr>
                  <th className="animalTitle1" rowSpan={2}>
                    <img
                      src={`./img/물고기/통발/${e.id}.png`}
                      alt={`${e.name}`}
                      className="centeredImg"
                    />
                  </th>
                  <th className="animalTitle2">
                    <span className="mini">{e.name}</span>
                    <span className="pay">{e.location}</span>
                  </th>
                </tr>
                <tr>
                  <td className="animalDescription" colSpan={2}>
                    <span>{e.explanation}</span>
                    <span className="pay">{e.season}</span>
                  </td>
                </tr>
              </table>
            </div>
          ))}
        </div>
        <div className="subTitle">
          <hr />
          <h2>그 외</h2>
          <hr />
          {etc.map((e, i) => (
            <div key={i} className="animalBox">
              <table>
                <tr>
                  <th className="animalTitle1" rowSpan={2}>
                    <img
                      src={`./img/물고기/외/${e.id}.png`}
                      alt={`${e.name}`}
                      className="centeredImg"
                    />
                  </th>
                  <th className="animalTitle2">
                    <span className="mini">{e.name}</span>
                    <span className="pay">{e.location}</span>
                  </th>
                </tr>
                <tr>
                  <td className="animalDescription" colSpan={2}>
                    <span>{e.explanation}</span>
                    <span className="pay">{e.season}</span>
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

export default Fish;
