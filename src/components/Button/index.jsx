import { Container } from "./styles";

export function Button({title, ...rest}){
	Button.propTypes = title;
	return(
		<Container {...rest}>{title}</Container>
	)
}
