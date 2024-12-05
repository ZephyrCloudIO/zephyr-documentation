export const CardLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<ol className="flex flex-col grid-flow-row gap-4 group/list md:grid md:grid-cols-2 ">
			{children}
		</ol>
	);
};
