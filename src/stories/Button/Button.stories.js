import React from 'react';
import Button from "../../components/Button/Button";

export default {
  title: 'Button/CommonButton',
  component: Button,
}

const Template = (args) => <Button {...args} myClick={(() => console.log(1))} />;

export const ButtonSucess = Template.bind({});

ButtonSucess.args = {
  title: 'Confirm',
  variant: 'success'
}

export const ButtonError = Template.bind({});

ButtonError.args = {
  title: 'Cancel',
  variant: 'error'
}

export const ButtonPrimary = Template.bind({});

ButtonPrimary.args = {
  title: 'Submit',
  variant: 'primary'
}
