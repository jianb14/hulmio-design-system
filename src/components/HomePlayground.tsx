import { useState } from "react";
import { ArrowUpRight, Check, Code2 } from "lucide-react";
import { Badge, Button, Checkbox, CodeBlock, Input, Select, Tabs } from "hulmio-ui";
import { BrandMark } from "./ui";

export function HomePlayground({ compact = false }: { compact?: boolean }) {
  const [selected, setSelected] = useState("form");
  const [formVariant, setFormVariant] = useState<"outline" | "filled" | "underline">("outline");
  const [submitted, setSubmitted] = useState(false);
  const [buttonVariant, setButtonVariant] = useState<"primary" | "outline" | "soft">("primary");
  const [inputVariant, setInputVariant] = useState<"outline" | "filled" | "underline">("outline");
  const [badgeVariant, setBadgeVariant] = useState<"solid" | "soft" | "outline">("soft");
  const [tabVariant, setTabVariant] = useState<"segmented" | "underline" | "pill">("segmented");
  const [message, setMessage] = useState("");
  const options = (values: string[]) => values.map(value => ({ value, label: value.charAt(0).toUpperCase() + value.slice(1) }));
  const samples = [
    {
      value: "form", label: "Form", variant: formVariant, options: options(["outline", "filled", "underline"]),
      onChange: (value: string) => setFormVariant(value as typeof formVariant),
      preview: <form className="h-playground-form" onSubmit={event => { event.preventDefault(); setSubmitted(true); }}><h3>Sign-in form</h3><Input label="Email address" type="email" required autoComplete="email" placeholder="you@example.com" variant={formVariant} /><Checkbox label="Remember me" /><Button type="submit" fullWidth>Continue</Button><p role="status">{submitted ? "Form submitted locally." : "Built with Input, Checkbox and Button."}</p></form>,
      code: `<Input label="Email address" type="email" variant="${formVariant}" />`,
    },
    {
      value: "button", label: "Button", variant: buttonVariant, options: options(["primary", "outline", "soft"]),
      onChange: (value: string) => setButtonVariant(value as typeof buttonVariant),
      preview: <div className="h-playground-actions"><div><Button variant={buttonVariant} onClick={() => setMessage("Button clicked.")}>Create project</Button><Button variant="ghost" onClick={() => setMessage("Action cancelled.")}>Cancel</Button></div><p role="status">{message || "Try an action. Change its emphasis."}</p></div>,
      code: `<Button variant="${buttonVariant}">Create project</Button>`,
    },
    {
      value: "input", label: "Input", variant: inputVariant, options: options(["outline", "filled", "underline"]),
      onChange: (value: string) => setInputVariant(value as typeof inputVariant),
      preview: <Input label="Project name" placeholder="Your next project" variant={inputVariant} helper="A familiar field, styled for your interface." />,
      code: `<Input label="Project name" variant="${inputVariant}" />`,
    },
    {
      value: "badge", label: "Badge", variant: badgeVariant, options: options(["solid", "soft", "outline"]),
      onChange: (value: string) => setBadgeVariant(value as typeof badgeVariant),
      preview: <div className="h-playground-badges"><Badge variant={badgeVariant}>Draft</Badge><Badge variant={badgeVariant} tone="success">Published</Badge><Badge variant={badgeVariant} tone="warning">In review</Badge></div>,
      code: `<Badge variant="${badgeVariant}" tone="success">Published</Badge>`,
    },
    {
      value: "tabs", label: "Tabs", variant: tabVariant, options: options(["segmented", "underline", "pill"]),
      onChange: (value: string) => setTabVariant(value as typeof tabVariant),
      preview: <Tabs label="Workspace sections" variant={tabVariant} items={[{ value: "overview", label: "Overview", content: <p>Keep related views in one place.</p> }, { value: "activity", label: "Activity", content: <p><Check size={15} /> Your components are ready to use.</p> }]} />,
      code: `<Tabs variant="${tabVariant}" items={items} />`,
    },
  ];
  const active = samples.find(sample => sample.value === selected) ?? samples[0];
  return <div className="h-playground" data-ui>
    <header className="h-playground-header"><span><BrandMark size={21} /> Component playground</span><Badge variant="outline">React 19</Badge></header>
    <div className="h-playground-body"><Tabs className="h-playground-tabs" label={compact ? "Hero component playground" : "Assembled component playground"} variant="underline" value={selected} onValueChange={value => { setSelected(value); setMessage(""); }} items={samples.map(sample => ({ value: sample.value, label: sample.label, content: <>
      <div className="h-playground-stage">{sample.preview}</div>
      <div className="h-playground-toolbar"><Select label={`${sample.label} variant`} value={sample.variant} onValueChange={sample.onChange} options={sample.options} /><a href={`#/components/${sample.value}`} aria-label={`${sample.label} documentation`}>Documentation <ArrowUpRight size={15} /></a></div>
    </> }))} /></div>
    <div className="h-playground-source"><span aria-label="JSX preview"><Code2 size={16} /></span><CodeBlock code={active.code} language="tsx" /></div>
  </div>;
}
