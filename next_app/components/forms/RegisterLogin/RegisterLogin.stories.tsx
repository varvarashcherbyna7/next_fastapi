import { ComponentMeta, ComponentStory } from '@storybook/react';
import RegisterLogin, { IRegisterLogin } from './RegisterLogin';
import { mockRegisterLoginProps } from './RegisterLogin.mocks';

export default {
  title: 'forms/RegisterLogin',
  component: RegisterLogin,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof RegisterLogin>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RegisterLogin> = (args) => (
  <RegisterLogin {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockRegisterLoginProps.base,
} as IRegisterLogin;
