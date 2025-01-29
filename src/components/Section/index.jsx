import { Container } from './styles';
import { Tag } from '../Tag';

export function Section({data, children}){
	Section.propTypes = data, children;
	return(
    <Container>
      {/* <h2>{data.title}</h2> */}
      {children}
      <h2>{data.title}</h2>
      <span>{data.ranking}</span>

      <p>{data.description}</p>

      { data.categorys &&
        <footer>
          {
            data.categorys.map(category => <Tag key={ category.id } title={category.name}/>)
          }
        </footer>
      }
    </Container>
  )
}
