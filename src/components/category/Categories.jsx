import React, { useState, useEffect } from 'react';
import CardLayout from './CardLayout';
import { Button } from 'react-bootstrap';
import Chip from "@mui/material/Chip";
import CancelIcon from "@mui/icons-material/Cancel"; // Import the CancelIcon
import ReportProblemRoundedIcon from '@mui/icons-material/ReportProblemRounded';
import { useNavigate } from 'react-router-dom';

function Categories() {

    const [selectedCategories, setSelectedCategories] = useState([]);

    let navigate= useNavigate();
    

    const handleCardClick = (title) => {                    // title parameter is getting from below onClick which is used in CardLayout 
        // Check if the category is already selected
        if (selectedCategories.includes(title))      // it checks if title is present in selectedCategories array or not  
        // If the category is selected, it removes the category from the selectedCategories array using filter. like below is using
        {
            // debugger
            const updatedCategories = selectedCategories.filter((category) => category !== title);      // if title is already is already selected then it is removing from selectedCategories array by using filter method
            setSelectedCategories(updatedCategories);
        } 
        else                // if title is not present in selectedCategories then it stores in ....selectedCategories
        {
            const updatedCategories = [...selectedCategories, title];         // storing title in selectedCategories
            setSelectedCategories(updatedCategories);

            // Now Set the updated categories in localStorage
            localStorage.setItem('selectedCategories', JSON.stringify(updatedCategories));
        }
    }




    const handleRemoveCategory = (categoryToRemove) => {        // categoryToRemove is getting from below chip component 
        const updatedCategories = selectedCategories.filter((category) => category !== categoryToRemove);    // filter method is checking from selectedCategories array and removes the selected category and update the selectedCategories array again 
        setSelectedCategories(updatedCategories);

        localStorage.setItem('selectedCategories', JSON.stringify(updatedCategories));      // updating the selectedCategories key in localStorage 
    }



    const isMinimumCategoriesSelected = selectedCategories.length < 3;
//This line calculates whether the number of selected categories (selectedCategories.length) is less than 3 and assigns the result to the isMinimumCategoriesSelected variable. If there are less than 3 selected categories, isMinimumCategoriesSelected will be true; otherwise, it will be false.


    function nextPage(){
        debugger
        if(selectedCategories.length>=3){
            navigate("/user-details");
        }else{
            alert("Please  select atleast 3 categories");
        }
    }




    // Inline-CSS-Styling
    const chipsSpacing = { marginRight: '8px', marginTop: "8px", backgroundColor: "#148A08", padding: "22px", borderRadius: "30px", fontSize: "18px" };
    const warningSpacing = { margin: '8px' }
    const messageStyle = { color: 'red', fontSize: "1.3rem", marginTop: "2rem" }

    const cards = [
        { title: "Action", imgSrc: "/images/img1.jpg", bgColor: "#FF5209" },
        { title: "Drama", imgSrc: "/images/img2.jpg", bgColor: "#D7A4FF" },
        { title: "Romance", imgSrc: "/images/img3.jpg", bgColor: "#148A08" },
        { title: "Thriller", imgSrc: "/images/img4.jpg", bgColor: "#84C2FF" },
        { title: "Western", imgSrc: "/images/img5.jpg", bgColor: "#902500" },
        { title: "Horror", imgSrc: "/images/img6.jpg", bgColor: "#7358FF" },
        { title: "Fantasy", imgSrc: "/images/img7.jpg", bgColor: "#FF4ADE" },
        { title: "Music", imgSrc: "/images/img8.jpg", bgColor: "#E61E32" },
        { title: "Fiction", imgSrc: "/images/img9.jpg", bgColor: "#6CD061" }
    ];
    // Note- cards array of object is mapping inside the child component and also sending through props to cardLayout component


    
    return (
        <>
            <div className='category-form-body bg-black'>
                <div className='category-parent-div'>
                    <div className='category-child-div'>
                        <h1 className='category-primary-font mb-4'>Super app</h1>
                        <h4 className='category-secondary-font'>Choose your entertainment category</h4>

                        <div>
                            {selectedCategories.map((category, index) => (
                                <Chip               // showing selected title's in chips and title is present in selectedCategories using map method to show
                                    key={index}
                                    label={category}
                                    color="success"
                                    onDelete={() => handleRemoveCategory(category)} // when the user click on deleteIcon it triggers the onDelete and inside handleRemoveCategory function pass selected category to handleRemoveCategory above as a parameter
                                    deleteIcon={<CancelIcon />}         // This is how we are using the CancelIcon
                                    style={chipsSpacing}                // Apply spacing to each chip
                                />
                            ))}

                            {isMinimumCategoriesSelected && selectedCategories.length > 0 && (
                                <div style={messageStyle}><ReportProblemRoundedIcon style={warningSpacing} />Minimum 3 categories are required.</div>
                            )}
{/* Conditional Rendering: The code inside the curly braces {} is a conditional rendering block in JSX.
The first condition (isMinimumCategoriesSelected) checks whether isMinimumCategoriesSelected is true.
The second condition (selectedCategories.length > 0) checks whether there is at least one selected category.

Rendered Component: If both conditions are true, it renders a <div> component with a warning message indicating that a minimum of 3 categories is required. */}

                        </div>
                    </div>

                    <div>
                        <div className='category-box'>
                            {cards.map((card, index) => (   
                                <CardLayout                 // CardLayout will show cards all data  
                                    key={index}   
                                    title={card.title}      // title, imgSrc, bgColor, onClick, isClicked is sending to CardLayout through props
                                    imgSrc={card.imgSrc}    // these data is carrying above cards array of object details like title, imgSrc, bgColor,onClick, isClicked      
                                    bgColor={card.bgColor}
                                    onClick={() => handleCardClick(card.title)}  // when user click on any card to select then handleCardClick function is called and pass title as parameter to handleCardClick function above so that it can store title in localStorage.
                                    isClicked={card.title === selectedCategories}
                                />
                            ))}
                            <div className='button-div'>
                             
                                <Button className="next-button" onClick={()=>nextPage()}>Next Page</Button>
                             
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Categories;
