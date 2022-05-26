import React, { useEffect } from 'react'

const Test = () => {

	useEffect(() => {

		console.log('Esta es la funcion test')
	
		return () => {
		}
	}, [])
	

	return (
		<div>test</div>
	)
}

export default Test