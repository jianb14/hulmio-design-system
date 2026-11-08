import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, RotateCcw, Search } from "lucide-react";
import { Button, Input } from "hulmio-ui";
import { ComponentArtwork } from "../components/ComponentArtwork";
import { ExamplePreview } from "../components/LibraryExamples";
import { SourceExample } from "../components/SourceExample";
import { componentApi } from "../lib/componentApi";
import { categories, components } from "../lib/catalog";
import type { ComponentEntry } from "../lib/catalog";
import type { LibraryDesign } from "../lib/distribution";
import { libraryFamilies } from "../lib/distribution";
import { PageIntro, SectionTitle } from "./Foundations";

export function ComponentCatalog({ route }: { route: string }) {
  const category = new URLSearchParams(route.split("?")[1]).get("category") || "All";
  const [query, setQuery] = useState("");
  const filtered = components.filter(component => {
    const family = libraryFamilies[component.id];
    return (category === "All" || component.category === category) &&
      `${component.name} ${component.description} ${component.variants.join(" ")} ${family?.exports.join(" ")} ${family?.designs.map(d => d.name).join(" ")}`.toLowerCase().includes(query.toLowerCase());
  });
  return <div className="library-page">
    <PageIntro title={category === "All" ? "Components" : category} description="Ready-to-use React components. Preview, copy, and make them yours." />
    <div className="catalog-search">
      <Input type="search" aria-label="Search components" placeholder="Search components or named imports…" value={query} onChange={event => setQuery(event.target.value)} leading={<Search size={18} />} clearable />
      <span role="status" aria-live="polite">{filtered.length} component{filtered.length === 1 ? "" : "s"}</span>
    </div>
    <nav className="category-filters" aria-label="Component categories">{["All", ...categories].map(value => <a key={value} href={`#/components${value === "All" ? "" : `?category=${encodeURIComponent(value)}`}`} className={category === value ? "active" : ""} aria-current={category === value ? "page" : undefined}>{value}<span>{value === "All" ? components.length : components.filter(component => component.category === value).length}</span></a>)}</nav>
    {filtered.length ? <div className="component-grid">{filtered.map(component => {
      return <article className="component-catalog-card library-catalog-card" key={component.id}>
        <ComponentArtwork id={component.id} name={component.name} />
        <a className="catalog-card-info library-catalog-link" href={`#/components/${component.id}`}>
          <div><h3>{component.name}</h3><ArrowUpRight size={17} aria-hidden="true" /></div>
          <p>{component.description}</p>
        </a>
      </article>;
    })}</div> : <div className="empty-state catalog-empty"><Search size={32} /><h2>No components found.</h2><p>Try a component name, category or named export.</p><Button variant="outline" onClick={() => setQuery("")}>Clear search</Button></div>}
  </div>;
}

type DetailProps = { entry: ComponentEntry; onCommand: () => void; route?: string };

