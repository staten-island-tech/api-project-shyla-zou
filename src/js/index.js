import { DOMSelectors } from "./DOM";

const init = function () {
  let latitudeValue;
  let longitudeValue;
  const apikey = "baf0db2c787499d5700a4b6856e09fe9";
};

const grabData = async function () {
  try {
    const response = await fetch(query);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    alert("Value entered is not valid");
  }

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

  console.log(getUVIndex);

  OkHttpClient;
  client = new OkHttpClient();

  Request;
  request = new Request.Builder()
    .url(
      "https://api.openuv.io/api/v1/uv?lat=-33.34&lng=115.342&dt=2018-01-24T10%3A50%3A52.283Z"
    )
    .get()
    .addHeader("x-access-token", "baf0db2c787499d5700a4b6856e09fe9")
    .build();

  response;
  response = client.newCall(request).execute();

  document.querySelector("#submitBtn");
  latitudeValue = DOMSelectors.latitude.value;
  event.preventDefault;
  console.log(latitudeValue);
  const infoPromise = getData();
  const info = await infoPromise;
  displayData(info);

  const response = await grabData(query);
  const dataResults = response.data;
  const alt = dataResults.alt.value;
  const ozone = dataResults.ozone.value;
  const dt = dataResults.dt.value;
  const uv = dataResults.uv.value;

  console.log(alt, ozone, dt);

  const green = "#558B2F";
  const yellow = "#F9A825";
  const orange = "#EF6C00";
  const red = "#B71C1C";

  let Color;
  let width;
  let description;
  if (uv <= 3) {
    Color = green;
    width = 25;
    description = "UV levels low";
  } else if (uv >= 4 && uv <= 6) {
    Color = yellow;
    width = 50;
    description = "UV levels moderate";
  } else if (uv >= 7 && uv <= 11) {
    Color = orange;
    width = 75;
    description = "DANGER UV levels high";
  } else if (uv > 12) {
    Color = red;
    width = 100;
    description = "YALL LIVE LIKE THIS??? RUN";
  }

  displayData();

  DOMSelectors.contentArea.insertAdjacentHTML("afterbegin"`<div class="info">
  <h3> ${longitude}, ${latitude} </h3>
  <p><span>UVIndex: </span> ${UV} °F</p>
  <p><span>Description: </span>${description}</p>
  <p><span>${response(displayData)}</span></p>
</div>`);

  DOMSelectors.submitBtn.addEventListener("click", function () {
    latitudeValue = DOMSelectors.latitude.value;
    longitudeValue = DOMSelectors.longitude.value;
    displayData();
  });
};

init();
