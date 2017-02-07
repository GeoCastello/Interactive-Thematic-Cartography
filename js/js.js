function showABC(year) {
    Plotly.newPlot('myDiv', dataABC, layout);
};
function showABC_upper(year) {
    Plotly.newPlot('myDiv', dataABC_upper, layout);
};
function show123(year) {
    Plotly.newPlot('myDiv', data123, layout);
};

var datosABC = {
  x: ['Adidas','Allianz','BASF','Bayer','Beiersdorf','BMW','Commerzbank','Daimler','Deutsche Bank','Deutsche Börse','Deutsche Lufthansa','Deutsche Post (DHL)','Deutsche Telekom','Eon','Fresenius','Fresenius Medical Care','Heidelberg Cement','Henkel','Infineon','K+S Kali GmbH','Linde','MAN','Merck','Metro','Munich RE (Münchener Rück)','RWE','SAP','Siemens','ThyssenKrupp','Volkswagen'],
  y: [12,106.5,63.9,35,6.2,60.5,10.2,97.8,27.3,2.1,27.3,51.5,62.4,92.7,16,9.1,11.8,15.1,4,5,12.9,14.7,9.3,67.3,45.5,53.3,12.6,73.5,43.4,126.9],
  type: 'bar',
    //Sectors
  text: ['Sporting goods','Insurance', 'Chemistry', 'Chemistry/pharma', 'Cosmetics', 'Automobile', 'Bank', 'Automobile', 'Bank', 'Finance', 'Aviation', 'Logistic', 'Telecommunication', 'Provider','Chemistry/health','Health/pharma','Material producer','Consumer goods','Semiconductor','Alkali metal/mining','Gas/plant construction','Machine construction','Pharma','Trade','Insurance','Provider','Software','Technology','Steel','Automobile'],
      
  marker: {
    color: ['#053061','#8dd3c7','#fb9a99','#fdbf6f','#cab2d6','#1f78b4','#33a02c','#1f78b4','#33a02c','#6a3d9a','#b2df8a','#ffffb3','#ffed6f','#fdb462','#e31a1c','#b15928','#fb8072','#ff7f00','#b3de69','#a6cee3','#ffff99','#bebada','#80b1d3','#b2182b','#8dd3c7','#fdb462','#fccde5','#ccebc5','#bc80bd','#1f78b4'],
    opacity: 1,
    line: {
      color: 'rbg(8,48,107)',
      width: 1.5
    }
  }
};

var datosABC_upper = {
  x: ['Adidas','Allianz','BASF','Bayer','Beiersdorf','BMW','Commerzbank','Daimler','Deutsche Bank','Deutsche Börse','Deutsche Lufthansa','Deutsche Post (DHL)','Deutsche Telekom','Eon','Fresenius','Fresenius Medical Care','Heidelberg Cement','Henkel','Infineon','K+S Kali GmbH','Linde','MAN','Merck','Metro','Munich RE (Münchener Rück)','RWE','SAP','Siemens','ThyssenKrupp','Volkswagen'],
  y: [12,106.5,63.9,35,6.2,60.5,10.2,97.8,27.3,2.1,27.3,51.5,62.4,92.7,16,9.1,11.8,15.1,4,5,12.9,14.7,9.3,67.3,45.5,53.3,12.6,73.5,43.4,126.9],
  type: 'bar',
 //Upper sectors
  text: ['Trade','Insurance & finance','Industry','Pharmaceutical industry','Pharmaceutical industry','Automobile','Insurance & finance','Automobile', 'Insurance & finance','Insurance & finance','Traffic','Logistic', 'Provision','Provision','Pharmaceutical industry','Pharmaceutical industry' ,'Building', 'Trade','Technology', 'Building','Technology','Automobile','Pharmaceutical industry', 'Trade','Insurance & finance','Provision','Software development','Technology','Industry','Automobile'],
      
  marker: {
    color: ['#6a3d9a','#33a02c','#b2df8a','#e31a1c','#e31a1c','#a6cee3','#33a02c','#a6cee3','#33a02c','#33a02c','#ffff99','#fb9a99','#fdbf6f','#fdbf6f','#e31a1c','#e31a1c','#1f78b4','#6a3d9a','#cab2d6','#1f78b4','#cab2d6','#a6cee3','#e31a1c','#6a3d9a','#33a02c','#fdbf6f','#ff7f00','#cab2d6','#b2df8a','#a6cee3'],
    opacity: 1,
    line: {
      color: 'rbg(8,48,107)',
      width: 1.5
    }
  }
};

