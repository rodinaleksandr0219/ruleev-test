import Chip from './Chip'

export default {
  title: 'Example/Chip',
  component: Chip,
  argTypes: {
  },
}

const Template = (args) => <Chip {...args}>test</Chip>

export const ExampleChip = Template.bind({})

ExampleChip.args = {
  children: 'test'
}
