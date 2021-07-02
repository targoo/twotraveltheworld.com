import { WorldMap } from './WorldMap';

export default {
  title: 'Components/Atoms/WorldMap',
  component: WorldMap,
  decorators: [
    (Story) => (
      <div style={{ border: '1px solid red' }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => (
  <>
    <WorldMap {...args}></WorldMap>
  </>
);

export const Primary = Template.bind({});
Primary.args = {};
