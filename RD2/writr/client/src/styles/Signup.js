import styled from 'styled-components'

const Main = styled.div`
  background: #efefef;
	height: 100vh;
	display: flex;
	justify-content: center;
  align-items: center;
  font-family: 'Lato', sans-serif;

  .wrap__main {
    padding: 1rem 2rem;
    box-shadow: 1px 1px 8px 1px #c3c3c3;
    border-radius: 0.3rem;

    h2 {
      text-align: center;
      color: #a231a2;
      font-weight: bold;
      font-size: 1.6rem;
      margin-bottom: 1rem;
    }
  }

  input.error {
    border-color: #E91E63;
  }

  .input-feedback {
    color: #E91E63;
    margin-top: .25rem;
  }
`

const Button = styled.button`
  cursor: pointer;
  background: ${props => ( props.fill ? '#0c4877' : 'transparent' )};
  font-size: 1.1rem;
  border-radius: 5px;
  color: ${props => ( props.primary ? 'violet' : '#f5f5f5' )};
  border: ${props =>
    props.primary ? '3px solid violet' : '3px solid #0c4877'};
  margin: 0 1em;
  padding: 0.35em 1.5em;
  transition: 0.5s all ease-out;

  &:hover {
    color: white;
    background-color: ${props =>
    props.primary ? 'violet' : 'transparent'};
    border: ${props => props.fill ? '3px solid palevioletred' : '3px solid violet'}
  }

  &:focus {
    outline: none
  }
`

const Label = styled.label`
  color: #a231a2;
  display: block;
  margin-bottom: 0.3rem;
`

const InputText = styled.input`
  background: transparent;
  width: 90%;
  height: 1.9rem;
  border: 1px solid #d8d8d8;
  padding: 0.1rem 0.5rem 0.1rem 0.25rem;
  border-radius: 0.15rem;
  color: #e85fe8;
  font-weight: bold;

  &::placeholder {
    color: #d09ed0;
    font-weight: 400;
  }

  &:focus {
    outline-color: #d09ed0;
  }
`

const Form = styled.form`
  padding: 1rem;

  .cta {
    padding-top: 1rem;

    a:focus {
      outline: none
    }
  }
`

const FormGroup = styled.div`
  width: 100%;
  margin-bottom: 0.23rem;
  padding: 0.5rem 0;
`

const SelectOption = styled.select`
  background: transparent;
  width: 90%;
  height: 1.9rem;
  border: 1px solid #d8d8d8;
  padding: 0.1rem 0.5rem 0.1rem 0.25rem;
  border-radius: 0.15rem;
  color: #e85fe8;
  font-weight: bold;

  &::placeholder {
    color: #d09ed0;
    font-weight: 400;
  }

  &:focus {
    outline-color: #d09ed0;
  }
`

const OptionItem = styled.option`
  padding: .2rem 0;
  background: inherit;
`

export {
  Main, Button, InputText, Label, Form, FormGroup, SelectOption, OptionItem
}