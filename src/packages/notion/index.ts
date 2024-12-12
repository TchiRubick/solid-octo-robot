import { env } from "@/env"
import { Client } from "@notionhq/client"
import { NotionToMarkdown } from "notion-to-md"
import { cache } from 'react'

// Initialize Notion client
const notion = new Client({
  auth: env.NOTION_INTEGRATION_SECRET
})

const n2m = new NotionToMarkdown({
  notionClient: notion
})

// Cached function to fetch Notion page content
export const getNotionPage = cache(async (pageId: string) => {
  try {
    // Fetch page blocks
    const mdBlocks = await n2m.pageToMarkdown(pageId)

    // Convert to markdown string
    const markdown = n2m.toMarkdownString(mdBlocks).parent

    return markdown
  } catch (error) {
    console.error("Notion page fetch error:", error)
    return "# Error\n\nCould not fetch page content"
  }
})
