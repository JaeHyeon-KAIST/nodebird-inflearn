import { Avatar, Button, Card } from 'antd';
import Link from 'next/link';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { logoutRequestAction } from '../reducers/user';

const CardButton = styled(Button)`
  margin-left: 47px;
`;

const UserProfile = () => {
  const dispatch = useDispatch();
  const { me, logOutLoading } = useSelector((state) => state.user);

  const onLogOut = useCallback(() => {
    dispatch(logoutRequestAction());
  }, []);

  return (
    <Card
      actions={[
        <div key="twit">
          <Link href={`/user/${me.id}`}>
            짹짹
            <br />
            {me.Posts.length}
          </Link>
        </div>,
        <div key="followings">
          <Link href="/profile">
            팔로잉
            <br />
            {me.Followings.length}
          </Link>
        </div>,
        <div key="followings">
          <Link href="/profile">
            팔로워
            <br />
            {me.Followers.length}
          </Link>
        </div>,
      ]}
    >
      <Card.Meta
        avatar={
          <Link href={`/user/${me.id}`} prefetch={false}>
            <Avatar>{me.nickname[0]}</Avatar>
          </Link>
        }
        title={me.nickname}
      />
      <CardButton onClick={onLogOut} loading={logOutLoading}>
        로그아웃
      </CardButton>
    </Card>
  );
};

export default UserProfile;
