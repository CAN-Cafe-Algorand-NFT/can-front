import React from 'react';
import styled from 'styled-components';

const FloatingBar = styled.div`
  position: fixed;
  top: 0; // 화면의 맨 위에 위치
  left: 50%;
  transform: translateX(-50%);
  background-color: #5a3e36;
  color: white;
  padding: 10px 20px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 1000; // 다른 요소들 위에 표시되도록 z-index 조정
`;

const AccountInfo = styled.div`
  margin-left: 10px;
  font-size: 14px;
`;

const WalletInfoBar: React.FC = () => {
  const account = "0x8725...f87D";
  const accountName = "Account 1";

  return (
    <FloatingBar>
      <div>{accountName}</div>
      <AccountInfo>{account}</AccountInfo>
    </FloatingBar>
  );
};

export default WalletInfoBar;
