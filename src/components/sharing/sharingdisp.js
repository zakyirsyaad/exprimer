import React, { useState } from 'react';
import './sharing.css';

function Sharingdisp() {
    const [likes, setLikes] = useState(0);

    const handleLike = () => {
        setLikes(likes + 1);
    }

    return (
        <section className="sharing_container">
            <div className="posting_display">
                <div className="posting_name">@Hindia</div>
                <div className="posting_story">Muak dikesampingkan Disamakan Hatimu terluka, sempurna</div>
                <button onClick={handleLike} className="like_button"><span class="material-symbols-outlined like_icon">
                    recommend
                </span>{likes}</button>
            </div>
        </section >
    );
}
export default Sharingdisp;
