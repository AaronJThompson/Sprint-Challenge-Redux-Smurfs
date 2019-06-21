import React from "react";
import styled from 'styled-components'
import Colors from './colors';
import smurfImage from '../../assets/smurf.png'

const SmurfCard = styled.div`
  position: relative;
  height: 30rem;
  width: 25rem;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 3rem;
  * {
    font-family: 'Roboto', sans-serif;
  }
`;

const Header = styled.header`
  height: 30%;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  color: white;
  background-color:${Colors.primary};
  box-sizing: border-box;
  padding: 0;

  
  h3 {
    font-size: 1.4rem;
    margin: 0;
    padding: 0;
    font-weight: normal;
  }
`;

const SmurfInfo = styled.div`
  margin-top: 2rem;
  height: 50%;
  width: 70%;
  display: flex;
  align-items: center;

  img {
    height: 100%;
    width: auto;
  }
`;

const HeightLine = styled.span`
  display: inline-block;
  width: 1px;
  height: 100%;
  border-right-style: dotted;
  border-right-width: 1px;
  border-right-color: black;
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 2rem;
  height: 2rem;
  text-align: center;
  border-radius: 10px;
  color: white;
  background: none;
  background-color: ${Colors.secondary};
  display: block;
  margin: 0 auto;
  border: none;

`;
export default function Smurf(props) {
    const { name, age, height, id } = props.smurf;
    const deleteSelf = () => {
        props.delete(id);
    }
    return (
        <SmurfCard>
        <Header>
          <DeleteButton onClick={deleteSelf}>X</DeleteButton>
          <h3>{name}</h3>
        </Header>
        <SmurfInfo>
          <span>{height} tall</span>
          <HeightLine />
          <img src={smurfImage} />
        </SmurfInfo>
        <p>{age} smurf years old</p>
      </SmurfCard>
    )
}