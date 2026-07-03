// Importa o componente Stack do Expo Router.
//
// O Stack é responsável por controlar a navegação
// entre as telas do aplicativo.
import { Stack } from 'expo-router'

// Importa o UserProvider.
//
// Ele será responsável por disponibilizar
// o UserContext para todas as telas da aplicação.
import { UserProvider } from '@/contexts/UserContext'

// Componente principal do Expo Router.
//
// O arquivo _layout.tsx é executado antes de qualquer tela.
// Tudo que estiver aqui ficará disponível para toda a aplicação.
export default function RootLayout() {

  return (

    // Envolve toda a aplicação com o UserProvider.
    //
    // Isso significa que qualquer tela poderá acessar
    // o UserContext usando useContext().
    <UserProvider>

      {/* 
        Stack controla as telas da aplicação.

        screenOptions são configurações padrão
        aplicadas a todas as telas.

        headerShown: false
        significa que a barra superior (header)
        não será exibida.
      */}
      <Stack
        screenOptions={{
          headerShown: false
        }}
      />

    </UserProvider>

  )
}