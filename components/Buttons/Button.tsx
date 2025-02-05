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
	mode?: "outlined" | "cta" | "danger"
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
const Button: React.FC<Props> = ({
	className,
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
				mode === "outlined" && "btn--outlined",
				mode === "cta" && "btn--cta",
				mode === "danger" && "btn--danger",
				className
			)}
			{...props}>
			{!reverse && React.Children.count(children) <= 1 && children}
			{label && <span className="label">{label}</span>}
			{reverse && React.Children.count(children) <= 1 && children}
		</button>
	)
}

/* Export the button component by default */
export default Button
