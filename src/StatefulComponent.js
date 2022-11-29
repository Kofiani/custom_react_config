import { useCustomHook } from './WithContext'

const StatefulComponent = () => {
	const { changeState, stateHere } = useCustomHook();
	return (
		<>
			<div>{stateHere}</div>
			<button onClick={changeState}>click me</button>
		</>
	)
}

export default StatefulComponent