// Create sample data
var sampleData = [0, 1, 2, 3, 4, 5, 6, 7, 8];
// Create a chart
var myConfig = {
    type: "line",
    guide: {},
    series: [{
        values: sampleData
    }]
};
// Render Your Chart
zingchart.render({
    id: "myChart",
    data: myConfig
});
// Grab range slider from the DOM
var slider = document.getElementById("mySlider");
// Grab the output span from the DOM
var output = document.getElementById("output");
// Assign the slider value to the output span's HTML value
output.innerHTML = slider.value;
// Add an event listener to our range slider
slider.addEventListener("input", function() {
    output.innerHTML = event.target.value;
    var guideValue = event.target.value;
    if (guideValue < 9) {
        zingchart.exec("myChart", "setguide", {
            graphid: 0,
            keyvalue: guideValue
        });
    }
});



const rect = document.querySelector(".rect");

speedInput.addEventListener("change", changeSpeed);
rect.style.animationDuration = `${5 / speedInput.value}s`;

function changeSpeed() {
    speed = 5 / speedInput.value;
    rect.style.animationDuration = `${speed}s`;
}