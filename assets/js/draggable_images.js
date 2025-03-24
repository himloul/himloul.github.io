document.addEventListener('DOMContentLoaded', function() {
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
});
