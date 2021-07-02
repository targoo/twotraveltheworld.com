import { WhoAreWe } from './WhoAreWe';

export default {
  title: 'Components/Molecules/WhoAreWe',
  component: WhoAreWe,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <WhoAreWe {...args}></WhoAreWe>;

export const Primary = Template.bind({});
Primary.args = {};
