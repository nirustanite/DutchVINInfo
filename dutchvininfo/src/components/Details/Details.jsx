import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Loader } from 'semantic-ui-react';

const DetailsDiv = styled.div`
    position: relative;
    background-color: white;
    width: 400px;
    height: 240px;
    border-radius: 25px;
    box-shadow: 2px 2px 2px #D3D3D3;
    background-clip: content-box;
    margin: auto;
    margin-top: -104px;
    z-index: 4;

    @media (max-width: 768px) {
        margin-top: -98px;
        width: 250px;
        height: 280px;
    }
`

const MainDiv = styled.div`
    margin-left: 30px;
    padding-top: 10px;
`;

const Heading = styled.p`
    font-size: 15px;
`;

const SubText = styled.p`
    padding-left: 15px;
    font-size: 17px;
    color: 	#696969;
`;

const ErrorText = styled.p`
    color: red;
    font-size: 17px;
    margin-left: 28%;
    padding-top: 23%;
`;

const StyledLoader = styled.div`
    margin-left: 10% !important;
    padding-top: 23% !important;
`;

const Details = () => {

    const details = useSelector(state => state.details.details);
    const loading =  useSelector(state => state.details.loading);
    const detailsError =  useSelector(state => state.details.error);

    return (
        <DetailsDiv>
            {!loading ? (
                <>
                    {detailsError ? (<ErrorText>{detailsError}</ErrorText>) : (
                        <>
                        {details.kenteken && <MainDiv>
                            <Heading> Handelsbenaming </Heading>
                            <SubText> {details.handelsbenaming}</SubText>
                            
                            <Heading>Datum Eerste Toelating</Heading>
                            <SubText> {details.datum_eerste_toelating}</SubText>
    
                            <Heading>Brandstof</Heading>
                            {details.brandstof.map((brandstof, i) => {
                                return <SubText key={i}>{brandstof.brandstof_omschrijving}</SubText>
                            })}
                        </MainDiv>}
                        </>
                    )}
                </>
            ) : (
                <StyledLoader>
                    <Loader active inline='centered' />
                </StyledLoader>
            )}
        </DetailsDiv>
    );
};

export default Details;