import { Container, Profile } from "./styles";
import { Search } from "../Search";
import { FiSearch } from "react-icons/fi";

export function Header({ title }){
	Header.propTypes = title;

  return(
    <Container>
      <h1>{title}</h1>
			<Search placeholder="Pesquisar por título" title="search" icon={FiSearch}/>
      <Profile >
        <div>
          <strong>Lucas Sampaio</strong>
          <span>Sair</span>
        </div>
        <img src="https://github.com/LucassSampaio.png" alt="Foto do usuário" />
      </Profile>

    </Container>
  )
}
