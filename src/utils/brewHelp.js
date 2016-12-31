import axios from "axios";
const url = "http://localhost:8080"

const Brew = {
  breweries: (searchValue) => {
    console.log(searchValue);
    const searchUrl = url + "/locations";
    return axios({
      method: 'post',
      url: searchUrl,
      data: {location: searchValue}
    })
      .then(function(data){
        console.log("Request Completed with: ", data.data.data);
        return data.data.data
      })
      .catch(function(error){
        console.log('Request Failed ', error);
      })
  }
};

export default Brew
