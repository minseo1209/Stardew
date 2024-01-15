import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Crops(props) {
  let { Navigation } = props;
  let [springData, setSpringData] = useState([]);
  let [summerData, setSummerData] = useState([]);
  let [fallData, setFallData] = useState([]);
  let [specialData, setSpecialData] = useState([]);

  useEffect(() => {
    // 컴포넌트가 마운트되면 작물 데이터를 가져옴
    fetchCropData();
  }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행

  let fetchCropData = async () => {
    try {
      // Axios 인스턴스 생성
      let dataURL =
        'https://raw.githubusercontent.com/ming4718/NewPlant/main/plant.json';
      let axiosService = axios.create({
        dataURL,
      });

      // 전체 작물 데이터를 가져오기
      let response = await axiosService.get(dataURL);
      let allCropData = response.data;

      // 봄 작물만 가져오기
      let springData = allCropData.spring || [];
      // 여름 작물만 가져오기
      let summerData = allCropData.summer || [];
      // 가을 작물만 가져오기
      let fallData = allCropData.fall || [];
      // 특수 작물만 가져오기
      let specialData = allCropData.special || [];

      // 가져온 데이터를 state에 저장
      setSpringData([...addNumber(springData, '봄')]);
      setSummerData([...addNumber(summerData, '여름')]);
      setFallData([...addNumber(fallData, '가을')]);
      setSpecialData([...addNumber(specialData, '특수')]);
    } catch (error) {
      console.error('Error fetching crop data:', error);
    }
  };

  // 가져온 데이터에 number 추가
  const addNumber = (data, season) => {
    // data가 배열이 아니거나 속성이 없는 경우 빈 배열 반환
    if (!Array.isArray(data) || data.length === 0) {
      console.error('Invalid data format:', data);
      return [];
    }

    // 배열의 각 아이템에 season과 number 추가
    return data.map((item) => ({
      ...item,
      season,
      number: item.number,
    }));
  };

  return (
    <div>
      <div className="field">
        <Navigation />
        <div className="box">
          <div className="subTitle">
            <hr />
            <h2>봄 작물</h2>
            <hr />
            {springData.map((crop, index) => (
              <div key={index}>
                <table>
                  <tr>
                    <th className="animalTitle1" rowSpan={2}>
                      <img
                        src={`./img/작물/봄/결과/${crop.number}.png`}
                        alt={crop.name}
                        className="centeredImg"
                      />
                    </th>
                    <th className="animalTitle2">
                      <span className="mini">{crop.name}</span>
                      <span className="pay">{crop.time}</span>
                    </th>
                  </tr>
                  <tr>
                    <td className="animalDescription" colSpan={2}>
                      <p>{crop.description}</p>
                    </td>
                  </tr>
                </table>
              </div>
            ))}
            <hr />
            <h2>여름 작물</h2>
            <hr />
            {summerData.map((crop, index) => (
              <div key={index}>
                <table>
                  <tr>
                    <th className="animalTitle1" rowSpan={2}>
                      <img
                        src={`./img/작물/여름/결과/${crop.number}.png`}
                        alt={crop.name}
                        className="centeredImg"
                      />
                    </th>
                    <th className="animalTitle2">
                      <span className="mini">{crop.name}</span>
                      <span className="pay">{crop.time}</span>
                    </th>
                  </tr>
                  <tr>
                    <td className="animalDescription" colSpan={2}>
                      <p>{crop.description}</p>
                    </td>
                  </tr>
                </table>
              </div>
            ))}
            <hr />
            <h2>가을 작물</h2>
            <hr />
            {fallData.map((crop, index) => (
              <div key={index}>
                <table>
                  <tr>
                    <th className="animalTitle1" rowSpan={2}>
                      <img
                        src={`./img/작물/가을/결과/${crop.number}.png`}
                        alt={crop.name}
                        className="centeredImg"
                      />
                    </th>
                    <th className="animalTitle2">
                      <span className="mini">{crop.name}</span>
                      <span className="pay">{crop.time}</span>
                    </th>
                  </tr>
                  <tr>
                    <td className="animalDescription" colSpan={2}>
                      <p>{crop.description}</p>
                    </td>
                  </tr>
                </table>
              </div>
            ))}
            <hr />
            <h2>특수 작물</h2>
            <hr />
            {specialData.map((crop, index) => (
              <div key={index}>
                <table>
                  <tr>
                    <th className="animalTitle1" rowSpan={2}>
                      <img
                        src={`./img/작물/특수/결과/${crop.number}.png`}
                        alt={crop.name}
                        className="centeredImg"
                      />
                    </th>
                    <th className="animalTitle2">
                      <span className="mini">{crop.name}</span>
                      <span className="pay">{crop.time}</span>
                    </th>
                  </tr>
                  <tr>
                    <td className="animalDescription" colSpan={2}>
                      <p>{crop.description}</p>
                    </td>
                  </tr>
                </table>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Crops;
