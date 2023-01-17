import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID fwZ610xsoUYlVYVS3cCeMDG29kJm11WCjyVu-L04cfk",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
