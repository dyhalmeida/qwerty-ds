import type { Meta, StoryObj } from '@storybook/react'
import { Text, ITextProps } from '@qwerty-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi optio accusamus obcaecati facilis quo, cupiditate autem asperiores neque alias molestias deserunt suscipit necessitatibus itaque eos aspernatur quas provident ducimus nisi.',
  },
} as Meta<ITextProps>

export const Default: StoryObj<ITextProps> = {}
