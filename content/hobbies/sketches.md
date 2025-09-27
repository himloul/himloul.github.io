---
title: Sketches
---

### My personal art hobby

In my free time I like to make illustrations and Graphic design! Check out my [illustrations](https://www.behance.net/hamzaim)

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
        border-radius: 1px; /* Slightly rounded corners */
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
        border-radius: 1px; /* Match image border radius */
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
        color: #e0ddd7;
        background: linear-gradient(to bottom, #9bab8520 1px, transparent 1px),
        linear-gradient(to right, #9bab8520 1px, transparent 1px);
        background-size: 20px 20px;
    }

    /* Media query for mobile devices (example: screen width less than 768px) */
    @media (max-width: 768px) {
        #container {
            grid-template-columns: repeat(1, 1fr); /* Single column layout on mobile */
            width: 95%; /* Adjust width for smaller screens */
        }

        .image-container img {
            width: 100%; /* Make images take full width of container */
            height: auto; /* Maintain aspect ratio */
        }

        .image-container {
            margin-bottom: 20px; /* Add some space between images on mobile */
        }

        .image-overlay span {
            font-size: 1.5em; /* Adjust overlay text size for mobile */
        }
    }

    /* Styles for the image container div*/
    .gallery-container {
        display: grid;
        grid-gap: 40px;
        grid-template-columns: repeat(3, 1fr);
        margin: auto;
        width: 90%;
        justify-content: center;
    }

    .gallery-image-container {
        transform: rotate(-5deg);
        cursor: grab;
    }

    /* Media query for mobile devices (example: screen width less than 768px) */
    @media (max-width: 768px) {
        .gallery-container {
            grid-template-columns: repeat(1, 1fr); /* Single column layout on mobile */
            width: 95%; /* Adjust width for smaller screens */
            grid-gap: 20px;
            align-items: center; /* Center items vertically */
            place-items: center;

        }

        .gallery-image-container {
            transform: rotate(0deg);
            align-items: center; /* Center items vertically */
        }
    }

</style>

<!-- Gallery with transform rotate included-->
<div class="gallery-container">
    <div class="gallery-image-container" style="transform: rotate(-5deg); cursor: grab;">
        <img src="../assets/images/carablanca.jpg" style="border-radius: 3px; width: 200px; height: 200px; object-fit: cover;" ondragstart="return false;">
    </div>
    <div class="gallery-image-container" style="transform: rotate(3deg); cursor: grab;">
        <img src="../assets/images/fresh_oranges_himloul.jpg" style="border-radius: 3px; width: 200px; height: 200px; object-fit: cover;" ondragstart="return false;">
    </div>
    <div class="gallery-image-container" style="transform: rotate(-2deg); cursor: grab;">
        <img src="../assets/images/sunset_pxlart_himloul.jpg" style="border-radius: 3px; width: 200px; height: 200px; object-fit: cover;" ondragstart="return false;">
    </div>
</div>

<script src="../assets/js/draggable_images.js"></script>