import { Avatar, Button, Card } from 'antd';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { logoutAction } from '../reducers/user';

const CardButton = styled(Button)`
  margin-left: 47px;
`;

const UserProfile = () => {
  const dispatch = useDispatch();

  const onLogOut = useCallback(() => {
    dispatch(logoutAction());
  }, []);

  return (
    <Card
      actions={[
        <div key="twit">
          짹짹
          <br />0
        </div>,
        <div key="followings">
          팔로잉
          <br />0
        </div>,
        <div key="followers">
          팔로워
          <br />0
        </div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>JH</Avatar>} title="JaeHyeon" />
      <CardButton onClick={onLogOut}>로그아웃</CardButton>
    </Card>
  );
};

export default UserProfile;
