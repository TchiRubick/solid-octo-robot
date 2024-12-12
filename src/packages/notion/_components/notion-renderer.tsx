import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

export function NotionPageRenderer({ markdown }: { markdown: string }) {
  return (
    <div className="text-foreground max-w-[900px] mx-auto px-12 py-16">
      <article className="notion-page">
        <ReactMarkdown
          className="notion-content"
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            h1: ({ node, ...props }) => (
              <h1
                className="
                  text-4xl
                  font-bold
                  mb-6
                  text-black
                  tracking-tight
                  leading-4
                  border-none
                  pb-2"
                {...props}
              />
            ),
            h2: ({ node, ...props }) => (
              <h2
                className="
                  text-3xl
                  font-semibold
                  text-foreground
                  mt-8
                  mb-4
                  border-none
                  leading-3
                  pb-1"
                {...props}
              />
            ),
            h3: ({ node, ...props }) => (
              <h3
                className="
                  text-2xl
                  font-semibold
                  text-foreground
                  mt-8
                  mb-4
                  border-none
                  leading-3
                  pb-1"
                {...props}
              />
            ),
            p: ({ node, ...props }) => (
              <p
                className="
                  text-foreground
                  text-[16px]
                  leading-[1.6]
                  mb-4"
                {...props}
              />
            ),
            a: ({ node, ...props }) => (
              <a
                className="
                  text-[#0070F3]
                  hover:underline
                  transition-colors"
                {...props}
              />
            ),
            ul: ({ node, ...props }) => (
              <ul
                className="
                  list-disc
                  pl-6
                  mb-4
                  text-[16px]
                  leading-[1.6]
                  marker:text-[#9B9B9B]"
                {...props}
              />
            ),
            ol: ({ node, ...props }) => (
              <ol
                className="
                  list-decimal
                  pl-6
                  mb-4
                  leading-[1.6]
                  text-[16px]"
                {...props}
              />
            ),
            blockquote: ({ node, ...props }) => (
              <blockquote
                className="
                  border-l-4
                  border-[#9B9B9B]
                  pl-4
                  my-4
                  italic
                  text-[#6A6A6A]"
                {...props}
              />
            ),
            hr: ({ node, ...props }) => (
              <hr
                className="
                  my-6
                  border-t-2
                  border-[#EEEEEE]"
                {...props}
              />
            ),
          }}
        >
          {markdown}
        </ReactMarkdown>
      </article>
    </div>
  );
}
