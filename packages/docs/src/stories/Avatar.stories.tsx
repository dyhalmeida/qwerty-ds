import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, IAvatarProps } from '@qwerty-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/dyhalmeida.png',
    alt: 'Diego Almeida',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<IAvatarProps>

export const Default: StoryObj<IAvatarProps> = {}

export const Fallback: StoryObj<IAvatarProps> = {
  args: {
    src: undefined,
  },
}
