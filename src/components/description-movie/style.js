import styled from 'styled-components';

export const Container = styled.div`
    width: 520px;
    padding: 50px 90px 20px;
    display: flex;
    flex-direction: column;

    @media (max-width: 560px) {
    width: 100%;
    padding: 20px;
    align-items: center;
    text-align: center;
  }
`;

export const Title = styled.h1`
    color: #FFF;
    font-weight: 700;
    font-size: 65px;
    margin-bottom: 10px;
`;


export const Description = styled.p`
    color: #FFF;
    width: 514px;
    font-size: 20px;
    font-weight: 500;
    opacity: 0.9;
`;

export const Button = styled.button`
    width: 193px;
    height: 56px;
    border-radius: 41px;
    background: #FA4776;
    margin-top: 50px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    font-weight: 600;
    color: #FFF;
    font-size: 18px;
    transition: 0.3s;

    &:hover{
        opacity: 0.7;
        cursor: pointer;
    }

    &:active{
        opacity: 0.5;
    }
`;