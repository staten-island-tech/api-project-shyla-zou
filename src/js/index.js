import { DOMSelectors } from "./DOM";

const init = function () {
  let championValue;
  let summonerValue;
  const apikey = `RGAPI-525e148a-73f3-4456-aa42-2f029ef0ace6`;

  const grabData = async function (query) {
    try {
      const response = await fetch(query);
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      alert("something went wrong");
    }
  };
};

const displayData = async function () {
  let query;
  console.log(championValue);
};
