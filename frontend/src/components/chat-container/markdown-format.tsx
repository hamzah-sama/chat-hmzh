import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Props {
  content: string;
}
export const Markdown = ({ content }: Props) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h2: ({ children }) => (
          <h2 className="mt-6 mb-3 text-lg font-semibold">{children}</h2>
        ),

        h3: ({ children }) => (
          <h3 className="mt-5 mb-2 text-base font-semibold">{children}</h3>
        ),

        p: ({ children }) => (
          <p className="mb-4 leading-7 last:mb-0">{children}</p>
        ),

        ul: ({ children }) => (
          <ul className="mb-4 ml-5 list-disc space-y-1">{children}</ul>
        ),

        ol: ({ children }) => (
          <ol className="mb-4 ml-5 list-decimal space-y-1">{children}</ol>
        ),

        li: ({ children }) => <li className="leading-7">{children}</li>,
        a: ({ children, href }) => (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary underline underline-offset-4 hover:opacity-80"
          >
            {children}
          </a>
        ),

        blockquote: ({ children }) => (
          <blockquote className="my-4 border-l-2 pl-4 text-muted-foreground">
            {children}
          </blockquote>
        ),

        pre: ({ children }) => (
          <pre className="my-4 overflow-x-auto rounded-xl bg-zinc-950 p-4">
            {children}
          </pre>
        ),

        code({ children, className }) {
          if (className) {
            return <code className={className}>{children}</code>;
          }

          return (
            <code className="rounded bg-muted px-1.5 py-0.5 text-[13px]">
              {children}
            </code>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
};
