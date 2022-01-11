fetch("./header/header.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("myHeader").innerHTML = data;
  });

fetch("./footer/footer.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("myFooter").innerHTML = data;
  });

  fetch("./main/main.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("myMain").innerHTML = data;
  });
  fetch("./stats/stats.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("myStats").innerHTML = data;
  });
  fetch("./tasks/tasks.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("myTasks").innerHTML = data;
  });