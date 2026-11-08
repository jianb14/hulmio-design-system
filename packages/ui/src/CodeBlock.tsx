import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import { Highlight } from "prism-react-renderer";
import { cn } from "./utils";

export interface CodeBlockProps extends Omit<HTMLAttributes<HTMLPreElement>, "children"> {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
}

export const CodeBlock = forwardRef<HTMLPreElement, CodeBlockProps>(({ code, language = "tsx", showLineNumbers, className, ...props }, ref) => (
  <Highlight code={code.trimEnd()} language={language}>
    {({ tokens }) => <pre {...props} ref={ref} data-hulmio-ui="code-block" data-line-numbers={showLineNumbers || undefined} className={cn("h-code-block", className)} tabIndex={props.tabIndex ?? 0}><code>{tokens.map((line, index) => <span className="h-code-line" key={index}>{line.map((token, tokenIndex) => <span className={cn("token", ...token.types)} key={tokenIndex}>{token.empty ? "\n" : token.content}</span>)}{"\n"}</span>)}</code></pre>}
  </Highlight>
));
CodeBlock.displayName = "CodeBlock";
