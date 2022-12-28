const Page = () => {
	const ref = useRef();
	const [outside, setOutside] = useState(false);

	useOnClickOutside(ref, () => setOutside(false));

	return (
		<div>
		{outside ? (
				<div ref={ref}>
					👋 Hey, I'm a modal. Click anywhere outside of me to close.
				</div>
			) : (
				<button onClick={() => setOutside(true)}>Open Modal</button>
			)}
		</div>
	);
}

export default Page