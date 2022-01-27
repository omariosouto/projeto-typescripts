
const mensagemInicial: string = 'Olá pessoas';

interface RespostaDaAPIDoGithub {
    bio: string;
    avatar_url: string;
    name: string;
}
function pegaDadosDoGithub(): Promise<RespostaDaAPIDoGithub> {
    return fetch('https://api.github.com/users/omariosouto')
        .then((resposta) => resposta.json())
        .then((respostaDaAPI) => {
            return {
                ...respostaDaAPI,
                bio: respostaDaAPI.bio,
            };
        })
}










export default function Home() {

    pegaDadosDoGithub()
        .then((dados) => {
            console.log('Dados:', dados.name);
        })

    return (
        <div>
            {mensagemInicial}
        </div>
    )
}