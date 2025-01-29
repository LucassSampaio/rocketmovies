import { Container } from "./styles";

export function Tag({title, ...rest}){
	// Tag.propTypes = title;
	return(
		<Container {...rest}>
			{title}
		</Container>
	)
}
