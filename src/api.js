import axios from "axios";
const url = "https://api.unsplash.com/search/photos";

const searchImages = async (term) => {
  const response = await axios
    .get(url, {
      headers: {
        Authorization: "Client-ID " + key,
      },
      params: {
        query: term,
        per_page: 30,
      },
    })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });

  return response;
};
export default searchImages;
