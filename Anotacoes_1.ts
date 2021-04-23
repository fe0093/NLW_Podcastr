import { type } from "node:os"

type User = {
    name: string;
    adress: {
        city: string;
        state: string;
    }
}

//Retornar o texto de boas-vindas do site
function createWelcomeMessage(user) {
    return 'Boas-Vindas, ${user.name}. Cidade: ${user.city} - ${user.state}!'
}

//A grande função do typescript é poder permitir a manutenção do código e um melhor entendimento
//quando há a necessidade de debugar um código ou entender onde estão seus defeitos e suas possíveis melhorias.

const welcomeMessage = createWelcomeMessage({
    name: 'Felipe',
    address: {
        city: 'São Paulo',
        state: 'SP'
    }
})

//Tipagem das propriedades

type ButtonProps = {
    title: string;
}

function Button(props: ButtonProps) {
    return(
        <button>{props.title}</button>
    )
}

function App() {
    return (
        <div>
        <Button title="Button 1" />
        <Button title="Button 2" />
        <Button title="Button 3" />
        </div>
    )
}