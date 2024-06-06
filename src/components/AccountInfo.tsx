import React from 'react';
import styled from 'styled-components';

const AccountContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;
`;

const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ccc;
  margin-right: 10px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const AccountName = styled.div`
  font-weight: bold;
`;

const AccountEmail = styled.div`
  color: #666;
`;

const AccountInfo = () => (
  <AccountContainer>
    <Avatar />
    <Info>
      <AccountName>User Name</AccountName>
      <AccountEmail>abc123@gmail.com</AccountEmail>
    </Info>
  </AccountContainer>
);

export default AccountInfo;
