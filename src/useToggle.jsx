import { useReducer } from 'react'

const toggleReducer = (state, action) => {
	switch (action.type) {
		case 'toggle':
			const nextIndex = (state.valueIndex + 1) % state.values.length
			return {
				valueIndex: nextIndex,
				values: state.values
			}
		default:
			return state
	}
}

const initialState = {
	valueIndex: 0,
	values: [true, false]
}

export function useToggle(values) {
	const actualInitialState = {
		...initialState,
		values: values || initialState.values
	}

	const [state, dispatch] = useReducer(toggleReducer, actualInitialState)

	const toggle = values => {
		dispatch({ type: 'toggle', values })
	}

	return [state.values[state.valueIndex], toggle]
}
