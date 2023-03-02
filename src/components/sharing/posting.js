import React, { useState } from 'react';

function Posting() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [posts, setPosts] = useState([]);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleContentChange = (event) => {
        setContent(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newPost = { title, content };
        setPosts([...posts, newPost]);
        setTitle('');
        setContent('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" value={title} onChange={handleTitleChange} />

                <label htmlFor="content">Content:</label>
                <textarea id="content" value={content} onChange={handleContentChange} />

                <button type="submit">Create Post</button>
            </form>

            <div>
                {posts.map((post, index) => (
                    <div key={index}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Posting;
