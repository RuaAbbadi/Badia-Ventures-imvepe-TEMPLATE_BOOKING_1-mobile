import React from "react";
import { Button } from "react-native-elements";
import { wp, hp } from "../Dimension/dimen";

const InputButton = ({ title, buttonType, buttonColor, ...rest }) => (
	<Button
		{...rest}
		type={buttonType}
		title={title}
		buttonStyle={{
			borderColor: buttonColor,
			borderRadius: 5,
			backgroundColor: "#333533",
		}}
		titleStyle={{ color: "#FFFFFF" }}
	/>
);

export default InputButton;
