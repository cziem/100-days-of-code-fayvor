import styled from 'styled-components'

export const Main = styled.div`
  display: flex;
  padding-top: 2.5rem;

  form {
    box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.22);
    width: 50vw;
    border-radius: 0.23rem;
    margin: 0 auto;

    input.error {
      border-color: #E91E63;
    }

    .input-feedback {
      color: #E91E63;
      margin-top: .25rem;
    }
  }
`

export const Headers = styled.header`
  padding: 1rem 2rem;
  background-color: #272727;
  color: #f7f7f7;
`

export const FormWrap = styled.div`
  padding: 2rem;
`

export const TextArea = styled.textarea`
  background: transparent;
  width: 90%;
  height: 6rem;
  border: 1px solid #d8d8d8;
  padding: 0.1rem 0.5rem 0.1rem 0.25rem;
  border-radius: 0.15rem;
  color: #e85fe8;
  font-weight: bold;

  &:focus {
    outline-color: #d09ed0;
  }
`

export const SelectInput = styled.select`
  background: transparent;
  width: 90%;
  height: 1.9rem;
  border: 1px solid #d8d8d8;
  padding: 0.1rem 0.5rem 0.1rem 0.25rem;
  border-radius: 0.15rem;
  color: #e85fe8;
  font-weight: bold;

  &:focus {
    outline-color: #d09ed0;
  }
`

export const SelectItems = styled.option`
  padding: .2rem 0;
  background: inherit;
`

export const FormGroup = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem 0;
`