$(document).ready(function (data) {
  $getJSON("./server/data-files/initial-tweets");
  console.log(data.name);
  console.log();
});
