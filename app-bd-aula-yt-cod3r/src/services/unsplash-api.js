import axios from "axios";

const API_URL = "https://api.unsplash.com/search/photos";

export const getImage = async (query) => {
  try{const result =  await axios.get(
    `${API_URL}?query=${query}&page=1&per-page=1&client_id=TzP2Ap4Rv7VRU96Su1lqrmC_Rgs4LfWqg2Yhf_pAtGw`
  );
  return (result.data)}
  catch(error) {
    console.log(error)
  }
};