import { Backdrop } from './Backdrop';

export default {
  title: 'Components/Atoms/Backdrop',
  component: Backdrop,
};

const Template = (args) => <Backdrop {...args}>Backdrop</Backdrop>;

export const Primary = Template.bind({});
Primary.args = {
  color: 'red',
  opacity: 1,
};
