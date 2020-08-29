let socket = io();
const boxSize = 50;
const width = 10;
const height = 10;
const icon = ["X", "O", "Δ"];
const color = ["A34C4C", "42C0EF", "F2D108"];
const div = d3
    .select("body")
    .append("div")
    .attr("id", "content")
    .style("text-align", "center");
const svg = div.append("svg").attr("width", 500).attr("height", 600);

// draw board and send turn
for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
        // draw each chess field
        const box = svg
            .append("rect")
            .attr("x", i * boxSize)
            .attr("y", j * boxSize)
            .attr("width", boxSize)
            .attr("height", boxSize)
            .attr("id", "b" + i + j)
            .style("stroke", "black")
            .on("click", function () {
                let selected = d3.select(this);
                socket.emit("send-turn", {
                    x: selected.attr("x"),
                    y: selected.attr("y"),
                });
            });

        box.attr("fill", "white");
    }
}

// socket and event
socket.on("list-user", function (data) {
    $("#boxContent").html("");
    data.forEach(function (i) {
        $("#boxContent").append("<div class='user'>" + i + "</div>");
    });
});

$(document).ready(function () {
    //when user register to join game
    $("#btnRegister").click(function () {
        socket.emit("register-user", $("#txtUsername").val());
    });
});

// display win/lose game
socket.on("result-game", function (data) {
    const lost = svg
        .append("text")
        .attr("x", 200)
        .attr("y", 200)
        .text(data)
        .style("fill", "black")
        .style("font-size", "30px");
});

// disable click

socket.on("disable-click", function () {
    $("#content").css("pointer-events", "none");
});

// get data from server

socket.on("data", function (data) {
    // console.log("gia tri ma client nhan tu server:");
    // console.log("mang nguoi choi :" + data.ArrId);
    // console.log("Id:" + data.name);
    // console.log("nguoi cho thu:", data.userId);
    // console.log("Ma tran cac nuoc di:", data.Board);
    // console.log("Gia tri cua nguoi choi:" + data.value);
    // console.log("x_client:" + data.x);
    // console.log("y_client:" + data.y);

    svg.append("text")
        .attr("x", parseInt(data.x))
        .attr("y", parseInt(data.y))
        .attr("text-anchor", "middle")
        .attr("dx", boxSize / 2)
        .attr("dy", boxSize / 2 + 8)
        .text(icon[data.userId])
        .style("font-weight", "bold")
        .style("font-size", "30px")
        .style("fill", color[data.userId]);
});
