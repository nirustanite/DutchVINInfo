import React from 'react';
import styled from 'styled-components';
import image from '../../images/blackcar.jpeg';
import SimpleCarousal from '../../components/SimpleCarousal';


const ImageDiv = styled.div`
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 300px;
    text-align: center;
    opacity: 0.5;

    @media (max-width: 768px) {
        height: 250px;
    } 
`;

const InnerDiv = styled.div`
    position: absolute;
    top: 6%;
    left: 35%;
    margin: 0;
    padding: 0;

    @media (max-width: 768px) {
       left: 5%;
       left: 10%;
       right: 10%;
       text-align: center;
    }
`
const StyledHeader = styled.h1`
    color: white;

    @media (max-width: 768px) {
        font-size: 20px;
     }
`

const DetailsDiv = styled.div`
    position: relative;
    background-color: white;
    width: 400px;
    height: 200px;
    text-align: center;
    border-radius: 25px;
    box-shadow: 2px 2px 2px #D3D3D3;
    background-clip: content-box;
    margin: auto;
    margin-top: -104px;
    z-index: 4;

    @media (max-width: 768px) {
        margin-top: -98px;
        width: 250px;
        height: 150px;
    }
`
const HomePage = () => {
    return(
        <React.Fragment>
            <ImageDiv 
                style={{ 
                    backgroundImage: `url(${image})`,
                }}
            > 
                
            </ImageDiv>

            <InnerDiv>
                <div style={{ display: 'flex' , flexDirection: 'column'}}>
                    <StyledHeader>Please enter your license plate number</StyledHeader>
                    <div style={{ textAlign: 'center' }}>
                        <input type="text"/>
                        <button>Send</button>
                    </div>
                </div>
                   
                    
            </InnerDiv>  
            <DetailsDiv>
                wel
            </DetailsDiv>
            <div>
                <section
                    style={{
                        margin: "20px 0 20px 0"
                    }}
                >
                    <SimpleCarousal deviceType="desktop"/>
                </section>
            </div>
  );
           
        </React.Fragment>
    );
};

export default HomePage;
