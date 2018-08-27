import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../components/admin/Header.jsx';
import SideBar from '../components/admin/SideBar.jsx';

const MainContainer = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #aaa;
    display: flex;
    transition: all 0.3s ease-out;
    
`;

const Content = styled.div`
	background-color: #ddd;
    width: 100%;
    padding:10px;
`;

export class AdminContainer extends Component {
	render() {
		return (
			<div>
				<Header />
				<MainContainer>
					<SideBar />
					<Content>{this.props.children}</Content>
				</MainContainer>
			</div>
		);
	}
}

export default AdminContainer;
