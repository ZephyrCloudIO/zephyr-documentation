import { usePageData } from "@rspress/runtime";
import { useRef, useState } from "react";

export interface CodeProps {
	children: string;
	className?: string;
	codeHighlighter?: "prism" | "shiki";
	meta?: string;
}

export function Code(props: CodeProps) {
	const { siteData } = usePageData();
	const codeHighlighter =
		props.codeHighlighter ?? siteData.markdown.codeHighlighter;
	const { defaultWrapCode } = siteData.markdown;
	const [codeWrap, setCodeWrap] = useState(defaultWrapCode);
	const wrapButtonRef = useRef<HTMLButtonElement>(null);
	const codeBlockRef = useRef<HTMLDivElement>();

	const { className } = props;
	const language = className?.replace(/language-/, "");

	if (!language) {
		return <code {...props} />;
	}
}
