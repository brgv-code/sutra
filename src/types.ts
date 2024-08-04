export interface BlockContent {
	type: string
	text: string
}

export interface NotionContent {
	blocks: BlockContent[]
}
