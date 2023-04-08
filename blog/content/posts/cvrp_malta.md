---
title: "Capacitated VRP of taxis service"
author: "Hamza imloul"
date: 2021-06-14T20:45:56Z
ShowToc: true
# katex: true
math: true
tags: ["Data science", "Analytics", "Portfolio", "Optimization"]
---

## Introduction

The Capacitated Vehicle Routing Problem (CVRP) is a variant of the well-known Vehicle Routing Problem (VRP) in which each vehicle has a limited capacity and the aim is to find the optimal routes for a fleet of vehicles to deliver goods to a set of customers while minimizing the total distance traveled.
  
<p align="center">
<img src="/images/vrp_malta.jpg" style="border-radius: 5px; width:100%;">
</p>  
  
## Modelling the problem

In the context of a taxi service, the CVRP can be used to determine the most efficient routes for taxis to pick up and drop off passengers while taking into account the capacity of each taxi (i.e., the number of passengers it can carry at a time). This is particularly useful in situations where there are a large number of passenger requests and a limited number of taxis available.

## Dataset
The datasets for this analysis include information about passengers, taxis, and the depot. The coordinates for all pickup and delivery locations are also included in the datasets.

## Approach

There are several approaches to solving the CVRP, including exact algorithms such as integer programming and heuristics such as genetic algorithms and simulated annealing. The choice of algorithm will depend on the specific requirements of the problem, including the size of the data set and the desired level of accuracy.

In this article, we will use the Hungarian algorithm, an optimization algorithm, to assign a set of n missions to n available trucks.
  
$E_{t}$	: set of available Taxis.  
$E_{p}$	: set of available Passengers.  
$E_s$	: set of sources of missions.  
$E_d$	: set of destinations of missions.  

## Cost matrix
  
Calculated the distance **matrix**, which is the cost matrix to impute in our model.

## Optimization model

Capacitated VRP, after searching for the Python modules helping to solve this combinatorial optimization problem, Found that ORtools propose an end-to-end algorithm, with a feasable solution in a considerable computational time.  

## Solution

After finding the optimal routes using the CVRP, they are saved to a list or array for visualization on a map.    

One key consideration when applying the CVRP to a taxi service is the trade-off between efficiency and customer satisfaction. While it may be tempting to find the shortest possible routes for the taxis, this may not always result in the best experience for passengers. For example, a taxi may need to take a longer route to pick up a passenger in order to minimize the wait time for that passenger.

## Conclusion

In conclusion, the CVRP is a useful tool for optimizing the routing of taxis in a service, but it is important to consider both efficiency and customer satisfaction when applying it in practice.
