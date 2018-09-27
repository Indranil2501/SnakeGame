(function(){
    const CANVAS_BORDER_COLOR = "black";
    const CANVAS_BACKGROUND_COLOR = "white";

    var gameCanvas = document.getElementById("gameCanvas");

    var ctx = gameCanvas.getContext("2d");

    ctx.fillStyle = CANVAS_BACKGROUND_COLOR;
    ctx.strokestyle = CANVAS_BORDER_COLOR;

    ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
    ctx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);
})();