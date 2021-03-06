  <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
  <script type="text/javascript">
       google.charts.load('current', {'packages':['corechart']});
       google.charts.setOnLoadCallback(drawChart);

 function drawChart() {
      var data = google.visualization.arrayToDataTable(
    [
    ['Day', 'Difference'],
    [0, 9942],
    [1, 9901],
    [2, 9933],
    [3, 9910],
    [4, 9875],
    [5, 9908],
    [6, 9910],
    [7, 9920],
    [8, 9920],
    [9, 9892],
    [10, 9918],
    [11, 9878],
    [12, 9896],
    [13, 9875],
    [14, 9917],
    [15, 9915],
    [16, 9897],
    [17, 9892],
    [18, 9868],
    [19, 9942],
    [20, 9933],
    [21, 9870],
    [22, 9925],
    [23, 9890],
    [24, 9900],
    [25, 9930],
    [26, 9882],
    [27, 9901],
    [28, 9887],
    [29, 9868],
    [30, 9921],
    [31, 9918],
    [32, 9926],
    [33, 9874],
    [34, 9862],
    [35, 9882],
    [36, 9878],
    [37, 9976],
    [38, 9924],
    [39, 9897],
    [40, 9911],
    [41, 9906],
    [42, 9909],
    [43, 9898],
    [44, 9938],
    [45, 9889],
    [46, 9907],
    [47, 9847],
    [48, 9928],
    [49, 9902],
    [50, 9931],
    [51, 9859],
    [52, 9932],
    [53, 9887],
    [54, 9869],
    [55, 9891],
    [56, 9918],
    [57, 9912],
    [58, 9885],
    [59, 9852],
    [60, 9899],
    [61, 9855],
    [62, 9920],
    [63, 9887],
    [64, 9937],
    [65, 9906],
    [66, 9889],
    [67, 9903],
    [68, 9930],
    [69, 9900],
    [70, 9878],
    [71, 9861],
    [72, 9876],
    [73, 9921],
    [74, 9891],
    [75, 9913],
    [76, 9886],
    [77, 9907],
    [78, 9848],
    [79, 9953],
    [80, 9919],
    [81, 9824],
    [82, 9883],
    [83, 9905],
    [84, 9814],
    [85, 9893],
    [86, 9910],
    [87, 9860],
    [88, 9888],
    [89, 9849],
    [90, 9916],
    [91, 9842],
    [92, 9873],
    [93, 9839],
    [94, 9916],
    [95, 9915],
    [96, 9853],
    [97, 9898],
    [98, 9889],
    [99, 9875],
    [100, 9938],
    [101, 9889],
    [102, 9917],
    [103, 9873],
    [104, 9856],
    [105, 9900],
    [106, 9919],
    [107, 9865],
    [108, 9892],
    [109, 9900],
    [110, 9894],
    [111, 9928],
    [112, 9884],
    [113, 9870],
    [114, 9892],
    [115, 9857],
    [116, 9879],
    [117, 9851],
    [118, 9896],
    [119, 9878],
    [120, 9900],
    [121, 9920],
    [122, 9903],
    [123, 9895],
    [124, 9891],
    [125, 9892],
    [126, 9893],
    [127, 9874],
    [128, 9873],
    [129, 9932],
    [130, 9879],
    [131, 9878],
    [132, 9920],
    [133, 9895],
    [134, 9886],
    [135, 9915],
    [136, 9890],
    [137, 9882],
    [138, 9850],
    [139, 9877],
    [140, 9911],
    [141, 9927],
    [142, 9913],
    [143, 9906],
    [144, 9882],
    [145, 9891],
    [146, 9930],
    [147, 9916]
    ]);

     var options = {
         title: 'Difference in Air Quality Data in Parts Per Million (ppm)',
         curveType: 'function',
         legend: { position: 'bottom'}
     };

     var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

      chart.draw(data, options);
  }
