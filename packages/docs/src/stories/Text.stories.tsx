import { Text, TextProps } from '@dutra-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque enim fugit at! Itaque inventore repellendus enim recusandae! Adipisci laudantium nesciunt, repudiandae hic atque corrupti omnis quam possimus quae, doloremque magnam.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
