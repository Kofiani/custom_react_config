import React from 'react';
import StatefulComponent from './StatefulComponent'
import { WithContextProvider} from './WithContext'

const App = () => {
	return (
		<WithContextProvider>
			<StatefulComponent />
		</WithContextProvider>
	)
}
export default App;
