// Import useHooks
import useWindowSize from "./useWindowSize"

const App = () => {
	const { width, height } = useWindowSize()

	return (
		<>
			{width}px / {height}px
		</>
	)
}

export default App
