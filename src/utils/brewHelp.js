import axios from "axios";
const url = "http://localhost:8080"

const Brew = {

  breweries: (locRad) => {
    // console.log("locRad: ", locRad);
    const searchUrl = url + "/locations";
    return axios({
      method: 'post',
      url: searchUrl,
      data: {
        location: locRad.loc,
        radius: locRad.rad
      }
    })
    .then(function(data){
      //console.log("Brewery Req Completed with: ", data.data.data);
      return data.data.data
    })
    .catch(function(error){
      console.log('Request Failed ', error);
    })
  },

  brews: (breweryId) => {
    const searchUrl = url + "/beers";
    return axios({
      method: 'post',
      url: searchUrl,
      data: breweryId
    })
    .then(function(data){
      console.log("Beer Req Completed with: ", data.data.data);
      return data.data.data
    })
    .catch(function(error){
      console.log('Request Failed ', error);
    })
  }

};

export default Brew
