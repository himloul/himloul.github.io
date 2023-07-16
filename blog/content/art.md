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
            border-radius: 10px;
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
        border-radius: 10px;
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
        border-radius: 10px; */
    }
    body {
        /* font-family: "Lucida Console", Monaco, monospace; */
        color: #035d91;
        background-image: url("/images/notepad.svg");
        background-repeat: repeat;
    }

    .nav {
        /* background-color: #ffc92966; */
        border-bottom: 2px solid #9687ff;
    }

</style>

<div style="display: grid; grid-gap: 10px; grid-template-columns: repeat(3, 1fr); margin: auto; width: 80%; justify-content: center;">
    <div class="image-container" style="transform: rotate(-5deg);" onmousedown="dragStart(event)" ontouchstart="dragStart(event)">
        <img src="/images/carablanca.jpg" style="border-radius: 10px; width: 200px; height: 200px; object-fit: cover;" ondragstart="return false;">
        <div class="image-overlay">
            <span>🏕️</span>
        </div>
    </div>
    <div class="image-container" style="transform: rotate(3deg);" onmousedown="dragStart(event)" ontouchstart="dragStart(event)">
        <img src="/images/fresh_oranges_himloul.jpg" style="border-radius: 10px; width: 200px; height: 200px; object-fit: cover;" ondragstart="return false;">
        <div class="image-overlay">
            <span>🍊</span>
        </div>
    </div>
    <div class="image-container" style="transform: rotate(-2deg);" onmousedown="dragStart(event)" ontouchstart="dragStart(event)">
        <img src="/images/sunset_pxlart_himloul.jpg" style="border-radius: 10px; width: 200px; height: 200px; object-fit: cover;" ondragstart="return false;">
        <div class="image-overlay">
            <span>🎮</span>
        </div>
    </div>
</div>

<script>
        class DraggableImage {
            constructor(container) {
                this.container = container;
                this.dragItem = null;
                this.active = false;
                this.currentX = 0;
                this.currentY = 0;
                this.initialX = 0;
                this.initialY = 0;
                this.xOffset = 0;
                this.yOffset = 0;
                this.initialRotation = parseFloat(container.style.transform.match(/-?\d+(\.\d+)?/));

                this.container.addEventListener("mousedown", (e) => this.dragStart(e));
                this.container.addEventListener("touchstart", (e) => this.dragStart(e), { passive: false });
                document.addEventListener("mouseup", (e) => this.dragEnd(e));
                document.addEventListener("touchend", (e) => this.dragEnd(e));
                document.addEventListener("mousemove", (e) => this.drag(e));
                document.addEventListener("touchmove", (e) => this.drag(e), { passive: false });
            }

            dragStart(e) {
                e = e || window.event;
                e.preventDefault();
                if (e.type === "touchstart") {
                    this.initialX = e.touches[0].clientX - this.xOffset;
                    this.initialY = e.touches[0].clientY - this.yOffset;
                } else {
                    this.initialX = e.clientX - this.xOffset;
                    this.initialY = e.clientY - this.yOffset;
                }
                this.active = true;
                this.dragItem = this.container;
            }

            dragEnd(e) {
                this.active = false;
            }

            drag(e) {
                e = e || window.event;
                e.preventDefault();
                if (this.active) {
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

<!--
[Collect prints](#link){: .btn .btn--success .btn--large .align-center}  

<div style="text-align: center">
  <div class="flex-container" style="vertical-align: top">
    <img src="/images/fresh_oranges_himloul.jpg" width = "150"/>
    <img src="/images/sunset_pxlart_himloul.jpg" width = "150"/>
    <img src="/images/carablanca.jpg" width = "150"/>
  </div>
</div>
-->
  
<!--
  <div id="pixlee_container"></div><script type="text/javascript">window.PixleeAsyncInit = function() {Pixlee.init({apiKey:'2YaOkhxSryTRbAkzrJcb'});Pixlee.addSimpleWidget({widgetId:'34605'});};</script><script src="//instafeed.assets.pxlecdn.com/assets/pixlee_widget_1_0_0.js"></script>
-->