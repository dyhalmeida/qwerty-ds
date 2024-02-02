import type { Meta, StoryObj } from '@storybook/react'
import { Heading, IHeadingProps } from '@qwerty-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Lorem, ipsum dolor',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<IHeadingProps>

export const Default: StoryObj<IHeadingProps> = {}

export const Custom: StoryObj<IHeadingProps> = {
  args: {
    children: 'Lorem, ipsum dolor',
    size: 'lg',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o elemento Heading se comporta como um `h2`, mas pode ser alterado com a prop `as`',
      },
    },
  },
}
