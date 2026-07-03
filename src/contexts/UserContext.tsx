// Importa as funções necessárias do React.
//
// createContext -> cria um Context, ou seja, um espaço para compartilhar
// informações entre vários componentes.
//
// useState -> cria uma variável de estado.
import { createContext, useState } from 'react'

/*
  Cria o UserContext.

  Todo Context precisa de um valor inicial.

  Neste caso, o Context possui duas informações:

  name -> armazenará o nome do usuário.

  setName -> função responsável por alterar o nome.
*/
export const UserContext = createContext({

  // Nome inicial.
  name: '',

  // Função vazia apenas para definir o formato do Context.
  // Depois ela será substituída pela função real do useState.
  setName: (value: string) => {}
})

/*
  UserProvider

  É o componente responsável por "fornecer"
  os dados do Context para toda a aplicação.

  Tudo que estiver dentro dele poderá acessar
  o UserContext usando useContext().
*/
export function UserProvider({

  // children representa todos os componentes
  // que estiverem dentro do Provider.
  children

}: {
  children: React.ReactNode
}) {

  /*
    Cria o estado que armazenará o nome.

    name -> valor atual.

    setName -> função que altera esse valor.
  */
  const [name, setName] = useState('')

  /*
    Disponibiliza os dados para toda a aplicação.

    value é o objeto compartilhado.

    Sempre que name mudar,
    todos os componentes que utilizam
    useContext(UserContext)
    serão atualizados automaticamente.
  */
  return (

    <UserContext.Provider

      value={{

        // Nome armazenado
        name,

        // Função que altera o nome
        setName

      }}

    >

      {/* Componentes que terão acesso ao Context */}
      {children}

    </UserContext.Provider>

  )
}