import { useReducer } from 'react'

const initialState = {
	valueIndex: 0
}

const toggleReducer = (state, action) => {
	switch (action.type) {
		case 'toggle':
			return {
				valueIndex: (state.valueIndex + 1) % action.values.length
			}
		default:
			return state
	}
}

export function useToggle(values = ['blue', 'orange', 'cyan', 'teal']) {
	const [state, dispatch] = useReducer(toggleReducer, initialState)

	const toggle = () => {
		dispatch({ type: 'toggle', values })
	}

	return [values[state.valueIndex], toggle]
}
