const roomContainer = document.getElementById("room-container");

// create room
socket.on("room-created", (room) => {
    const roomElement = document.createElement("div");
    roomElement.innerText = room;
    const roomLink = document.createElement("a");
    roomLink.href = `/room/${room}`;
    roomLink.innerText = "join";
    roomContainer.append(roomElement);
    roomContainer.append(roomLink);
});
