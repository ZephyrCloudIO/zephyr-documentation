import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import ForkedExample from "./forked-example.mdx";
import StartFromScratch from "./start-from-scratch.mdx";
export default function RepackTabs() {
	return (
		<Tabs>
			<TabsList>
				<TabsTrigger value="tab1">Start from scratch</TabsTrigger>
				<TabsTrigger value="tab2">Fork our example</TabsTrigger>
			</TabsList>
			<TabsContent value="tab1">
				<StartFromScratch />
			</TabsContent>
			<TabsContent value="tab2">
				<ForkedExample />
			</TabsContent>
		</Tabs>
	);
}
