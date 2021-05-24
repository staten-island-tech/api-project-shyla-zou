import { DOMSelectors } from "./DOM";

const init = function () {
  let latitudeValue;
  let longitudeValue;
  const apikey = "baf0db2c787499d5700a4b6856e09fe9";
};

const grabData = async function () {
  try {
    const response = await fetch(
      "https://api.openuv.io/api/v1/uv?lat=-33.34&lng=115.342&dt=2018-01-24T10%3A50%3A52.283Z"
    );

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    alert("Value entered is not valid");
  }
};

function getUVIndex() {
  const lat = $("#lat").val();
  const lng = $("#lng").val();
  const alt = $("#alt").val();
  const ozone = $("#ozone").val();
  const dt = $("#dt").val();

  $.ajax({
    type: "GET",
    dataType: "json",
    beforeSend: function (request) {
      request.setRequestHeader(
        "x-access-token",
        "baf0db2c787499d5700a4b6856e09fe9"
      );
    },
    url:
      "https://api.openuv.io/api/v1/uv?lat=" +
      lat +
      "&lng=" +
      lng +
      "&alt=" +
      alt +
      "&ozone=" +
      ozone +
      "&dt=" +
      dt,
    success: function (response) {},
    error: function (response) {},
  });
}

document.querySelector("#submitBtn");
latitudeValue = DOMSelectors.latitudeInput.value;
event.preventDefault;
console.log(latitudeValue);
const infoPromise = getData();
const info = await infoPromise;
displayData(info);

latitudeValue = DOMSelectors.findLatitude.value;
longitudeValue = DOMSelectors.findLongitude.value;

const response = await grabData(query);
const dataResults = response.data;
const latitude = dataResults.findlatitude;
const longitude = dataResults.findlongitude;
console.log(lat, lng, alt, ozone, dt);

displayData();

DOMSelectors.submitBtn.addEventListener("click", function () {
  latitudeValue = DOMSelectors.latitudeInput.value;
  longitudeValue = DOMSelectors.longitudeInput.value;
  displayData();
});

init();
