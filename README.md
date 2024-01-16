# StardewCompendium:
React 로 제작된 StardewValley 도감 사이트입니다.

## 🖥️ 프로젝트 소개
이 프로젝트는 StardewValley Item 도감을 위해 만들어진 프로젝트 입니다.

현재 서비스 중인 카테고리 : 농장 / 광산 / 낚시 

## ⏱️ 개발 기간
2024.01.09 ~ 2024.01.15

## ⚙️ 기술 스택
- **React**: 웹 프론트엔드 라이브러리
- **Axios**: HTTP 요청을 위한 라이브러리
- **React Router**: 페이지 네비게이션을 관리하기 위한 라이브러리
- **Bootstrap**: CSS 프레임워크로, 빠른 스타일링을 위해 사용
- **JavaScript (ES6+)**: 프로그래밍 언어
- **JSON**: 데이터 포맷으로 사용

## 🚀 주요 기능
- 각 카테고리별 아이템 목록 확인
- 농작물, 광물, 낚시 아이템 상세 정보 확인
- 편리한 네비게이션을 통한 사용자 경험
- 몬스터 상세 정보 확인 

## ⛏️ 기능 개선
- 현재는 농장, 광산, 낚시 카테고리에 대한 기능이 구현되어 있습니다. 더 다양한 카테고리나 기능을 추가
- 사용자들의 편의를 위해 검색 기능이나 필터링 기능을 추가


## ⛏️ 코드 개선

프로젝트 코드 중 일부에서 반복되는 패턴이 있습니다. 이를 개선하여 코드의 가독성과 유지보수성을 높이는데 도움이 될 것입니다. 특히 다음과 같은 부분에서 코드 중복이 발견되었습니다:
``` C
{변수.map((e, i) => (
            <div key={i} >
              <table>
                <tr>
                  <th>
                    <img
                      src={`./img/`}
                      alt={`${e.name}`}
                      className="centeredImg"
                    />
                  </th>
                  <th >
                    <span>{e.name}</span>
                    <span>{e.location}</span>
                  </th>
                </tr>
                <tr>
                  <td>
                    <span>{e.explanation}</span>
                    <span>{e.season}</span>
                  </td>
                </tr>
              </table>
            </div>
          ))}
```

이러한 해당 중복된 코드를 함수로 추출하거나, 중복되는 부분을 별도의 컴포넌트로 분리하여 재사용할 수 있도록 하겠습니다.

## 🔗 URL
링크 : <https://stardewvalleyfackpage.netlify.app/>

