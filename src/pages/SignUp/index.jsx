import { FiLock, FiMail, FiArrowLeft , FiUser } from 'react-icons/fi';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Container, Form, Background } from './styles';

export function SignUp(){
	return(
		<Container>
			<Background/>
			<Form>
			<h1>RocketMovies</h1>
			<span>Aplicação para acompanhar tudo que assistir</span>
			<h2>Crie sua conta</h2>
				<Input type="text" title="name" placeholder="Nome" icon={FiUser}/>
				<Input type="email" title="mail" placeholder="E-mail" icon={FiMail}/>
				<Input type="password" title="password" placeholder="Senha" icon={FiLock}/>
				<Button type="submit" title="Cadastrar"/>
				<a href="#" >
					<FiArrowLeft/>
					Voltar para o login
				</a>
			</Form>
			{/* <Background/> */}
		</Container>
	)
}
