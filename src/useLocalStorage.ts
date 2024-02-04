import { useState } from 'react'

interface LocalStorageFunctions {
	setItem: (newValue: string) => void
	removeItem: () => void
}

export function useLocalStorage(key: string): [string, LocalStorageFunctions] {
	const storedValue = localStorage.getItem(key)
	const [token, setToken] = useState<string | null>(
		storedValue || 'начальный токен'
	)

	const setItem = (newValue: string) => {
		setToken(newValue)
		localStorage.setItem(key, newValue)
	}

	const removeItem = () => {
		setToken('')
		localStorage.removeItem(key)
	}

	const lsFunctions: LocalStorageFunctions = { setItem, removeItem }

	return [token || '', lsFunctions]
}
