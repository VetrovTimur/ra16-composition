import React from 'react'

export const Card = (props) => {
    const { title, content, img } = props

    if ( img !== 'true') {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{content}</p>
                    <a href="#" className="btn btn-primary">Click</a>
                </div>
            </div>
        )
    } else {
        return (
            <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{content}</p>
                    <a href="#" className="btn btn-primary">Click</a>
                </div>
            </div>
        )
    }
}
