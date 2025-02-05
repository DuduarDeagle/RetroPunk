/* Import dependencies */
import * as React from "react"

/* Import components */
import Button from "./Button"

/* Import types */
import type { Meta, StoryObj } from "@storybook/react"

/* Define types */
type Story = StoryObj<typeof Button>

/* Define meta */
export default {
	title: "Atoms/Button",
	component: Button,
	args: {
		label: "Click me"
	},
	tags: ["autodocs"]
} satisfies Meta<typeof Button>

/* Set up stories */
export const Default: Story = {}

export const Outlined: Story = {
	args: {
		mode: "outlined"
	}
}

export const CallToAction: Story = {
	args: {
		mode: "cta",
		label: "Click me now!"
	}
}

export const WithIcon: Story = {
	args: {
		label: "Play"
	},
	render: args => (
		<Button {...args}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor">
				<path d="M8 5.14v14l11-7z" />
			</svg>
		</Button>
	)
}

export const WithIconAtRight: Story = {
	args: {
		label: "Play",
		reverse: true
	},
	render: args => (
		<Button {...args}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor">
				<path d="M8 5.14v14l11-7z" />
			</svg>
		</Button>
	)
}

export const IconOnly: Story = {
	args: {
		label: undefined
	},
	render: args => (
		<Button {...args}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor">
				<path d="M8 5.14v14l11-7z" />
			</svg>
		</Button>
	)
}

export const Danger: Story = {
	args: {
		mode: "danger"
	}
}

export const Disabled: Story = {
	args: {
		disabled: true,
		label: "Can't click me"
	}
}
