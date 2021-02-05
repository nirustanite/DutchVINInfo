import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Input, Header, Button } from 'semantic-ui-react';
import styled from 'styled-components';
import DetailsStore from '../../redux/Details';

const InnerDiv = styled.div`
    position: absolute;
    margin-top: -250px;
    left: 35%;

    @media (max-width: 768px) {
        left: 10%;
        margin-top: -230px;
    }

    
`;
const StyledHeader = styled(Header)`
    color: white !important;

    @media (max-width: 768px) {
        font-size: 20px !important;
    }
`;

const StyledInput = styled(Input)`
    &.ui.input>input{
        background: #ffdf35 !important;
        text-transform: uppercase !important;
    }
`;

const StyledButton = styled(Button)`
    background-color: white !important;
    color: black !important;
    border-color: white !important;
    margin-left: 10px !important;
`;


const InputForm = () => {

    const [ value, setValue] =  useState('');

    const dispatch = useDispatch();

    const handleClick = (e) => {
       e.preventDefault();
       dispatch(DetailsStore.actions.clearError())
       dispatch(DetailsStore.actions.getDetails(value));

    }

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return(
        <React.Fragment>
            <InnerDiv>
                <StyledHeader as="h1">Please enter your license plate number</StyledHeader>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    <StyledInput 
                        style={{ background: '#ffdf35 !important' }} 
                        onChange={handleChange}/>
                    <StyledButton onClick={handleClick}>Send</StyledButton>
                </div>
            </InnerDiv>  
        </React.Fragment>
    );
};

export default InputForm;
