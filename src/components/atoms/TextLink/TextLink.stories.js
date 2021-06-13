import { TextLink } from './TextLink';

export default {
  title: 'Components/Atoms/TextLink',
  component: TextLink,
};

const Template = (args) => <TextLink {...args}>TextLink</TextLink>;

export const Primary = Template.bind({});
Primary.args = {};
