import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '.';

export default {
  title: 'component/button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
);

export const contained = Template.bind({});
