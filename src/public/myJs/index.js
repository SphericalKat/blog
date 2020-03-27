const inputs = document.querySelectorAll('.input-div');

        function focusFunc(){
            let parent = this.parentNode.parentNode;
            parent.classList.add('focus');
        }
        inputs.forEach(input => {
            input.addEventListner('focus',focusFunc);
        })