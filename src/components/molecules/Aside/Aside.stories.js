import { Aside } from './Aside';
import { Paragraph } from '../../atoms/Paragraph/Paragraph';
import { TextLink } from '../../atoms/TextLink/TextLink';

export default {
  title: 'Components/Molecules/Aside',
  component: Aside,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => (
  <Aside {...args}>
    <Paragraph>
      This is an example “Aside”, with <TextLink>an included link</TextLink>.
    </Paragraph>
  </Aside>
);

export const Primary = Template.bind({});
Primary.args = {};
