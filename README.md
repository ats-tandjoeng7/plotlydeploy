# Plotly Deploy
This project focused on the application of web designing and visualization software, such as HTML, CSS, JavaScript, and Plotly, and how we leveraged their useful functions for performing in-depth data analytics and visualizations.

## Table of Contents
- [Overview of Project](#overview-of-project)
  - [Resources](#resources)
  - [Challenge Overview](#challenge-overview)
  - [GitHub Repo Branches](#github-repo-branches)
- [Web Designing and Analysis Results](#web-designing-and-analysis-results)
  - [Customization and Optimization](#customization-and-optimization)
  - [Deliverable 1](#deliverable-1)
  - [Deliverable 2](#deliverable-2)
  - [Deliverable 3](#deliverable-3)
  - [Deliverable 4](#deliverable-4)
- [Summary](#summary)
- [References](#references)

## Overview of Project
This project and Module 13 assignment focused on cultivating knowledge and skills of web designing and data analysis through some rigorous exercises for further understanding the concepts of integrating HyperText Markup Language (HTML), Cascading Style Sheet (CSS), JavaScript (JS), and Plotly (open source graphing libraries for JS) programs for building a dynamic and interactive webpage with optimized content, functionality, usability, and user experience. We then applied our knowledge and core skills to deploy our webpage, perform in-depth analysis of Belly Button Biodiversity databases, and ultimately allow users to easily visualize some useful dashboards and filter a list of data.

### Resources
- Source code: charts.js, add_p.js, samples.json, style.css, index.html
- Image file: jpg/png files
- Software: [Plotly JavaScript Open Source Graphing Library](https://plotly.com/javascript/), [HTML: HyperText Markup Language](https://developer.mozilla.org/en-US/docs/Web/HTML), [CSS: Cascading Style Sheet](https://developer.mozilla.org/en-US/docs/Web/CSS), [JavaScript reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference), [Chrome DevTools](https://developer.chrome.com/docs/devtools/overview/), [Data-Driven Documents (D3)](https://d3js.org/), [GitHub](https://github.com/).

### Challenge Overview
Outline of our deliverables and a written report for presenting our results and analysis summary:

- ☑️ Deliverable 1: Create a Horizontal Bar Chart.
- ☑️ Deliverable 2: Create a Bubble Chart.
- ☑️ Deliverable 3: Create a Gauge Chart.
- ☑️ Deliverable 4: Customize the Dashboard.
- ☑️ Summary: A summary on the Belly Button Biodiversity dashboard and integrated customizations (this ["README.md"](./README.md)).

### GitHub Repo Branches
All deliverables in Module 13 challenge are committed in this GitHub repo as outlined below.  

main branch  
|&rarr; [./README.md](./README.md)  
|&rarr; [./index.html](./index.html)  
|&rarr; ./static/  
  &nbsp; |&rarr; ./static/js/  
    &emsp; |&rarr; [./static/js/charts.js](./static/js/charts.js)  
    &emsp; |&rarr; [./static/js/add_p.js](./static/js/add_p.js)  
    &emsp; |&rarr; [./static/js/samples.json](./static/js/samples.json)  
  &nbsp; |&rarr; ./static/css/  
    &emsp; |&rarr; [./static/css/style.css](./static/css/style.css)  
  &nbsp; |&rarr; ./static/images/  
    &emsp; |&rarr; [./static/images/bubbleplot_id946.jpg](./static/images/bubbleplot_id946.jpg)  
    &emsp; |&rarr; [./static/images/plotlydeploy_webpage.png](./static/images/plotlydeploy_webpage.png)  
    &emsp; |&rarr; [./static/images/barplot_id940.png](./static/images/barplot_id940.png)  
    &emsp; |&rarr; [./static/images/gaugeplot_id940.png](./static/images/gaugeplot_id940.png)  
    &emsp; |&rarr; [./static/images/bubbleplot_id940.png](./static/images/bubbleplot_id940.png)  

## Web Designing and Analysis Results
By using several web designing tools, such as HTML, CSS, JavaScript, Plotly, and Chrome DevTools, we were able to design and integrate a visualization dashboard that lets users explore the Belly Button Biodiversity databases. We have incorporated some best practices when designing a website, which include enhanced user-friendly filtering functionality, good usability, user experience, and mobile-responsive layout. We then deployed our refactored webpage, performed test runs, and analyzed the results. Our webpage allows volunteers and users to easily visualize some useful dashboards, filter a list of data, and extract certain information based on volunteer's ID.

### Customization and Optimization
The refactored source code and screenshots of our webpage can be referred in [index.html](./index.html), [charts.js](./static/js/charts.js), [add_p.js](./static/js/add_p.js), and Fig. 1&ndash;4. We applied customized CSS styles by directly linked to [style.css](./static/css/style.css) in addition to `bootstrap.min.css` and `d3.js` for enabling several useful features, better user experience, and dynamic event listeners, for instance:

- User experience was enhanced by adding a background image that can be temporarily hidden, eye-friendly background colors and recommended color contrasts.
- Descriptive information about the project and each dashboard on the webpage. I wrote [add_p.js](./static/js/add_p.js) script to accomplish this instead of hard coding into the static html elements.
- Mobile-responsive layout and design is integrated. The graphs that we generated by using Plotly JavaScript were also reconstructed for both desktop and mobile device users, and I also added a "Return to Top" icon for mobile device users.
- User-friendly navigation, tap/mouse hover, and highlighting features. The improved features allowed volunteers and users to easily jump to a certain part of the webpage and notice which webpage content section they are currently on.
- Title attributes were added to display "Belly Button Biodiversity Home" and brief link information when users hover their mouse over each link on the navigation bar. This could be useful when users use the keyboard \<F11\> key to view our webpage in full screen mode.
- Link to the completed webpage: <a href="https://ats-tandjoeng7.github.io/plotlydeploy/" target="_blank">Belly Button Biodiversity webpage</a>.

Fig. 1 outlined the initial design and layout of our webpage, which consisted of a horizontal navigation bar accompanied with a header section with descriptive information about the Belly Button Biodiversity Dashboard, webpage content section including the ID No. Selector, and a simple footer at the bottom of the page. The navigation bar could be fixed at the top or at the bottom of our webpage for enhancing browsing experience by allowing users to efficiently jump from one chart to another.

![Fig. 1](./static/images/plotlydeploy_webpage.png 'Fig. 1 Belly Button Biodiversity homepage')\
**Fig. 1 Belly Button Biodiversity homepage**

### Deliverable 1
The interactive horizontal bar chart dashboard sorted according to the requirements is shown in Fig. 2.

![Fig. 2](./static/images/barplot_id940.png 'Fig. 2 Plotly Deploy Bar Chart dashboard')\
**Fig. 2 Plotly Deploy Bar Chart dashboard**

### Deliverable 2
The interactive indicator gauge dashboard is shown in Fig. 3.

![Fig. 3](./static/images/gaugeplot_id940.png 'Fig. 3 Plotly Deploy Indicator Gauge dashboard')\
**Fig. 3 Plotly Deploy Indicator Gauge dashboard**

### Deliverable 3
The interactive bubble plot dashboard is shown in Fig. 4.

![Fig. 4](./static/images/bubbleplot_id940.png 'Fig. 4 Plotly Deploy Bubble Plot dashboard')\
**Fig. 4 Plotly Deploy Bubble Plot dashboard**

### Deliverable 4
The customized webpage has all the required specifications and added enhancement features embedded as we have thoroughly discussed in the [Customization and Optimization](#customization-and-optimization) section.

## Summary
All deliverables have been designed and developed according to the assignment requirements, including well optimized functionality, better usability, mobile-responsive design, deployment and validation of some improvement features, and effortless analysis interface. I hope users will be able to experience the enhanced features when using our <a href="https://ats-tandjoeng7.github.io/plotlydeploy/" target="_blank">Belly Button Biodiversity webpage</a> and leave the webpage with good impression.

## References
[Plotly JavaScript Open Source Graphing Library](https://plotly.com/javascript/)\
[HTML: HyperText Markup Language](https://developer.mozilla.org/en-US/docs/Web/HTML)\
[CSS: Cascading Style Sheet](https://developer.mozilla.org/en-US/docs/Web/CSS)\
[JavaScript reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)\
[Chrome DevTools](https://developer.chrome.com/docs/devtools/overview/)\
[Data-Driven Documents (D3)](https://d3js.org/)\
[d3-drag](https://github.com/d3/d3-drag/blob/main/README.md#drag_on)\
[Colorscales in JavaScript](https://plotly.com/javascript/colorscales/#earth-colorscale)\
[Responsive / Fluid Layouts in JavaScript](https://plotly.com/javascript/responsive-fluid-layout/)
