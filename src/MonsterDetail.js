import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

function MonsterDetail(props) {
  let { category, id } = useParams();
  let { Navigation } = props;
  let { state } = useLocation();
  let monsterData = state && state.monsterData;

  return (
    <div className="field">
      <Navigation />
      <div className="box">
        <div className="subTitle">
          {monsterData && (
            <div>
              <h2>{monsterData.name}</h2>
              <hr />
              <img
                src={`/img/몬스터/${category}/${id}.png`}
                alt={monsterData.name}
              />
              <span>
                <img
                  className="detailIcon"
                  src={`/img/무기/검/2.png`}
                  alt={monsterData.name}
                />
                처치 가능 여부: {monsterData.kill}
              </span>
              <span className="detailRegion">출몰지역: {category}</span>
              <h3 className="부제목">내용</h3>
              <hr />
              {monsterData.explanation ? (
                <p>{monsterData.explanation}</p>
              ) : (
                <p>{monsterData.strategy}</p>
              )}

              <h3 className="부제목">공략</h3>
              <hr />
              {monsterData.attack ? (
                <p> {monsterData.attack}</p>
              ) : (
                <p>{monsterData.action}</p>
              )}

              <div className="blank"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MonsterDetail;
