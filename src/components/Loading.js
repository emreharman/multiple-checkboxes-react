import React from 'react'
import "../styles/Loading.css";

const Loading = () => {
    return (
        <div className="spinner-container">
            <div className="spinner-border text-primary" role="status">
                <span className="sr-only"></span>
            </div>
        </div>
    )
}

export default Loading
