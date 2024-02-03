import { useEffect, useState } from 'react'

export interface IPost {
	userId: number
	id: number
	title: string
	body: string
}

interface IFetchProps {
	data: IPost[]
	isLoading: boolean
	error: Error | null
	refetch: (params?: Record<string, any>) => Promise<void>
}

export function useFetch(url: string): IFetchProps {
	const [data, setData] = useState<IPost[]>([])
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState<Error | null>(null)

	const fetchData = async (url: string) => {
		try {
			const response = await fetch(url)

			if (!response.ok) {
				throw new Error(`error! Status: ${response.status}`)
			}

			const data = await response.json()
			setData(data)
		} catch (error) {
			setError(error instanceof Error ? error : new Error('Произошла ошибка'))
		} finally {
			setIsLoading(false)
		}
	}

	useEffect(() => {
		fetchData(url)
	}, [url])

	const refetch = async (params?: Record<string, any>) => {
		setIsLoading(true)
		try {
			const urlWithParams = params
				? `${url}?${new URLSearchParams(params.params)}`
				: url
			await fetchData(urlWithParams)
		} finally {
			setIsLoading(false)
		}
	}

	return { data, isLoading, error, refetch }
}