function ComponentDetail({ entry, route = "" }: DetailProps) {
  const [reset, setReset] = useState(0);
  const family = libraryFamilies[entry.id];
  const basic = family.designs.filter(design => design.name === "Basic");
  const customization = family.designs.filter(design => design.name === "Customization");
  const examples = family.designs.filter(design => design.name !== "Basic" && design.name !== "Customization");
  const target = new URLSearchParams(route.split("?")[1]).get("example");
  const rows = family.exports.flatMap(name => (componentApi[name + "Props"] ?? []).map(property => ({ ...property, component: name })));
  const properties = rows.filter((row, index) => rows.findIndex(other => other.name === row.name && other.type === row.type) === index);
  useEffect(() => {
    if (!target) return;
    const element = document.getElementById(`example-${target}`);
    if (!element) return;
    const frame = requestAnimationFrame(() => element.scrollIntoView({ block: "start", behavior: "instant" }));
    return () => cancelAnimationFrame(frame);
  }, [target]);
  const titleFor = (design: LibraryDesign) => {
    if (!design.referenceId || design.referenceId === entry.id || design.referenceId === "text-area" || design.referenceId === "input-otp" || design.referenceId === "number-field" || design.referenceId === "radio-group" || design.referenceId === "modal" || design.referenceId === "toggle-button" || design.referenceId === "toggle-button-group" || design.referenceId === "combo-box") return design.name;
    if (["avatar", "progress", "calendar"].includes(entry.id)) return `${design.referenceId.split("-").map(word => word[0].toUpperCase() + word.slice(1)).join(" ")} - ${design.name}`;
    return design.name;
  };
  const renderExample = (design: LibraryDesign) => <article className={`library-design ${entry.id === "button" ? "library-button-design" : ""}`} id={`example-${design.id}`} key={design.id} data-example-id={design.id} data-legacy-example={design.id?.includes("--legacy-") || undefined} data-library-design={design.exportName} aria-labelledby={`title-${design.id}`}>
    <header><h3 id={`title-${design.id}`}>{titleFor(design)}</h3></header>
    <ExamplePreview code={design.code} label={titleFor(design)}>
      <div className={`library-live-example library-live-${entry.id}`}><SourceExample sourcePath={design.sourcePath!} /></div>
    </ExamplePreview>
  </article>;
  const index = <nav aria-label="On this page"><a href={`#/components/${entry.id}?example=usage`}>Usage</a>{family.designs.map(design => <a key={design.id} href={`#/components/${entry.id}?example=${design.id}`} aria-current={target === design.id ? "location" : undefined}>{titleFor(design)}</a>)}<a href={`#/components/${entry.id}?example=api`}>API</a><a href={`#/components/${entry.id}?example=accessibility`}>Accessibility</a></nav>;
  return <div className={`library-page library-component-${entry.id}`}>
    <PageIntro title={entry.name} description={entry.description} />
    <div className="library-page-tools"><a href="#/using-hulmio">Installation <ArrowUpRight size={14} /></a><button className="library-reset" type="button" onClick={() => setReset(value => value + 1)} aria-label="Reset examples"><RotateCcw size={14} />Reset</button></div>
    <details className="library-mobile-index"><summary>On this page</summary>{index}</details>
    <div className="library-document-layout">
      <div className="library-document-content">
        <section id="example-usage" className="library-doc-section"><h2>Usage</h2><pre className="library-import"><code>{`import { ${family.exports.join(", ")} } from "hulmio-ui";\nimport "hulmio-ui/styles.css";`}</code></pre></section>
        <div key={reset} className="library-source-sections">
          {basic.map(renderExample)}
          <section className="library-doc-section"><h2>Examples</h2></section>
          <div className="library-design-grid library-design-grid-wide">{examples.map(renderExample)}</div>
          {customization.length > 0 && <><section className="library-doc-section"><h2>Customization</h2><p>Use native props, <code>className</code>, <code>style</code>, and scoped <code>--hulmio-*</code> variables to fit your interface.</p></section>{customization.map(renderExample)}</>}
        </div>
        <section id="example-api" className="library-doc-section library-api-reference"><h2>API</h2><div className="library-export-list"><span>Public imports</span><div>{family.exports.map(name => <code key={name}>{name}</code>)}</div></div>
          <p>{entry.notes}</p>
          {properties.length > 0 && <div className="library-api-scroll" tabIndex={0} role="region" aria-label={`${entry.name} props`}><table><caption>Component props</caption><thead><tr><th scope="col">Prop</th><th scope="col">Type</th><th scope="col">Default</th><th scope="col">Required</th></tr></thead><tbody>{properties.map(property => <tr key={`${property.component}-${property.name}`}><th scope="row"><code>{property.name}</code>{property.description && <p>{property.description}</p>}</th><td><code>{property.type}</code></td><td><code>{property.defaultValue ?? "—"}</code></td><td>{property.required ? "Yes" : "No"}</td></tr>)}</tbody></table></div>}
          <p className="library-usage-note">The exported TypeScript props include the complete supported interface. Stateful examples show controlled values and callbacks together.</p>
        </section>
        <section id="example-accessibility" className="library-doc-section"><h2>Accessibility</h2><p>{entry.category === "Forms" || entry.category === "Selection" ? "Give each control a visible label or accessible name. Connect instructions and errors to the control, and communicate required, invalid and disabled states. Keep values usable with a keyboard and include named controls in your form." : entry.category === "Overlays" ? "Give the overlay a title and each icon action an accessible name. Keep focus inside modal content, provide a permitted close action, and return focus to the opener. Configure dismissal deliberately for confirmations." : entry.category === "Actions" || entry.category === "Navigation" ? "Use descriptive labels and visible keyboard focus. Use buttons for actions and links for destinations. Preserve keyboard operation and expose selected, expanded or disabled states." : "Keep the content readable and meaningful without relying on color alone. Preserve semantic structure, accessible names for controls, and text alternatives for visual information."}</p><p>Animations respect reduced motion. Preview both light and dark themes and check the example with Tab, Shift+Tab, Enter, Space and relevant Arrow keys.</p></section>
        <SectionTitle label="Related components" />
        <div className="related-components">{components.filter(component => component.category === entry.category && component.id !== entry.id).slice(0, 3).map(component => <a href={`#/components/${component.id}`} key={component.id}><span>{component.name}</span><ArrowRight size={16} /></a>)}</div>
      </div>
      <aside className="library-page-index"><span>On this page</span>{index}</aside>
    </div>
  </div>;
}

export function ComponentPage(props: DetailProps) {
  return <ComponentDetail key={props.entry.id} {...props} />;
}
