import axios from 'axios';

let baseURL = 'https://raw.githubusercontent.com/ming4718/NewPlant/main/';
let axiosService = axios.create({
  baseURL,
  headers: {
    'Cache-Control': 'no-cache',
  },
});

// 특정 계절과 데이터 유형에 대한 데이터를 가져오는 함수
export let getSeasonData = async (season, dataType) => {
  try {
    // Axios를 사용하여 데이터 가져오기
    let response = await axiosService.get(`${season}/${dataType}.json`);
    let timeResponse = await axiosService.get(`${season}/time.json`);

    // 데이터와 time 정보를 합치기
    let responseData = response.data.map((item, index) => ({
      ...item,
      time: timeResponse.data[index].time,
    }));

    return responseData;
  } catch (error) {
    console.error('작물 에러:', error);
    throw error;
  }
};

// 두 번째 JSON 파일을 가져오는 함수
export let getAnimalData = async () => {
  try {
    // Axios를 사용하여 동물 데이터 가져오기
    let response = await axiosService.get('animal.json');
    return response.data;
  } catch (error) {
    console.error('가축 에러:', error);
    throw error;
  }
};

// 비료 JSON 파일을 가져오는 함수
export let getFertilizer = async () => {
  try {
    let response = await axiosService.get('Fertilizer.json');
    return response.data;
  } catch (error) {
    console.error('비료 에러:', error);
  }
};

// 생선 JSON 파일을 가져오는 함수
export let getFish = async () => {
  try {
    let response = await axiosService.get('fish.json');

    return response.data;
  } catch (error) {
    console.log('물고기 에러:', error);
  }
};

// 도구 JSON 파일을 가져오는 함수
export let getToolKeep = async () => {
  try {
    let response = await axiosService.get('toolkeep.json');
    return response.data;
  } catch (error) {
    console.log('도구 에러:', error);
  }
};

// 무기 JSON 파일을 가져오는 함수
export let getWeapon = async () => {
  try {
    let response = await axiosService.get('weapon.json');
    return response.data;
  } catch (error) {
    console.log('무기 에러:', error);
  }
};

// 광물 JSON 파일을 가져오는 함수
export let getOre = async () => {
  try {
    let response = await axiosService.get('ore.json');
    return response.data;
  } catch (error) {
    console.log('광석 에러:', error);
  }
};

// 몬스터 JSON 파일을 가져오는 함수
export let getMonster = async () => {
  try {
    let response = await axiosService.get('monster.json');
    return response.data;
  } catch (error) {
    console.log('몬스터 에러:', error);
  }
};
