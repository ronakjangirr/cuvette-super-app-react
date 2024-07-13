import React, { useState, useEffect } from 'react'
import Chip from "@mui/material/Chip";
import "../userInterface/UserDetailsStyle.css";
import { useDispatch, useSelector } from 'react-redux';
import { getWeatherAction } from '../../reduxfeatures/apiSlice';
import WbCloudyOutlinedIcon from '@mui/icons-material/WbCloudyOutlined'; // Import the icon here
import DeviceThermostatOutlinedIcon from '@mui/icons-material/DeviceThermostatOutlined';
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import OpacityOutlinedIcon from '@mui/icons-material/OpacityOutlined';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import { Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function UserDetails() {
    let [clientName, setClientName] = useState('');     // Inside this states storing data from localStorage.
    let [clientEmail, setClientEmail] = useState('');
    let [clientUserName, setClientUserName] = useState('');

    let [showChip, setShowChip] = useState([]);     // setting selected category in showChip

    let [news, setNews] = useState([]);             // setting news in news state which is fetch from axios method

    let [img, setImg] = useState([]);

    let dispatch = useDispatch();

    let navigate = useNavigate();

    useEffect(() => {
        fetchData(); // Fetch user data
        fetchChip();
        dispatch(getWeatherAction());
    }, [dispatch]);

    useEffect(() => {
        async function newsFun() {
            try {
                let response = await axios.get('https://dummyjson.com/posts');

                if (!response.ok) {
                    console.log("Can't fetch news data")
                }
                let fetchData = response.data.posts;
                console.log("fetchData", fetchData);
                setNews(fetchData);
            } catch (error) {
                console.log(error);
            }
        }
        newsFun()   // by getting data in above function and now calling newsFun to execute to run this is common in react if we did'nt cll it then news Function we not call  




        async function newsImgFun() {
            try {    // Error handling through try and catch method   
                let response = await axios.get('https://fakestoreapi.com/products');  // Fetching data from api 
                if (!response.ok) {
                    console.log("Can't fetch news Images")
                }
                let imgData = response.data;
                console.log("imgData", imgData);
                setImg(imgData);
            } catch (error) {
                console.log(error)
            }
        }
        newsImgFun();       // Calling newsFun
    
    
    }, [])              // Empty dependency array means this useEffect runs once when the component mounts



    let { weather, loading, error } = useSelector((state) => state.weatherStore);       // array destructuring of weather , loading and error



    function fetchData() {  // In this function getting user data from local storage and showing below.
        let storeData = localStorage.getItem('formValueKey');
        let { name, email, userName } = JSON.parse(storeData);    // destructuring and storing differently.
        setClientName(name);
        setClientEmail(email);
        setClientUserName(userName);
    };




    function fetchChip() {      // In this function getting selected category from local storage and showing below in chips.
        let getChip = JSON.parse(localStorage.getItem("selectedCategories"));
        setShowChip(getChip);           // setting to showChip state and showing below in chips

    }



    function nextPage() {
        navigate("/user-details-count-down");
    }

    const nextBtn = {
        width: "150px",
        height: "50px",
        borderRadius: "28px",
        backgroundColor: "#148A08",
        color: "#fff",
        border: "none",
        fontSize: "20px"
    }


    const chipsSpacing = { marginRight: '8px', marginTop: "8px", backgroundColor: "#9F94FF", padding: "22px 35px", borderRadius: "30px", fontSize: "18px" };
    const cloudIcon = { height: "5.2rem", width: "5.2rem", color: "white", marginTop: "1rem" }; // Increase the size
    const tempIcon = { height: "2rem", width: "2rem", color: "white" }
    return (
        <>
            <div className="alpha-main-div bg-black">
                <div className='alpha-parent-one'>
                    <div className='alpha-one-div'>
                        <div>
                            <img src="/images/img14.png" alt="Description of the image" />
                        </div>

                        <div className="alpha-child-two">
                            <h3>{clientName}</h3>
                            <h3>{clientEmail}</h3>
                            <h5>{clientUserName}</h5>
                            <div className='alpha-chip-div'>
                                {
                                    showChip.map((chip, index) => (
                                        <Chip
                                            key={index}
                                            label={chip}
                                            color="success"
                                            style={chipsSpacing} // Apply spacing to each chip
                                        />
                                    ))
                                    // Ittrating showChip through map in showChip selected category is present.        

                                }
                            </div>
                        </div>
                    </div>
                    <div className='alpha-two-div'>
                        <div className='alpha-two-div-child-one'>
                            <div>
                                <h1 className='alpha-font-white'>2-20-2023</h1>
                            </div>
                            <div>
                                <h1 className='alpha-font-white'>07:35 PM</h1>
                            </div>
                        </div>
                        <div className='alpha-two-div-child-two'>
                            {
                                // Using conditional rendering if loading then show "Loading weather data.." otherwise show below data.
                                loading ? <p className='alpha-font-white'>Loading weather data..</p> :
                                    <>
                                        <div className='alpha-inner-one'>
                                            <WbCloudyOutlinedIcon style={cloudIcon} />
                                            <p className='alpha-font-white-one'>{weather && weather.current && weather.current.condition && weather.current.condition.text}</p>
                                        </div>
                                        <div className='alpha-inner-two'>
                                            <p className='alpha-font-white-two'>{weather && weather.current && weather.current.temp_c}°C</p>
                                            <p className='alpha-font-white-three'><DeviceThermostatOutlinedIcon style={tempIcon} />{weather && weather.current && weather.current.pressure_mb} mbar Pressure</p>
                                        </div>
                                        <div className='alpha-inner-three'>
                                            <p className='alpha-font-white-four'><AirOutlinedIcon style={tempIcon} />{weather && weather.current && weather.current.wind_kph} km/h Wind</p>
                                            <p className='alpha-font-white-five'><OpacityOutlinedIcon style={tempIcon} />{weather && weather.current && weather.current.humidity}% Humidity</p>
                                        </div>
                                    </>
                            }
                        </div>
                    </div>
                </div>

<div>
                <div className='alpha-parent-two'>
                    <div style={{ flex: '1' }}>
                        <div className='img-weather'>
                            <Image src='/images/img34.jpeg' fluid />
                            <div className="text-overlay">
                                <h3>Want to climb mount Everest?</h3>
                            </div>
                        </div>
                    </div>
                    <div className="alpha-scrollable-content" style={{ flex: '1', overflowY: 'auto' }}>
                        {news && news.map((item) => (
                            <div key={item.id}>
                                <p>{item.body}</p>
                            </div>
                        ))}
                    </div>
                  
                </div>
                <div className='btn-div float-end mt-3'>
                        <Button class="btn" style={nextBtn} onClick={() => nextPage()}>Browse</Button>
                    </div>
                    </div>
            </div>
        </>
    )
}

export default UserDetails