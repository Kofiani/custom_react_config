import { createContext, useContext, useState } from 'react'

const WithContext = createContext(0);

export const useCustomHook = () => {
	return useContext(WithContext)
}

export const WithContextProvider = ({ children }) => {
	const [stateHere, setStateHere] = useState(1)

	const changeState = () => {
		setStateHere(num => num * 2)	
	}

    const getState = () => {
        return stateHere
    }

	return (
		<WithContext.Provider value={{ changeState, stateHere}}>
			{children}
		</WithContext.Provider>
	)
}