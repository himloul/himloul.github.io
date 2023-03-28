---
title: "Mobility Analytics using R"
author: "Hamza imloul"
date: 2020-10-13T20:14:00Z
ShowToc: true
tags: ["Data science", "Analytics", "Portfolio"]
---

Hi, In this technical blog, we will explore the use of R for fleet mobility analytics. This case study is based on a project that was undertaken for a transportation company with a fleet of 102 trucks and 91 drivers. The objective of the project was to develop a real-time tracking tool for the moving resources. 

R was chosen as the programming language for this project because of its versatility and power as an end-to-end solution. The resulting application is web-based, allowing authenticated users to visually control the moving assets of the company. It is intended to reduce the time required for requests, increase the reliability of communication, and provide alerts in a visual format.  

<p align="center">
<img src="/images/img1-min.png" width="500px"/>
</p>  

## Context  
The process of developing the application began by understanding the business needs and workflow of the company, as well as the challenges faced by the users. The data was then prepared and valuable datasets were identified. R Shiny was used to develop the web-based application, which was connected to the APIs of Canbus to customize the experience. The application was designed to be easy to use and interactive, and to automate the process of data collection, manipulation, and visualization.  

## Business case
Before developing a fleet management model, it is important to understand the business objectives and how the company expects to use and benefit from the model. To effectively meet the needs of all stakeholders, including dispatchers, operators, and management, it is important to understand their expectations and challenges. These individuals use the fleet management platform on a daily basis and collaborate with many drivers and clients, so it is important that the platform is user-friendly and meets their specific needs to avoid unnecessary stress.  

## Questions & needs  
Some of the key objectives of the fleet management system include:

- Organizing the fleet and improving its overall efficiency
- Tracking the performance of the fleet, including metrics such as fuel consumption and maintenance needs
- Identifying and reducing waste in the transportation process, such as unnecessary vehicle idle time and inefficient routes.

## Action  
To develop the fleet management solution, the following steps were taken:

- Gathered input from stakeholders to understand their challenges and needs
- Researched the best features and techniques to include in the solution
- Used R Shiny to develop a web-based application, connecting with the APIs of Canbus to customize the experience
- Prepared and identified valuable datasets
- Studied the business workflow to ensure that the solution would be well-suited to the needs of the users
- Designed the system to be easy to use and interactive
- Automated the process of data collection, manipulation, and visualization
- Deployed the solution as a web-based application.

### Data preparation
To prepare the data for the fleet management solution, the following steps were taken:

- Defined points of interest using latitude and longitude coordinates
- Created geofencing zones to define specific areas of interest
- Organized the master data of resources, including drivers, trucks, trailers, and points of interest.

## Result  
As a result of the fleet management project, the following benefits were achieved:

- The application is web-based, allowing authenticated users to visually control the movement of the company's assets
- The time required for requests was significantly reduced
- Communication and collaboration within the team was improved, increasing the reliability of communication
- Alerts are visualized on the map, eliminating the need for lists.
  
<!--- ![fleetmap](/images/fleetmap_hamzaimloul.png)  --->

Overall, the project was successful in meeting the needs of the transportation company, and the application has helped to improve the efficiency and effectiveness of the fleet management system.  
  
Below, you can interact with the map layers. Please note that the content is in French, but the meanings of the items will be explained.
  
{% include base_path %}
<object data="/files/map.html" type="text/html" width="500px" height="300px">
<embed src="/files/map.html" type="text/html">
<p>This browser does not support PDFs. Please download the PDF to view it: <a href="/files/map.html">Download HTML</a>.</p>
</embed>
</object>  
  
**Four Layers**:   

The following table describes the different layers available on the map:
  
| Layer        | Description |
| ------------ | ----------- |
| `Etat`       | Shows items by type of activity |
| `Flotte`     | Shows clusters of vehicles, useful for seeing how many vehicles are in a particular geographical zone |
| `Inactive`   | Shows inactive units, making it easy to identify anomalies |
| `poi`        | Shows points of interest |
  

