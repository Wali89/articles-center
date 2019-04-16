import styled from 'styled-components';

export const UserForm = styled.div`
    background-color: #464240; 
    color: #f2efef;
    margin-left: auto;
    margin-right: auto;
    width: 30%;
    margin-top: 225px;
    text-align: center;
    border-radius: 10px;
    padding: 2em;
    box-shadow: 0px 0px 10px 10px #464240;
    @media (max-width: 1200px) {
        width: 100%;
    }    
`;

export const UserInput = styled.input`
    width:75%;
    margin: 1em auto 1em auto;
    padding: 0.5em;
    color: #464240;
    @media (max-width: 1200px) {
        width: 90%;
    }      
`;

export const UserButton = styled.button`
    color: #464240;
    display: block;
    margin: auto;
`;

export const UserLink = styled.button`
    color: #white;
    background-color:#3F5941;
    display: block;
    margin: auto;
    display: inline;
`;

export const SubText = styled.p`
    padding-top: 2em;
    font-size: 90%;
`;