import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
background-color:#2c2c2c
color:#eee;

padding:10px;


`
export class SideBar extends Component {
  render() {
    return (
      <Container>
        MenuItem
      </Container>
    )
  }
}

export default SideBar
