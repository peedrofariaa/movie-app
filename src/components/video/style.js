import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background: black;

    vm-player{
        width: 80%;
    }
`;

export const Button = styled.button`
    position: absolute;
    right: 25px;
    top: 10px;
    width: 100px;
    height: 50px;
    border-radius: 15px;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background: transparent;
    border: 1px solid #fff;
    color: white;
    cursor: pointer;
    opacity: 0.7;
    transition: 0.3s;

    &:hover{
        opacity: 1;
    }
`;