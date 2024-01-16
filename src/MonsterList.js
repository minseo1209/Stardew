import React from 'react';

import { useNavigate } from 'react-router-dom';

function MonsterList({ monsters, category }) {
  let navigate = useNavigate();
  console.log(monsters);
  return (
    <div className="subTitle">
      <hr />
      <h2>{category}</h2>
      <hr />
      {monsters.map((monster) => (
        <div key={monster.id} className="animalBox">
          <table>
            <tr>
              <th className="animalTitle1" rowSpan={2}>
                <img
                  src={`${monster.src}`}
                  alt={monster.name}
                  className="centeredImg"
                />
              </th>
              <th className="animalTitle2">
                <p className="mini">{monster.name}</p>
              </th>
            </tr>
            <tr>
              <td className="animalDescription" colSpan={2}>
                <button
                  className="detail"
                  onClick={() => {
                    navigate(`/몬스터/${category}/${monster.id}`, {
                      state: { monsterData: monster },
                    });
                  }}
                >
                  [자세히 보기]
                </button>
              </td>
            </tr>
          </table>
        </div>
      ))}
    </div>
  );
}

export default MonsterList;
