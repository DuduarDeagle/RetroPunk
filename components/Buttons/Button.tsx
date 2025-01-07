/* Import dependencies */
import * as React from "react"
import clsx from "clsx"

/* Import styles */
import "./Button.css"

/* Define interfaces */
interface Props
	extends React.DetailedHTMLProps<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	/**
	 * What is the button style?
	 */
	mode?: "transparent" | "cta" | "danger"
	/**
	 * Text to be displayed on the button
	 */
	label?: string
	/**
	 * Specifies the icon position. If true, the icon is positioned at the end
	 */
	reverse?: boolean
}

/* Set up a button component */
export const Button: React.FC<Props> = ({
	mode,
	label,
	reverse,
	children,
	...props
}) => {
	return (
		<button
			className={clsx(
				"btn",
				!label && "btn--icon",
				mode === "transparent" && "btn--transparent",
				mode === "cta" && "btn--cta",
				mode === "danger" && "btn--danger"
			)}
			{...props}>
			{!reverse &&
				React.Children.count(children) <= 1 &&
				React.isValidElement(children) &&
				children.type === "svg" &&
				children}
			{label && <span className="label">{label}</span>}
			{reverse &&
				React.Children.count(children) <= 1 &&
				React.isValidElement(children) &&
				children.type === "svg" &&
				children}
		</button>
	)
}
