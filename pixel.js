document.addEventListener('DOMContentLoaded', function () {
  let colors = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];
  //console.log(colors.length);
  let canvasCells = 1440;
  let paletCells = 144;
  let canvas = document.querySelector('.canvas')
  let pallette = document.querySelector('.pallette');
  let dashboard = document.querySelector('.dashboard');
  let curColor = 'red';
  buildGrid(canvas, canvasCells, ["White"]);
  buildGrid(pallette, paletCells, colors);

  canvas.addEventListener('click', function(event) {
    event.target.style.background = curColor;
  });
  pallette.addEventListener('click', function(event) {
    curColor = event.target.style.background;
    console.log(curColor);
    dashboard.style.background = curColor;
  });
  dashboard.addEventListener('click', function(event) {

    console.log('hello');//(curColor);
  //   dashboard.style.background = 'red';
  });

  function buildGrid(zone, numCells, colors) {
    for (let i = 0, j = 0; i < numCells; i++, j++) {
      let cell = document.createElement("div");
      if (j >= (colors.length - 1)) { j = 0; }
      cell.style.background = colors[j]
      zone.appendChild(cell);
      }

    }
});
