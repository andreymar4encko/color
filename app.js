"use strict";

var colorPicker = new iro.ColorPicker(".colorPicker", {
    width: 280,
    color: "rgb(255, 0, 0)",
    borderWidth: 1,
    borderColor: "#fff",
    layout: [
        {
            component: iro.ui.Wheel,
        },
        {
            component: iro.ui.Slider,
            options: {
                sliderType: 'value'
            }
        },
        {
            component: iro.ui.Slider,
            options: {
                sliderType: 'alpha'
            }
        },
    ]
});



// handle click events on the swatch

var swatchGrid = document.getElementById('swatch-grid');
swatchGrid.addEventListener('click', function (e) {
    var clickTarget = e.target;

    if (clickTarget.dataset.color) {

        colorPicker.color.set(clickTarget.dataset.color);
    }
});

var swatchGrid1 = document.getElementById('swatch-grid1');
swatchGrid1.addEventListener('click', function (e) {
    var clickTarget = e.target;

    if (clickTarget.dataset.color) {

        colorPicker.color.set(clickTarget.dataset.color);
    }
});

var values = document.getElementById("values");
colorPicker.on(["color:init", "color:change"], function (color) {
    values.innerHTML = ["hex: " + color.hexString, "rgb: " + color.rgbString, "hsl: " + color.hslString].join("<br>");
});

let toggle = document.getElementById('toggle')
let body = document.querySelector('body')
let js = document.querySelector('.js')

toggle.addEventListener('change', () => {
    body.classList.toggle('white')
    js.classList.toggle('red')
})