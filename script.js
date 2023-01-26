const h1Style = document.getElementsByTagName("h1")[0].style;
setInterval(() => {
  h1Style.color =
    "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
}, 1000);
