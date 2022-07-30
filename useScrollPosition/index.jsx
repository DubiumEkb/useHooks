const Page = () => {
	const scrollPosition = useScrollPosition();
	console.log(scrollPosition);

	return (<div>{scrollPosition}</div>)
}

export default Page