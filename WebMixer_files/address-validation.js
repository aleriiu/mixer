var addressInputs = [...document.querySelectorAll('.mix__bar__pages .inputs__wrap .input__wrap input:not(.amount__selector)')]; var addressInputForms = [...document.querySelectorAll('.mix__bar__pages .inputs__wrap')]; var mixSpecs = [...document.querySelectorAll('.mix__bar__pages .mix__specs')]; addressInputs.forEach(element => {
    element.addEventListener('input', function () {
        let input = this.value.trim(); if (input.length >= 26) {
            if (this.nextElementSibling != null) { this.nextElementSibling.disabled = false; } else if (this.parentElement.nextElementSibling.tagName == 'BUTTON') { this.parentElement.nextElementSibling.disabled = false; }
            this.style.border = 'none';
        } else {
            this.style.border = '2px solid red'; if (this.nextElementSibling != null) { this.nextElementSibling.disabled = true; }
            else if (this.parentElement.nextElementSibling.tagName == 'BUTTON') { this.parentElement.nextElementSibling.disabled = true; }
        }
    });
});