import React, { useRef, useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';

const StyledField = styled.div`
  margin: 1em;
`;
const Label = styled.div`
  margin-bottom: 0.25em;
`;
const Input = styled.input``;
const Submit = styled.input`
  margin: 1em;
`;

const Field = ({ title, type }) => {
  return (
    <StyledField>
      <Label for={title}>{title}</Label>
      {type !=='textarea' && <Input id={title} type={type} />}
      {type ==='textarea' && <textarea id={title} type={type} />}
    </StyledField>
  )
}

const submit = (event) => {
  event.preventDefault();
  alert(document.getElementById('Body').value);
  const url = '/followup';
  fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    // mode: 'cors', // no-cors, *cors, same-origin
    // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    // redirect: 'follow', // manual, *follow, error
    // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify({}) // body data type must match "Content-Type" header
  });
}

export default () => {
  return (
    <form action='/followup' method='post' onSubmit={submit}>
      <Field title='Name' type='text' />
      <Field title='Email' type='email' />
      <Field title='Subject' type='text'/>
      <Field title='Body' type='textarea' />
      <Submit type='submit' />
    </form>
  )
}