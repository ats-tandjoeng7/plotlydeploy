// UCB-VIRT-DATA-ANALYTICS-2022, Parto T.

// link to samples.json file 
var url = 'static/js/samples.json';

function init() {
// Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

// Use the list of sample names to populate the select options
  d3.json(url).then((data) => {
    var sampleNames = data.names;

    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    var firstSample = sampleNames[0];
    console.log(firstSample);
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Initialize the dashboard
init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
}

// Demographics Panel 
function buildMetadata(sample) {
  d3.json(url).then((data) => {
    var metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    // Use d3 to select the panel with id of `#sample-metadata`
    var PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(result).forEach(([id, val]) => {
      PANEL.append("h6").text(id.toUpperCase() + ': ' + val);
    });
  });
}

// 1. Create the buildCharts function.
function buildCharts(sample) {
  // 2. Use d3.json to load and retrieve the samples.json file 
  d3.json(url).then((data) => {
    // 3. Create a variable that holds the samples array. 
    // 4. Create a variable that filters the samples for the object with the desired sample number.
    let sampleArray = data.samples.filter(sampleObj => sampleObj.id == sample);

    //  5. Create a variable that holds the first sample in the array.
    let sample0 = sampleArray[0];
    let result = data.metadata.filter(sampleObj => sampleObj.id == sample)[0];

    // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
    let otuIds = sample0.otu_ids;
    let otuLabels = sample0.otu_labels;
    let sampleVals = sample0.sample_values;
    let wfreq = result.wfreq;
    // code to filter null value from wfreq
    console.log(sample0, result, wfreq);

    // 7. Create the yticks for the bar chart.
    // Hint: Get the the top 10 otu_ids and map them in descending order  
    //  so the otu_ids with the most bacteria are last. 
    let topx = 10; // currently limit otu_ids to top10
    var yticks = otuIds.slice(0, topx).map(val => 'OTU ' + val).reverse();
    topxLabels = otuLabels.slice(0, topx).map(val => val).reverse();
    topxVals = sampleVals.slice(0, topx).map(val => val).reverse();
    console.log(typeof(topxVals), typeof(yticks), typeof(topxLabels));
//    console.log(topxVals, yticks, topxLabels);

    // 8. Create the trace for the bar chart. 
    var barData = [{
      x: topxVals,
      y: yticks,
      text: topxLabels,
      type: 'bar',
      orientation: 'h'
    }];
    // 9. Create the layout for the bar chart. 
    var barLayout = {
      hovermode: 'closest',
      title: '<b>Top 10 Bacteria Cultures Found</b>'
    };
    // 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot('bar', barData, barLayout);

    // 1. Create the trace for the bubble chart.
    var bubbleData = [{
      x: otuIds,
      y: sampleVals,
      text: otuLabels,
      mode: 'markers',
      marker: {size: sampleVals, color: otuIds, colorscale: 'Earth'}
    }];
    // 2. Create the layout for the bubble chart.
    var bubbleLayout = {
      hovermode: 'closest',
      title: '<b>Bacteria Cultures per Sample</b>',
      xaxis: {title: 'OTU ID'}
    };
    // 3. Use Plotly to plot the data with the layout.
    Plotly.newPlot('bubble', bubbleData, bubbleLayout);
    
    // 4. Create the trace for the gauge chart.
    var gaugeData = [{
      type: 'indicator',
      mode: 'gauge+number',
      title: '<b>Belly Button Washing Frequency</b><br>Scrubs per Week',
      value: wfreq,
//      number: { font: {size: 96} },
      gauge: {
        axis: { range: [null, 10], tickwidth: 1, tickcolor: "gray" },
        bar: { color: "black" },
        bgcolor: "white",
        borderwidth: 1,
        bordercolor: "gray",
        steps: [
          { range: [0, 2], color: "red" },
          { range: [2, 4], color: "orange" },
          { range: [4, 6], color: "yellow" },
          { range: [6, 8], color: "yellowgreen" },
          { range: [8, 10], color: "green" }
        ],
      }
    }];
    // 5. Create the layout for the gauge chart.
    var gaugeLayout = { 
      width: 458, height: 450, margin: { l: 25, r: 25, t: 0, b: 0 }
    };
    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot('gauge', gaugeData, gaugeLayout);
  });
}
