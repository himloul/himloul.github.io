---
title: "Color-Coded Map Shows Research Center Members' Locations"
author: "Hamza imloul"
date: 2021-09-22T20:45:56Z
ShowToc: true
# katex: true
math: true
tags: ["Data science", "Analytics", "Portfolio"]
---

The purpose of this technical report is to outline the process of creating a color-coded map that shows the geographic locations of members affiliated with a research center. The client required a software solution that would allow them to visually represent the distribution of members across various geographic locations.

## Context

The software was designed to allow for the use of different types of users/layers, which required the creation of different colored clusters to reflect their affiliations. However, some members were affiliated with the same universities, resulting in more than one user cluster being present in the same geographic location. To overcome this issue, the `overlapping-marker-spiderfier` JS library with `leaflet` were used, which allowed for the creation of clusters that expand outward like a spider web, clearly showing all the members in the same location.

Additionally, a legend was added to the map to make it easy to understand the different colors and their corresponding affiliations. To make the map easily accessible, it was made downloadable in a self-contained html page, which was then embedded into the website.

## Data Workflow 

![flow_chart_apps](/images/bmsc.excalidraw.png)  

## Result

The resulting map provided an easy-to-understand visual representation of the geographic distribution of members affiliated with the research center. The `OverlappingMarkerSpiderfier` feature in leaflet allowed for the clear visualization of multiple clusters in the same geographic location. The legend provided a simple way to understand the different affiliations represented by the color-coded clusters. sThe downloadable map made it easy for users to view the map outside of the website.

{{< include-html "map_bmsc.html" >}}

[Link to the map.](https://bamfieldmsc.com/research-overview)
{{< tweet user="BamfieldMSC" id="1442878031375204354" >}}