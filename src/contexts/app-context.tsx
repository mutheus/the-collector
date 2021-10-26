import {
  createContext,
  useState,
  ReactNode,
  SetStateAction,
  Dispatch,
} from 'react'

type AppContextData = {
  headerHeight: number
  setHeaderHeight: Dispatch<SetStateAction<number>>
}

type AppProviderProps = {
  children: ReactNode
}

export const AppContext = createContext({} as AppContextData)

const AppProvider = ({ children }: AppProviderProps) => {
  const [headerHeight, setHeaderHeight] = useState(0)

  return (
    <AppContext.Provider
      value={{
        headerHeight,
        setHeaderHeight,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
