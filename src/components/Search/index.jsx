import { Container } from './styles';
import { Input } from '../Input';

export function Search({title, placeholder, ...rest}){
	Search.propTypes = title, placeholder;
	return(
    <Container>
      <Input type="text" title={title} placeholder={placeholder} {...rest} />
    </Container>
  )
}
