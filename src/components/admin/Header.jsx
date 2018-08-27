import React, { Component } from 'react'
import styled from 'styled-components'

const HeaderBar = styled.div`
width:100vw;
min-height:50px;
background-color: rgb(22,90,170); 
color:#eee;
padding:10px;
`

export class Header extends Component {

  render() {

    return (
      <HeaderBar>
        Festbot Admin
      </HeaderBar>
    )
  }
}

export default Header
