import AddName from './AddName.js';

export default {
  title: 'components/AddName',
  component: AddName,
};

const Template = args => <AddName {...args} />;

export const Default = Template.bind({});
Default.args = {};
