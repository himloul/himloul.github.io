---
title: Sketches
---

### My personal art hobby
  
In my free time I like to make illustrations and Graphic design! Check out my [illustrations](https://himl.tumblr.com/)

<!-- <center>
<img src="/images/himloul.gif" alt="drawing" width="125"/>
</center> -->

<style>
    #container {
            display: grid;
            grid-gap: 10px;
            grid-template-columns: repeat(3, 1fr);
            margin: auto;
            width: 80%;
            justify-content: center;
        }

    .image-container img {
            border-radius: 8px; /* Slightly rounded corners */
            width: 200px;
            height: 200px;
            object-fit: cover;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25); /* Refined shadow */
            transition: transform 0.3s ease; /* Smooth transition on hover */
        }

    .image-container:hover img {
        transform: scale(1.05); /* Slight zoom on hover */
    }

    .image-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6); /* Darker, semi-transparent background */
        border-radius: 2px; /* Match image border radius */
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        transition: opacity 0.3s ease;
        box-sizing: border-box;
        padding: 10px;
        color: white; /* White text for better contrast */
        text-align: center;
        font-weight: 500;
    }


    .image-container:hover .image-overlay {
        opacity: 1;
    }

    .image-overlay span {
        font-size: 2em; /* Larger, more modern size */
    }
    body {
        /* font-family: "Lucida Console", Monaco, monospace; */
        color: #e0ddd7;
        /* Related to the effect of notepad lines */
        background: linear-gradient(to bottom, rgba(224, 221, 215, 0.4) 1px, transparent 1px),
                    linear-gradient(to right, rgba(224, 221, 215, 0.4) 1px, transparent 1px);
        background-size: 20px 20px; /* Adjust as needed */
        /* background-color: #f7f5eb; /* Light grey background */
    }

    .nav {
        /* background-color: #ffc92966; */
        /* border-bottom: 2px solid #a09d98; */
    }

</style>

<div style="display: grid; grid-gap: 40px; grid-template-columns: repeat(3, 1fr); margin: auto; width: 90%; justify-content: center;">
    <div class="image-container" style="transform: rotate(-5deg); cursor: grab;" >
        <img src="../assets/images/carablanca.jpg" style="border-radius: 8px; width: 200px; height: 200px; object-fit: cover;" ondragstart="return false;">
    </div>
    <div class="image-container" style="transform: rotate(3deg); cursor: grab;">
        <img src="../assets/images/fresh_oranges_himloul.jpg" style="border-radius: 8px; width: 200px; height: 200px; object-fit: cover;" ondragstart="return false;">
    </div>
    <div class="image-container" style="transform: rotate(-2deg); cursor: grab;">
        <img src="../assets/images/sunset_pxlart_himloul.jpg" style="border-radius: 8px; width: 200px; height: 200px; object-fit: cover;" ondragstart="return false;">
    </div>
</div>

<script src="../assets/js/draggable_images.js"></script>