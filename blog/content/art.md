---
title: "Sketches"
# Description: "NLP Engineer, Data scientist"
layout: "resume"
ShowShareButtons: false
ShowFullTextinRSS: false
ShowReadingTime: false
ShowWordCount: false
disableShare: true
ShowBreadCrumbs: false
comments: false
hidemeta: true
---

### My personal art hobby
  
In my free time I like to make illustrations and Graphic design! Check out my [illustrations](https://himl.tumblr.com/)  

{{< rawhtml >}}

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
            border-radius: 0px;
            width: 200px;
            height: 200px;
            object-fit: cover;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.40);
        }

    .image-overlay {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 86%;
        background-color: rgba(255, 255, 255, 0.5);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
        border-radius: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        transition: opacity 0.3s;
        box-sizing: border-box;
        padding: 20px;
    }


    .image-container:hover .image-overlay {
        opacity: 1;
    }

    .image-overlay span {
        font-size: 36px;
        /* background-color: rgba(255, 255, 255, 0.5);
        padding: 10px;
        border-radius: 0px; */
    }
    body {
        /* font-family: "Lucida Console", Monaco, monospace; */
        color: #e0ddd7;
        /* Related to the effect of notepad lines */
        background: linear-gradient(to bottom, rgba(224, 221, 215, 0.5) 1px, transparent 1px),
                    linear-gradient(to right, rgba(224, 221, 215, 0.5) 1px, transparent 1px);
        background-size: 20px 20px; /* Adjust as needed */
        background-color: #f7f5eb; /* Light grey background */
    }

    .nav {
        /* background-color: #ffc92966; */
        /* border-bottom: 2px solid #a09d98; */
    }

</style>

<div style="display: grid; grid-gap: 40px; grid-template-columns: repeat(3, 1fr); margin: auto; width: 90%; justify-content: center;">
    <div class="image-container" style="transform: rotate(-5deg); cursor: grab;" >
        <img src="/images/carablanca.jpg" style="border-radius: 0px; width: 200px; height: 200px; object-fit: cover;" ondragstart="return false;">
        <div class="image-overlay">
            <span>🏕️</span>
        </div>
    </div>
    <div class="image-container" style="transform: rotate(3deg); cursor: grab;">
        <img src="/images/fresh_oranges_himloul.jpg" style="border-radius: 0px; width: 200px; height: 200px; object-fit: cover;" ondragstart="return false;">
        <div class="image-overlay">
            <span>🍊</span>
        </div>
    </div>
    <div class="image-container" style="transform: rotate(-2deg); cursor: grab;">
        <img src="/images/sunset_pxlart_himloul.jpg" style="border-radius: 0px; width: 200px; height: 200px; object-fit: cover;" ondragstart="return false;">
        <div class="image-overlay">
            <span>🎮</span>
        </div>
    </div>
</div>

<script>
    class DraggableImage {
            constructor(container) {
                this.container = container;
                this.active = false;
                this.currentX = 0;
                this.currentY = 0;
                this.initialX = 0;
                this.initialY = 0;
                this.xOffset = 0;
                this.yOffset = 0;
                this.initialRotation = parseFloat(container.style.transform.match(/-?\d+(\.\d+)?/));

                this.container.addEventListener("mousedown", this.dragStart.bind(this));
                this.container.addEventListener("touchstart", this.dragStart.bind(this), { passive: false });
                document.addEventListener("mouseup", this.dragEnd.bind(this));
                document.addEventListener("touchend", this.dragEnd.bind(this));
                document.addEventListener("mousemove", this.drag.bind(this));
                document.addEventListener("touchmove", this.drag.bind(this), { passive: false });
                this.dragItem = null;
            }

            dragStart(e) {
                e = e || window.event;
                if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
                    return;  // Don't drag if the click is on a link or button
                }
                e.preventDefault();
                this.dragItem = this.container;
                if (e.type === "touchstart") {
                    this.initialX = e.touches[0].clientX - this.xOffset;
                    this.initialY = e.touches[0].clientY - this.yOffset;
                } else {
                    this.initialX = e.clientX - this.xOffset;
                    this.initialY = e.clientY - this.yOffset;
                }
                this.active = true;
                this.container.style.cursor = 'grabbing'; // Change the cursor
            }

            dragEnd(e) {
                this.active = false;
                if(this.dragItem){
                    this.dragItem.style.cursor = 'grab';
                }
                this.dragItem = null;

            }

            drag(e) {
                e = e || window.event;
                e.preventDefault();
                if (this.active && this.dragItem) {
                    if (e.type === "touchmove") {
                        this.currentX = e.touches[0].clientX - this.initialX;
                        this.currentY = e.touches[0].clientY - this.initialY;
                    } else {
                        this.currentX = e.clientX - this.initialX;
                        this.currentY = e.clientY - this.initialY;
                    }
                    this.xOffset = this.currentX;
                    this.yOffset = this.currentY;
                    this.setTranslate(this.currentX, this.currentY, this.dragItem);
                }
            }

            setTranslate(xPos, yPos, el) {
                const rotation = this.initialRotation * (Math.PI / 180); // Convert degrees to radians
                const newX = xPos * Math.cos(rotation) + yPos * Math.sin(rotation);
                const newY = -xPos * Math.sin(rotation) + yPos * Math.cos(rotation);
                el.style.transform = `translate3d(${newX}px, ${newY}px, 0) rotate(${this.initialRotation}deg)`;
            }
        }

        const imageContainers = document.querySelectorAll(".image-container");
        imageContainers.forEach((container) => new DraggableImage(container));
</script>


{{< /rawhtml >}}