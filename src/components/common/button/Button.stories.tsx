import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '.';
import { IconButton } from './Icon';
import { Velog } from '@/assets/svgs';

export default {
  title: 'component/button',
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args}>Button</IconButton>
);

export const contained = Template.bind({});

contained.args = {
  Icon: <Velog />,
};
