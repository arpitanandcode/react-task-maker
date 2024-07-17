import Input from "../../components/Input/Input";
import React from 'react'

export default {
  title: 'Form/Input',
  component: Input
}

const Template = (args) => <Input {...args} />

export const InputText = Template.bind({});

InputText.args = {
  type: 'text',
  placeholder: 'Enter Email'
}

export const InputNumber = Template.bind({});

InputNumber.args = {
  type: 'number',
  placeholder: 'Enter Age'
}