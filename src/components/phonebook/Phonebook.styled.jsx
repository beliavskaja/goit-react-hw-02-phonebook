import styled from "styled-components";

export const Form = styled.form`
  margin: 20px;
`;

export const ContactInput = styled.input`
  max-width: 200px;
  display: block;
  margin-bottom: 10px;
`;

export const AddButton = styled.input`
  border-radius: 5px;
  border: 2px solid #fff;
  padding: 5px 10px;
  margin: 10px;
  font-size: 11px;
  text-transform: uppercase;
  color: #000;
  background-color: #fff;
  border-color: #e7e7e7;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  :hover {
    background-color: #2ee59d;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-7px);
  }
`;
