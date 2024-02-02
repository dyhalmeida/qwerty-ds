import type { Meta, StoryObj } from '@storybook/react'
import { Box, IBoxProps, Text } from '@qwerty-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
        eaque dolores saepe magnam est harum esse ea blanditiis unde facilis
        iusto numquam cum, dolor deserunt voluptate nulla? Quisquam, corporis.
        Vitae!
      </Text>
    ),
  },
} as Meta<IBoxProps>

export const Primary: StoryObj<IBoxProps> = {}
