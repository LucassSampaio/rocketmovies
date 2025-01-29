import { Container } from "./styles";

export function Button({title, icon:Icon,...rest}){
	Button.propTypes = title, Icon;
	return(
		<Container type="button" {...rest}>
			{Icon && <Icon size={20}/>}
			{title}
		</Container>
	)
}
