const Chatroomlist = () => {
    const [rooms, setRooms] = useState([]);
    const [newRoomName, setNewRoomName] = useState("");
    const [currentRoom, setCurrentRoom] = useState(null);
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");

    const socket = io("http://localhost:3000");

    useEffect(() => {
        socket.on("roomList", (roomList) => {
            setRooms(roomList);
        });

        socket.on("message", (newMessage) => {
            if (newMessage.room === currentRoom) {
                setMessages((messages) => [...messages, newMessage]);
            }
        });
    }, [currentRoom]);

    const joinRoom = (room) => {
        socket.emit("joinRoom", room);
        setCurrentRoom(room);
        setMessages([]);
    };

    const sendMessage = (e) => {
        e.preventDefault();
        if (message) {
            const newMessage = {
                room: currentRoom,
                message,
            };
            socket.emit("sendMessage", newMessage);
            setMessage("");
        }
    };

    const createRoom = () => {
        socket.emit("createRoom", newRoomName);
        setNewRoomName("");
    };

    return (
        <div className="chat-room-list">
            <div className="room-list">
                {rooms.map((room) => (
                    <div key={room} onClick={() => joinRoom(room)}>
                        {room}
                    </div>
                ))}
            </div>
            <div className="chat-room">
                {currentRoom ? (
                    <>
                        <h2>Room: {currentRoom}</h2>
                        <div className="chat-messages">
                            {messages.map((message, i) => (
                                <div key={i}>
                                    <strong>{message.user}: </strong> {message.message}
                                </div>
                            ))}
                        </div>
                        <form onSubmit={sendMessage}>
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            <button type="submit">Send</button>
                        </form>
                    </>
                ) : (
                    <div>Select a room to join</div>
                )}
                <hr />
                <div>
                    <input
                        type="text"
                        placeholder="New room name"
                        value={newRoomName}
                        onChange={(e) => setNewRoomName(e.target.value)}
                    />
                    <button onClick={createRoom}>Create Room</button>
                </div>
            </div>
        </div>
    );
};

export default Chatroomlist;
