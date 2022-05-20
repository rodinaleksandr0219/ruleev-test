import IconButton from './IconButton'
import { SvgIcon } from '../SvgIcon'

export default {
  title: 'Example/IconButton',
  component: IconButton,
  argTypes: {
  },
}

const Template = (args) => <IconButton {...args} />

export const ChatIconButton = Template.bind({})

ChatIconButton.args = {
  icon: <SvgIcon name="Chat" />
}
