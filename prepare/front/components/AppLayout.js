import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Input, Menu, Row, Col } from 'antd';
import UserProfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm';
import styled from 'styled-components';
import Router, { useRouter } from 'next/router';

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

const AppLayout = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  return (
    <div>
      <Menu
        mode="horizontal"
        selectedKeys={[router.pathname]}
        items={[
          {
            label: <Link href="/">노드버드</Link>,
            key: '/',
          },
          {
            label: <Link href="/profile">프로필</Link>,
            key: '/profile',
          },
          {
            label: <SearchInput enterButton />,
            key: '/search',
          },
        ]}
      />
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile setIsLoggedIn={setIsLoggedIn} /> : <LoginForm setIsLoggedIn={setIsLoggedIn} />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a href="https://jaehyeon.art/website.com" target="_blank" rel="noreferrer noopener">
            Made by Lee JaeHyeon
          </a>
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
