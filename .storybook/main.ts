import type { StorybookConfig } from "@storybook/react-webpack5"

const config: StorybookConfig = {
	stories: ["../components/**/*.mdx", "../components/**/*.stories.tsx"],
	addons: [
		"@storybook/addon-webpack5-compiler-swc",
		{
			name: "@storybook/addon-postcss",
			options: {
				postcssLoaderOptions: {
					implementation: require("postcss")
				}
			}
		},
		"@storybook/addon-onboarding",
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@chromatic-com/storybook",
		"@storybook/addon-interactions"
	],
	framework: {
		name: "@storybook/react-webpack5",
		options: {
			builder: {
				useSWC: true
			}
		}
	},
	docs: {
		autodocs: "tag",
		defaultName: "Documentation"
	},
	core: {
		disableTelemetry: true
	}
}
export default config
