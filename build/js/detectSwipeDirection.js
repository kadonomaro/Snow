// swipe detection and close navigation by swipe
    /**
     * 
     * @param {array} targetElements
     * @param {array} classNames
     * @param {string} direction
     * @param {boolean} removeClass
     * @param {boolean} logDirection
     */
    export default function detectSwipeDirection(targetElements, classNames, direction, removeClass=false, logDirection = false) {

        let swipe = {
            direction: '',
            initialX: 0,
            initialY: 0,
            currentX: 0,
            currentY: 0,
            diffX: 0,
            diffY: 0,
            startTouch: function (evt) {
                this.initialX = evt.touches[0].clientX;
                this.initialY = evt.touches[0].clientY;
            },
            moveTouch: function (evt) {
                this.currentX = evt.touches[0].clientX;
                this.currentY = evt.touches[0].clientY;
                this.diffX = this.initialX - this.currentX;
                this.diffY = this.initialY - this.currentY;
        
                if (this.diffX > 0) {
                    this.direction = 'left';
                } else if (this.diffX < 0) {
                    this.direction = 'right';
                } else if (this.diffY > 0) {
                    this.direction = 'up';
                } else {
                    this.direction = 'down';
                }

                if (direction == this.direction && !removeClass) {

                    for (let i = 0; i < targetElements.length; i++) {
                        targetElements[i].classList.add(classNames[i]);
                    }

                } else if (direction == this.direction && removeClass) {

                    for (let i = 0; i < targetElements.length; i++) {
                        targetElements[i].classList.remove(classNames[i]);
                    }
                    
                }

                if (logDirection) {
                    console.log(this.direction);
                }
            }
        };

        targetElements[0].addEventListener('touchstart', swipe.startTouch, false);
        targetElements[0].addEventListener('touchmove', swipe.moveTouch, false);
    }