var datos123 = {
  x: ['Deutsche Börse','Infineon','K+S Kali GmbH','Beiersdorf','Fresenius Medical Care','Merck','Commerzbank','Heidelberg Cement','Adidas','SAP','Linde','MAN','Henkel','Fresenius','Deutsche Bank','Deutsche Lufthansa','Bayer','ThyssenKrupp','Munich RE (Münchener Rück)','Deutsche Post (DHL)','RWE','BMW','Deutsche Telekom','BASF','Metro','Siemens','Eon','Daimler','Allianz','Volkswagen'],
  y: [2.1,4.0,5.0,6.2,9.1,9.3,10.2,11.8,12.0,12.6,12.9,14.7,15.1,16.0,27.3,27.3,35.0,43.4,45.5,51.5,53.3,60.5,62.4,63.9,67.3,73.5,92.7,97.8,106.5,126.9],
  type: 'bar',
    //Sectors
  text: ['Sporting goods','Insurance', 'Chemistry', 'Chemistry/pharma', 'Cosmetics', 'Automobile', 'Bank', 'Automobile', 'Bank', 'Finance', 'Aviation', 'Logistic', 'Telecommunication', 'Provider','Chemistry/health','Health/pharma','Material producer','Consumer goods','Semiconductor','Alkali metal/mining','Gas/plant construction','Machine construction','Pharma','Trade','Insurance','Provider','Software','Technology','Steel','Automobile'],
    //Upper sectors
  text: ['Insurance & finance','Technology', 'Building','Pharmaceutical industry','Pharmaceutical industry' ,'Pharmaceutical industry','Insurance & finance','Building','Trade','Software development','Technology','Automobile', 'Trade','Pharmaceutical industry', 'Insurance & finance','Traffic','Pharmaceutical industry','Industry','Insurance & finance','Logistic','Provision','Automobile', 'Provision','Industry', 'Trade','Technology','Provision','Automobile','Insurance & finance','Automobile'],
      
  marker: {
    color: ['rgb(113,149,183)','rgb(153,204,153)','pink','rgb(255,230,102)','rgb(255,230,102)','rgb(255,230,102)','rgb(88,172,250)','pink','rgb(255,71,117)','rgb(158,202,225)','rgb(153,204,153)','rgb(204,179,153)','rgb(255,71,117)','rgb(255,230,102)','rgb(88,172,250)','rgb(255,117,71)','rgb(255,230,102)','pink','rgb(88,172,250)','rgb(204,255,102)','rgb(182,113,183)','rgb(204,179,153)','rgb(182,113,183)','black','rgb(255,71,117)','rgb(153,204,153)','rgb(182,113,183)','rgb(204,179,153)','rgb(88,172,250)','rgb(204,179,153)'],
    opacity: 1,
    line: {
      color: 'rbg(8,48,107)',
      width: 1.5
    }
  }
};

var annotationContent = [];

dataABC = [datosABC];
dataABC_upper = [datosABC_upper];
data123 = [datos123];
var width_graph=parseInt(d3.select('#general').style('width'));
var mapRatio_graph= .445;
var height_graph=width_graph*mapRatio_graph;

layout = {
  //title: 'The best fucking graph',
  //annotations: annotationContent,
    width: width_graph/2.1,
    height: height_graph/3,
    paper_bgcolor: "#D8D8D8",
    plot_bgcolor: "#D8D8D8",
    margin: {
      l:30,
      r:10,
      t:25,
      b:25,
  },
    xaxis:{
        showticklabels: false
    }
};

Plotly.newPlot('myDiv', dataABC, layout);