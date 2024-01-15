import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Fertilizer(props) {
  let { Navigation } = props;
  let [allData, setAllData] = useState([]);
  let [fertilizer, setFertilizer] = useState([]);
  let [growth, setGrowth] = useState([]);
  let [soil, setSoil] = useState([]);

  useEffect(() => {
    let fetchFertilizerData = async () => {
      try {
        let response = await axios.get(
          'https://raw.githubusercontent.com/ming4718/NewPlant/main/Fertilizer.json'
        );
        let allData = response.data;
        let fertilizer = allData.비료 || [];
        let growth = allData.토양 || [];
        let soil = allData.촉진제 || [];
        setAllData(response.data);
        setFertilizer(fertilizer, '비료');
        setGrowth(growth, '토양');
        setSoil(soil, '촉진제');
      } catch (error) {
        console.log('Error:', error);
      }
    };
    fetchFertilizerData();
  }, []);

  return (
    <div className="field">
      <Navigation />
      <div className="box">
        <div className="subTitle">
          <hr />
          <h2>비료</h2>

          <hr />
          {/*반복문 돌림*/}
          {fertilizer.map((e, i) => (
            <div key={i} className="animalBox">
              <table>
                <tr>
                  <th className="animalTitle1" rowSpan={2}>
                    <img
                      src={`./img/토양/비료/${e.id}.png`}
                      alt={`${e.name}`}
                      className="centeredImg"
                    />
                  </th>
                  <th className="animalTitle2">
                    <span className="mini">{e.name}</span>
                    <span className="pay">{e.stuff}</span>
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
          <h2>촉진제</h2>
          <hr />
          {soil.map((e, i) => (
            <div key={i} className="animalBox">
              <table>
                <tr>
                  <th className="animalTitle1" rowSpan={2}>
                    <img
                      src={`./img/토양/촉진제/${e.id}.png`}
                      alt={`${e.name}`}
                      className="centeredImg"
                    />
                  </th>
                  <th className="animalTitle2">
                    <span className="mini">{e.name}</span>
                    <span className="pay">{e.stuff}</span>
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
          <h2>보습</h2>
          <hr />
          {growth.map((e, i) => (
            <div key={i} className="animalBox">
              <table>
                <tr>
                  <th className="animalTitle1" rowSpan={2}>
                    <img
                      src={`./img/토양/토양/${e.id}.png`}
                      alt={`${e.name}`}
                      className="centeredImg"
                    />
                  </th>
                  <th className="animalTitle2">
                    <span className="mini">{e.name}</span>
                    <span className="pay">{e.stuff}</span>
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

export default Fertilizer;
