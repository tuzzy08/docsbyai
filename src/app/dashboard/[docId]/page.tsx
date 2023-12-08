interface PageProps {
	params: {
		docId: String;
	};
}

export default function DocumentPage({ params }: PageProps) {
	const { docId } = params;
	return <div>{docId}</div>;
}
