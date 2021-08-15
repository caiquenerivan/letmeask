import { useHistory } from 'react-router'

import illustrationImg from'../assets/images/illustration.svg'
import logoIMG from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'


import { Button } from '../components/Button'
import { useAuth } from '../hooks/useAuth'

import'../styles/auth.scss'

export function Home(){
    const history = useHistory();
    const {signInWithGoogle, user} = useAuth();

    async function handleCreateRoom() {

        if(!user){
            await signInWithGoogle();
        }

        history.push('/rooms/new')
    }

    

    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="ilustração de perguntas e respostas" />
                <strong>Crie Salas de Q&amp;A ao vivo</strong>
                <p>Tire dúvidas da sua audiência em tempo real</p>
            </aside>

            <main>
                <div className="main-content">
                    <img src={logoIMG} alt="logo do Letmeask" />
                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={googleIconImg} alt="logo do Google" />
                        Crie sua sala com o google
                    </button>

                    <div className="separator">ou entre em uma sala</div>

                    <form>
                        <input 
                            type="text" 
                            placeholder="Digite o código da sala"
                        />

                        <Button type="submit">
                            Entrar na Sala
                        </Button>

                    </form>
                </div>
            </main>
        </div>
    )
}