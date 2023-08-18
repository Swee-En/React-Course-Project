import React from 'react'

const Card = (props) => {
    const { imageURL, songTitle, artist, uri } = props;

    return (
        <div>
            <div className="card">
                <div className='center'>
                    <img className="card-img-top" src={imageURL} alt="Album image" />
                </div>

                <div className="card-body">
                    <h5 className="card-title">{songTitle}</h5>
                    <p className="card-text">{artist}</p>
                </div>
            </div>
        </div>
    )
}

export default Card
