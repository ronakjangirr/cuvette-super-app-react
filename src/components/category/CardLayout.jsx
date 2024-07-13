import React from "react";
import Card from 'react-bootstrap/Card';
import "../category/Categories.Style.css";

function CardLayout({ title, imgSrc, bgColor, onClick, isClicked }) { 
// title, imgSrc, bgColor, onClick, isClicked  is receiving from Categories (Parent Component) 
// and now it will use in bootstrap card component below

    // Inline-CSS-Styling
    const cardStyling = {
        width: '13.3rem',
        height: "200px",
        marginBottom: "0.1rem",
        backgroundColor: bgColor,
        borderRadius: "1.2rem",
        border: "1px solid red"
    }

    const cardTitleStyling = {
        color: "white",
        fontFamily: 'DM Sans',
        fontSize: "2rem",
        textAlign: "left",
        fontWeight: "bolder"
    }

    const cardImageStyling = {
        maxWidth: '100%',
        height: '130px',
        padding: "15px",
        borderRadius: "1.8rem",
    }
    return (
        <>
            <div className="card-box" >
                <Card
                    className={` ${isClicked ? "borderGreen" : ""}`}
                    onClick={onClick}
                    style={cardStyling}>
                    <Card.Body>
                        <Card.Title style={cardTitleStyling}>{title}</Card.Title>
                    </Card.Body>
                    <Card.Img variant="top" src={imgSrc}
                        style={cardImageStyling} />
                </Card>
            </div>
        </>
    );
}

export default CardLayout;
