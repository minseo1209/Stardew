import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import MonsterList from './MonsterList';

function Monster({ Navigation }) {
  let [monsterData, setMonsterData] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    let fetchMonster = async () => {
      try {
        let response = await axios.get(
          'https://raw.githubusercontent.com/ming4718/NewPlant/main/monster.json'
        );
        setMonsterData(response.data);
      } catch (error) {
        console.log('에러: ', error);
      }
    };

    fetchMonster();
  }, []);

  if (!monsterData) {
    // 데이터가 로딩 중이거나 찾을 수 없는 경우
    return;
  }

  return (
    <div className="field">
      <Navigation />
      <div className="box">
        {Object.entries(monsterData).map(([category, monsters]) => (
          <MonsterList
            key={category}
            monsters={monsters}
            category={category}
            navigate={navigate}
          />
        ))}
      </div>
    </div>
  );
}

export default Monster;
