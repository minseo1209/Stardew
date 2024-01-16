import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Livestock(props) {
  let { Navigation } = props;

  let [chicken, setChicken] = useState([]);
  let [cow, setCow] = useState([]);

  useEffect(() => {
    let fetchLivestockData = async () => {
      try {
        let response = await axios.get(
          'https://raw.githubusercontent.com/ming4718/NewPlant/main/animal.json'
        );
        let allData = response.data;
        let chicken = allData.닭장 || []; // 닭장 데이터
        let cow = allData.외양간 || []; // 외양간 데이터

        setChicken(chicken, '닭장');
        setCow(cow, '외양간');
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchLivestockData();
  }, []);

  return (
    <div className="field">
      <Navigation />
      <div className="box">
        <div className="subTitle">
          <hr />
          <h2>닭장 동물</h2>
          <hr />
          {/* chicken.map 사용 */}
          {chicken.map((animal, i) => (
            <div key={i} className="animalBox">
              <table>
                <tr>
                  <th className="animalTitle1" rowSpan={2}>
                    <img
                      src={`./img/동물/닭장/${animal.id}.png`}
                      alt={`${animal.name}`}
                      className="centeredImg"
                    />
                  </th>
                  <th className="animalTitle2">
                    <span className="mini">{animal.name}</span>
                    <span className="pay">{animal.pay}</span>
                  </th>
                </tr>
                <tr>
                  <td className="animalDescription" colSpan={2}>
                    <p>{animal.description}</p>
                  </td>
                </tr>
              </table>
            </div>
          ))}
        </div>
        <div className="subTitle">
          <hr />
          <h2>외양간 동물</h2>
          <hr />
          {/* cow.map 사용 */}
          {cow.map((animal, i) => (
            <div key={i}>
              <table>
                <tr>
                  <th className="animalTitle1" rowSpan={2}>
                    <img
                      src={`./img/동물/외양간/${animal.id}.png`}
                      alt={`${animal.name}`}
                      className="centeredImg"
                    />
                  </th>
                  <th className="animalTitle2">
                    <span className="mini">{animal.name}</span>
                    <span className="pay">{animal.pay}</span>
                  </th>
                </tr>
                <tr>
                  <td className="animalDescription" colSpan={2}>
                    <p>{animal.description}</p>
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

export default Livestock;
