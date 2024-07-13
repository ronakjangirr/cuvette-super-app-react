import React, { useEffect, useState } from 'react'
import "../userInterface/EntertainmentStyle.css";
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function Entertainment() {
    const imgStyle = { height: "50px", width: "50px", borderRadius: "2rem", border: "2px solid white" }

    const [selectedCategories, setSelectedCategories] = useState([]);

    // Fetch selected categories from localStorage on component mount
    useEffect(() => {
        const storedCategories = localStorage.getItem('selectedCategories');
        if (storedCategories) {
            setSelectedCategories(JSON.parse(storedCategories));
        }
    }, []);


    const movies = [
        { movieCategory: "Action", imgSrc: "/images/img1.jpg", },
        { movieCategory: "Action", imgSrc: "/images/img10.jpeg", },
        { movieCategory: "Action", imgSrc: "/images/img11.jpeg", },

        { movieCategory: "Drama", imgSrc: "/images/img2.jpg", },
        { movieCategory: "Drama", imgSrc: "/images/img12.jpeg", },
        { movieCategory: "Drama", imgSrc: "/images/img15.jpeg", },

        { movieCategory: "Romance", imgSrc: "/images/img16.jpeg" },
        { movieCategory: "Romance", imgSrc: "/images/img17.jpeg" },
        { movieCategory: "Romance", imgSrc: "/images/img18.jpeg" },

        { movieCategory: "Thriller", imgSrc: "/images/img4.jpg" },
        { movieCategory: "Thriller", imgSrc: "/images/img19.jpeg" },
        { movieCategory: "Thriller", imgSrc: "/images/img20.jpeg" },

        { movieCategory: "Western", imgSrc: "/images/img5.jpg" },
        { movieCategory: "Western", imgSrc: "/images/img22.jpeg" },
        { movieCategory: "Western", imgSrc: "/images/img23.jpeg" },

        { movieCategory: "Horror", imgSrc: "/images/img6.jpg" },
        { movieCategory: "Horror", imgSrc: "/images/img25.jpeg" },
        { movieCategory: "Horror", imgSrc: "/images/img26.jpeg" },

        { movieCategory: "Fantasy", imgSrc: "/images/img7.jpg" },
        { movieCategory: "Fantasy", imgSrc: "/images/img27.jpeg" },
        { movieCategory: "Fantasy", imgSrc: "/images/img28.jpeg" },

        { movieCategory: "Music", imgSrc: "/images/img8.jpg" },
        { movieCategory: "Music", imgSrc: "/images/img28.jpeg" },
        { movieCategory: "Music", imgSrc: "/images/img29.jpeg" },

        { movieCategory: "Fiction", imgSrc: "/images/img9.jpg" },
        { movieCategory: "Fiction", imgSrc: "/images/img30.jpeg" },
        { movieCategory: "Fiction", imgSrc: "/images/img31.jpeg" }

    ];

    const displayedCategories = new Set();

    const imgCardStyle = { width: "380px", height: "180px", margin: "10px", borderRadius: "1rem" }; // Adjust the width and height as needed

    return (
        <>
            <div className=" bg-black">
                <Navbar className="bg-transparent justify-content-between">
                    <p className='logo-style mx-5'>Super app</p>
                    <Row className='mx-5'>
                        <Col xs="auto">
                            <Image src="/images/img14.png" style={imgStyle} fluid />
                        </Col>
                    </Row>
                </Navbar>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='float-start col-12'>
                            <div className='float-start'>
                                <h3 className='heading-h3'>Entertainment according to your choice</h3>
                            </div>
                        </div>
                        <div className='col-12 d-flex flex-wrap justify-content-evenly mt-3'>

                            {movies.map((item, index) => (  // Ittrating over movies array of object
                                selectedCategories.includes(item.movieCategory) && (        // Only showing that movieCategory which is match with movieCategory key by using includes method.
                                    <div key={index}>
                                        <h2 className='heading-h2'>{item.movieCategory}</h2>
                                        <Image src={item.imgSrc} alt={item.movieCategory} style={imgCardStyle} />
                                    </div>
                                )
                            ))}
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Entertainment