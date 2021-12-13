import React, {createContext} from 'react';

// 5 - importação de componentes
import FirstComponent from './components/FirstComponent'
import SecondComponent from './components/SecondComponent'

// 6 - destructuring
import Destructuring, {Category} from './components/Destructuring';

// 7 -  useState
import State from './components/State';
import Context from './components/Context';

// 8 - type
type textOrNull = string | null

// 9 - context
interface IAppContext {
  language: string,
  framework: string,
  projects: number
}

export const AppContext = createContext<IAppContext | null>(null)

type fixed = "Isso" | "Ou" | "Aquilo"

function App() {

  // 1 - variaveis
  const name: string = "Matheus"
  const age: number = 30
  const isWorking: boolean = true

  // 2 - funções
  const userGreeting = (name:string):string => {
    return `Olá, ${name}!`
  }

  // 8 - type
  const myText:textOrNull = "Tem algum texto aqui!"
  const mySecondText:textOrNull = null

  const opa:fixed = "Ou"

  // 9 - context
  const contextValue = {
    language: "JavaScript",
    framework: "Express",
    projects: 5
  }

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <h1>React com TS</h1>
        <h2>Nome: {name}</h2>
        <p>Idade: {age}</p>
        {isWorking && (
          <p>Está trabalhando no momento</p>
        )}
        {userGreeting(name)}
        <FirstComponent />
        <SecondComponent name="Teste" />
        <Destructuring 
          title="Primeiro post" 
          content="Post muiiiito bom, sobre TS" 
          commentsQty={10} tags={["JavaScript", "TypeScript"]} 
          category={Category.TS} 
        />
        <State />
        {myText && 
          <p>Tem texto em myText</p>
        }
        {mySecondText &&
          <p>Tem texto em mySecondText</p>
        }
        {(!myText || !mySecondText) &&
          <p>Alguma das variáveis de texto está vazia!</p>
        }
      </div>
      <Context />
      </AppContext.Provider>
      
  );
}

export default App;
