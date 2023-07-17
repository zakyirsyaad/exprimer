import React, { useState } from "react";
import Supportchat from "./supportchat";

const Roomchat = () => {
    const [user, setUser] = useState("");
    const [room, setRoom] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);
    const [showChat, setShowChat] = useState(false);

    const handleJoinRoom = (e) => {
        e.preventDefault();
        if (user && room) {
            setIsAdmin(false);
            setShowChat(true);
        }
    };

    const handleCreateRoom = (e) => {
        e.preventDefault();
        if (user) {
            setIsAdmin(true);
            setShowChat(true);
        }
    };

    return (
        <div>
            {showChat ? (
                <Supportchat user={user} isAdmin={isAdmin} room={room} />
            ) : (
                <div>
                    <h2>Masuk ke Chat Room</h2>
                    <form onSubmit={handleJoinRoom}>
                        <input
                            type="text"
                            placeholder="Nama Anda"
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Nama Room"
                            value={room}
                            onChange={(e) => setRoom(e.target.value)}
                        />
                        <button type="submit">Bergabung ke Room</button>
                    </form>
                    <hr />
                    <h2>Buat Chat Room Baru</h2>
                    <form onSubmit={handleCreateRoom}>
                        <input
                            type="text"
                            placeholder="Nama Anda"
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                        />
                        <button type="submit">Buat Room Baru</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Roomchat;
