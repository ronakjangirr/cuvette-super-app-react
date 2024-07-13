import React, { useState, useEffect, useRef } from 'react'
import Chip from "@mui/material/Chip";
import "../userInterface/UserDetailsTwoStyle.css";
import { useDispatch, useSelector } from 'react-redux';
import { getWeatherAction } from '../../reduxfeatures/apiSlice';
import WbCloudyOutlinedIcon from '@mui/icons-material/WbCloudyOutlined'; // Import the icon here
import DeviceThermostatOutlinedIcon from '@mui/icons-material/DeviceThermostatOutlined';
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import OpacityOutlinedIcon from '@mui/icons-material/OpacityOutlined';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';  // External Package is used for showing countdata
import { useNavigate } from 'react-router-dom';
import ArrowDropUpRoundedIcon from '@mui/icons-material/ArrowDropUpRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import { Image } from 'react-bootstrap';

function UserDetailsTwo() {
    let [clientName, setClientName] = useState('');
    let [clientEmail, setClientEmail] = useState('');
    let [clientUserName, setClientUserName] = useState('');

    let [showChip, setShowChip] = useState([]);

    let [news, setNews] = useState([]);

    let [img, setImg] = useState([]);

    const [note, setNote] = useState('');

    let navigate = useNavigate()

    // ================countdown timer code start=====================//

    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isCounting, setIsCounting] = useState(false);
    const [key, setKey] = useState(0); // Key to reset the CountdownCircleTimer

    useEffect(() => {
        const totalSeconds = hours * 3600 + minutes * 60 + seconds;
        setDuration(totalSeconds);
    }, [hours, minutes, seconds]);

    const [duration, setDuration] = useState(0);

    const handleStart = () => {
        if (isCounting) {
            // If counting, reset the timer and key
            setIsCounting(false);
            setKey((prevKey) => prevKey + 1);
            setDuration(0);
        } else {
            // If not counting, start the countdown
            setIsCounting(true);
        }
    };

    const renderTime = ({ remainingTime }) => {
        const formattedTime = new Date(remainingTime * 1000).toISOString().substr(11, 8);
        return (
            <div className="timer">
                <h2 className="timer-text">{formattedTime}</h2>
            </div>
        );
    };

    const handleIncrement = (type) => {
        switch (type) {
            case 'hours':
                setHours((prev) => prev + 1);
                break;
            case 'minutes':
                setMinutes((prev) => prev + 1);
                break;
            case 'seconds':
                setSeconds((prev) => prev + 1);
                break;
            default:
                break;
        }
    };

    const handleDecrement = (type) => {
        switch (type) {
            case 'hours':
                setHours((prev) => Math.max(prev - 1, 0));
                break;
            case 'minutes':
                setMinutes((prev) => Math.max(prev - 1, 0));
                break;
            case 'seconds':
                setSeconds((prev) => Math.max(prev - 1, 0));
                break;
            default:
                break;
        }
    };

    // ================countdown timer code end================//

    let dispatch = useDispatch();

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
        newsFun()

        async function newsImgFun() {
            try {
                let response = await axios.get('https://fakestoreapi.com/products');
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

        newsImgFun();
    }, [])

    let { weather, loading, error } = useSelector((state) => state.weatherStore);

    function fetchData() {
        let storeData = localStorage.getItem('formValueKey');
        if (storeData) {
            // Check if storeData is not null or undefined
            let { name, email, userName } = JSON.parse(storeData);
            setClientName(name);
            setClientEmail(email);
            setClientUserName(userName);
        }
    }



    function fetchChip() {
        let getChip = JSON.parse(localStorage.getItem("selectedCategories")) || [];
        setShowChip(getChip);
        localStorage.setItem('chipkey', JSON.stringify(getChip));
    }



    function saveNoteFunction(e) {
        let newNote = e.target.value;       // collecting textarea value and setting in setNote and then storing in localStorage
        setNote(newNote);
        localStorage.setItem('notekey', newNote);
    }



    function nextPage() {
        navigate("/entertainment");
    }



    const audioRef = useRef(null);



    useEffect(() => {
        if (isCounting) {
            // Start the ringtone
            audioRef.current.play();

            // Stop the ringtone after 5 seconds
            const ringtoneTimeout = setTimeout(() => {
                audioRef.current.pause();
                audioRef.current.currentTime = 0; // Reset the audio to the beginning
            }, 5000);

            // Cleanup the timeout when the component unmounts or the countdown stops
            return () => clearTimeout(ringtoneTimeout);
        }
    }, [isCounting]);

    const chipsSpacing = { marginRight: '5px', marginTop: "8px", backgroundColor: "#9F94FF", padding: "15px 15px", borderRadius: "30px", fontSize: "18px" };
    const cloudIcon = { height: "2.2rem", width: "2.2rem", color: "white", marginTop: "1rem" }; // Increase the size
    const tempIcon = { height: "2rem", width: "2rem", color: "white" }
    const countDownBtn = { backgroundColor: "#FF6A6A", color: 'white', padding: "0.3rem 7rem", borderRadius: "1.5rem" }
    const nextBtn = {
        width: "150px",
        height: "50px",
        borderRadius: "28px",
        backgroundColor: "#148A08",
        color: "#fff",
        border: "none",
        fontSize: "20px"
    }

    const iconStyle = {
        fontSize: '2rem', // Adjust the font size to change the height and width
        color: "white"
    };

    return (
        <>
            <div className='main-div'>
                <div className='parent-one'>

                    <div className='container-fluid'>
                        <div className='d-flex justify-content-around'>
                            <div className='d-flex flex-column'>

{/* //=================================User Details & Chips Start=============================== */}

                                <div className='one-div d-flex justify-content-evenly'>
                                    <div className='col-4'>
                                        <img src="/images/img14.png" alt="Description of the image" className='img-style' />
                                    </div>

                                    <div className='child-two'>
                                        <h6>{clientName}</h6>
                                        <h6>{clientEmail}</h6>
                                        <h5>{clientUserName}</h5>
                                        <div className='chip-div d-flex flex-wrap'>
                                            {
                                                showChip.map((chip, index) => (
                                                    <Chip
                                                        key={index}
                                                        label={chip}
                                                        color="success"
                                                        style={chipsSpacing} // Apply spacing to each chip
                                                    />
                                                ))
                                            }
                                        </div>
                                    </div>

                                </div>

{/* //=================================User Details & Chips Start=============================== */}

{/* //=================================Weather Details Start=============================== */}

                                <div className='two-div'>
                                    <div className='two-div-child-one'>
                                        <div>
                                            <h1 className='font-white'>2-20-2023</h1>
                                        </div>
                                        <div>
                                            <h1 className='font-white'>07:35 PM</h1>
                                        </div>
                                    </div>
                                    <div className='two-div-child-two'>
                                        {
                                            loading ? <p className='font-white'>Loading weather data..</p> :
                                                <>
                                                    <div className='inner-one'>
                                                        <WbCloudyOutlinedIcon style={cloudIcon} />
                                                        <p className='font-white-one'>{weather && weather.current && weather.current.condition && weather.current.condition.text}</p>
                                                    </div>
                                                    <div className='inner-two'>
                                                        <p className='font-white-two'>{weather && weather.current && weather.current.temp_c}°C</p>
                                                        <p className='font-white-three'><DeviceThermostatOutlinedIcon style={tempIcon} />{weather && weather.current && weather.current.pressure_mb} mbar Pressure</p>
                                                    </div>
                                                    <div className='inner-three'>
                                                        <p className='font-white-four'><AirOutlinedIcon style={tempIcon} />{weather && weather.current && weather.current.wind_kph} km/h Wind</p>
                                                        <p className='font-white-five'><OpacityOutlinedIcon style={tempIcon} />{weather && weather.current && weather.current.humidity}% Humidity</p>
                                                    </div>
                                                </>
                                        }
                                    </div>
                                </div>

{/* //=================================Weather Details End=============================== */}

                            </div>

{/* //================================NotePad Start================================ */}

                            <div className='note-div'>
                                <div className='note-style d-flex flex-column'>
                                    <div className='mt-4'>
                                        <h2 className='note-heading'>All Notes</h2>
                                    </div>
                                    <div>
                                        <textarea
                                            className='text-area-no-border'
                                            value={note}
                                            onChange={saveNoteFunction}
                                            style={{ overflowY: 'hidden' }}
                                        ></textarea>
                                    </div>
                                </div>
                            </div>

{/* //================================NotePad End================================ */}

                        </div>
                    </div>

                    <div className='count-down-div container mt-3'>
                        <div className='row'>
                            <div className='col-4'>
                                <div className='col4-margin d-flex justify-content-center'>

{/* //================================CountdownCircleTimer Start================================ */}

                                    <div className='outer-div'>

                                        <CountdownCircleTimer
                                            key={key} // Use key to reset the CountdownCircleTimer
                                            isPlaying={isCounting}
                                            duration={duration}
                                            colors={[['#FF6A6A']]}
                                            onComplete={() => setIsCounting(false)}
                                        >
                                            {renderTime}
                                        </CountdownCircleTimer>
                                    </div>

{/* //================================CountdownCircleTimer End================================ */}

                                </div>
                            </div>
{/* //================================Set CountdownCircleTimer Start================================ */}

                            <div className='col-8'>
                                <div className='d-flex justify-content-evenly m-2'>
                                    <div className="mb-3">
                                        <div>
                                            <label className="form-label-style"> Hours</label>
                                        </div>
                                        <div>
                                            <ArrowDropUpRoundedIcon style={iconStyle} onClick={() => handleIncrement('hours')} />
                                        </div>
                                        <div>
                                            <h3 className="mx-2 set-timer-style">{hours}</h3>
                                        </div>
                                        <div>
                                            <ArrowDropDownRoundedIcon style={iconStyle} onClick={() => handleDecrement('hours')} />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <div>
                                            <label className="form-label-style">Minutes</label>
                                        </div>
                                        <div>                                    
                                            <ArrowDropUpRoundedIcon style={iconStyle} onClick={() => handleIncrement('minutes')} />
                                        </div>
                                        <div>
                                            <h3 className="mx-2 set-timer-style">{minutes}</h3>
                                        </div>
                                        <div>
                                            <ArrowDropDownRoundedIcon style={iconStyle} onClick={() => handleDecrement('minutes')} />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <div>
                                            <label className="form-label-style">Seconds</label>
                                        </div>
                                        <div>                                           
                                            <ArrowDropUpRoundedIcon style={iconStyle} onClick={() => handleIncrement('seconds')} />
                                        </div>
                                        <div>
                                            <h3 className="mx-2 set-timer-style">{seconds}</h3>
                                        </div>
                                        <div>
                                            <ArrowDropDownRoundedIcon style={iconStyle} onClick={() => handleDecrement('seconds')} />
                                        </div>
                                    </div>
                                </div>
                                <button className="btn" style={countDownBtn} onClick={handleStart}>
                                    {isCounting ? 'Stop Countdown' : 'Start Countdown'}
                                </button>
                                <audio ref={audioRef} src="/audio/ringtone1.mp3" />
                            </div>

{/* //=================================Set CountdownCircleTimer End=============================== */}

                        </div>
                    </div>
                    </div>

{/* //=================================Weather Image & News Start=============================== */}
               
                <div>
                <div className='parent-two'>
                    <div style={{ flex: '1' }}>
                        <div className='img-weather'>
                            <Image src='/images/img34.jpeg' fluid />
                            <div className="text-overlay">
                                <h3>Want to climb mount Everest?</h3>
                            </div>
                        </div>
                    </div>
                    <div className="scrollable-content" style={{ flex: '1', overflowY: 'auto' }}>
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

{/* //=================================Weather Image & News End=============================== */}

            </div>
        </>
    )
}

export default UserDetailsTwo;