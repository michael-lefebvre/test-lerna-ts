import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
// import { ColorPalette, ColorItem } from '@storybook/addon-docs/blocks';
import styled from "styled-components";

const Content = styled.div`
  width: 200px;
  line-height: 200px;
  text-align: center;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
  border: 1px solid dimgrey;
  border-radius: ${(props) => props.theme.borderRadius};
`;
/*
    <ColorPalette>
      <ColorItem subtitle="Active" title="theme.color.active" colors={['#ff0']} />
    </ColorPalette>
*/
const Demo = () => (
  <Content>
    Demo
  </Content>
);

export default {
  title: 'Theme',
  component: Demo,
};

export const Text = () => <Demo />;
