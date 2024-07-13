# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

/////////////

    {/* <div>
                        {
                            movieData.map((item, index)=>(
                                <Card key={item.id} style={{ width: '18rem' }}>
                                    <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                </Card.Body>
                                <Card.Img variant="top" src={item.src} />
                                
                            </Card>
                            ))
                        }
                    </div> */}




<div className='category-box'>
                        <div className='row'>
                        <div className='col-md-4'>
                            <Card style={{ width: '13rem', marginBottom:"2rem" }}>
                                    <Card.Body>
                                    <Card.Title>Action</Card.Title>
                                </Card.Body>
                                <Card.Img variant="top" src="/images/img1.jpg" />    
                            </Card>
                        </div>
                        <div>
                        <Card style={{ width: '13rem', marginBottom:"2rem" }}>
                                    <Card.Body>
                                    <Card.Title>Drama</Card.Title>
                                </Card.Body>
                                <Card.Img variant="top" src="/images/img2.jpg" />    
                            </Card>
                        </div>
                        <div>
                        <Card style={{ width: '13rem', marginBottom:"2rem" }}>
                                    <Card.Body>
                                    <Card.Title>Romance</Card.Title>
                                </Card.Body>
                                <Card.Img variant="top" src="/images/img3.jpg" />    
                            </Card>
                        </div>
                        </div>

                        <div className='row'>
                        <div className='col-md-4'>
                        <Card style={{ width: '13rem', marginBottom:"2rem" }}>
                                    <Card.Body>
                                    <Card.Title>Thriller</Card.Title>
                                </Card.Body>
                                <Card.Img variant="top" src="/images/img4.jpg" />    
                            </Card>
                        </div>
                        <div>
                        <Card style={{ width: '13rem', marginBottom:"2rem" }}>
                                    <Card.Body>
                                    <Card.Title>Western</Card.Title>
                                </Card.Body>
                                <Card.Img variant="top" src="/images/img5.jpg" />    
                            </Card>
                        </div>
                        <div>
                        <Card style={{ width: '13rem', marginBottom:"2rem" }}>
                                    <Card.Body>
                                    <Card.Title>Horror</Card.Title>
                                </Card.Body>
                                <Card.Img variant="top" src="/images/img6.jpg" />    
                            </Card>
                        </div>
                        </div>

                        <div className='row'>
                        <div className='col-md-4'>
                        <Card style={{ width: '13rem', marginBottom:"2rem" }}>
                                    <Card.Body>
                                    <Card.Title>Fantasy</Card.Title>
                                </Card.Body>
                                <Card.Img variant="top" src="/images/img7.jpg" />    
                            </Card>
                        </div>
                        <div>
                        <Card style={{ width: '13rem', marginBottom:"2rem" }}>
                                    <Card.Body>
                                    <Card.Title>Music</Card.Title>
                                </Card.Body>
                                <Card.Img variant="top" src="/images/img8.jpg" />    
                            </Card>
                        </div>
                        <div>
                        <Card style={{ width: '13rem', marginBottom:"2rem" }}>
                                    <Card.Body>
                                    <Card.Title>Fiction</Card.Title>
                                </Card.Body>
                                <Card.Img variant="top" src="/images/img9.jpg" />    
                            </Card>
                        </div>
                        </div>

                    </div>


=============================

import React from 'react';
// import Card from 'react-bootstrap/Card';
import "../category/Categories.Style.css";
// import movieData from '../../movieData'; // Use relative path based on the project structure
import CardLayout from './CardLayout';
import { Button } from 'react-bootstrap';

function Categories() {
    
    return (
        <>
            <div className='category-form-body'>

                <div className='category-parent-div'>
                    <div className='category-child-div'>
                        <h1 className='category-primary-font mb-4'>Super app</h1>
                        <h4 className='category-secondary-font'>Choose your entertainment category</h4>
                    </div>

                    <div>
                    <div className='category-box'>
                            <CardLayout title="Action" imgSrc="/images/img1.jpg" bgColor="#FF5209"/>
                            <CardLayout title="Drama" imgSrc="/images/img2.jpg" bgColor="#D7A4FF"/>
                            <CardLayout title="Romance" imgSrc="/images/img3.jpg" bgColor="#148A08"/>
                            <CardLayout title="Thriller" imgSrc="/images/img4.jpg" bgColor="#84C2FF"/>
                            <CardLayout title="Western" imgSrc="/images/img5.jpg" bgColor="#902500"/>
                            <CardLayout title="Horror" imgSrc="/images/img6.jpg" bgColor="#7358FF"/>
                            <CardLayout title="Fantasy" imgSrc="/images/img7.jpg" bgColor="#FF4ADE"/>
                            <CardLayout title="Music" imgSrc="/images/img8.jpg" bgColor="#E61E32"/>
                            <CardLayout title="Fiction" imgSrc="/images/img9.jpg" bgColor="#6CD061"/>
                        <div className='button-div'>
                            <Button className="next-button">Next Page</Button>
                        </div>                                             
                    </div>
                   
                    </div>
                </div>

            </div>
        </>
    )
}

export default Categories

============================================