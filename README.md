# Hulmio · gallery and reusable UI

A React + TypeScript design gallery with a shared local UI package. The library provides 104 component families with 1,147 live import examples
and shared theme values. The website has a navbar-first
homepage and a sidebar inside the library and documentation.

The selected brand is **Hulmio** and the local package is **`hulmio-ui`**. The
checkout directory is named `hulmio`. Historical research and work-log entries
retain prior names.

GitHub repository: [jianb14/hulmio-design-system](https://github.com/jianb14/hulmio-design-system).

**Owner guide:** [Start here, in Taglish](docs/START-HERE.md).
Read [the work log](docs/WORK-LOG.md) for completed changes and validation, and
[the release guide](docs/RELEASING.md) for the later npm publishing process.
The [skills guide](docs/SKILLS-PLAN.md) lists installed workflows and examples of
how to invoke them in chat.

## Current stage

- Local `hulmio-ui` version 0.1.0, protected with `private: true`.
- All 104 families have real package exports and live import examples.
- The catalog keeps two compact columns on phones, with static component artwork.
  Sidebar links use text, navbar icon controls use equal 44px touch areas with
  circular mobile hover backgrounds, and
  theme changes crossfade while respecting reduced motion. Foundations includes
  an Accessibility guide with a keyboard-usable example and a shipping checklist.
- The homepage has a bounded component playground, a composed form, and a distinct
  settings preview. Short entrances run once on arrival on desktop and mobile,
  skipping readable content after fast scrolling. The hero backdrop stays steady;
  smaller screens have a layered composition and reduced motion stays static.
- Component pages keep previews visible above faded code excerpts with centered **Expand code** controls and local copy feedback. Demo buttons do
  not create global notifications. The sidebar and page headings use a compact
  docs layout without a top breadcrumb or decorative overlines.
- Twenty added families include Hover Card, Tree View, Calendar, ListBox, Code Block, Resizable panels, and more.
- Button, Input, Card, Badge, and Tabs expose useful visual variants and states. Customize them
  in other React apps with native props, `className`, `style`, and `--hulmio-*` CSS variables.
- See [component coverage](docs/COMPONENT-COVERAGE.md) for the inventory and limits.
- Website fonts: self-hosted Onest (primary), Google Sans Flex (secondary), and IBM Plex Mono (code).
  The UI package inherits the consuming app's font.
- The **Using Hulmio** page documents local installation and has a live example.
- No npm release or hosted website deployment is part of this local preparation.

## Component documentation

The component pages now include separate Basic, Examples, Customization, API and
Accessibility sections, with a responsive page index and stable example links.
All 73 HeroUI v3.2.7 reference pages are mapped to Hulmio examples; the existing
Hulmio-only families retain their own use-case checklists. Hulmio keeps its own
styles and public APIs. [Coverage targets](docs/HEROUI-PARITY.md) and the
[implementation tracker](docs/HEROUI-IMPLEMENTATION.json) distinguish source
coverage from independently verified behavior.

The 20 added entries cover field helpers, color editing, DateField/TimeField,
Autocomplete, TagGroup, CloseButton, Link, DisclosureGroup, Surface and Sheet.
Examples are actual modules under `src/examples`; their displayed source is
compiled into the registry by `npm run generate:examples`. `npm run check:coverage`
checks each pinned topic and exact source agreement.

## Commands

From the `hulmio` folder:

```sh
npm install
npm run dev
```

On Windows PowerShell, use `npm.cmd` if script execution blocks `npm.ps1`.

| Command | Purpose |
| --- | --- |
| `npm run dev` | Build the library once, then start the gallery with source updates |
| `npm run brand:sync` | Generate the favicon from the same H mark used by the website |
| `npm run build` | Build library, check website TypeScript, and build gallery |
| `npm run build:ui` | Generate shared theme CSS and build package JS, CSS, and types |
| `npm run pack:ui` | Build and create `artifacts/hulmio-ui-0.1.0.tgz` |
| `npm run check:package` | Install the tarball in an independent consumer, build the documented example, and run browser checks |
| `npm test` | Run gallery and usage-guide Playwright checks |
| `npm audit` | Check registry advisories for the installed dependency graph |

`check:package` needs registry access for its consumer's first dependency install
and installed Google Chrome. Gallery tests use Google Chrome too. Generated
artifacts, browser results, and the consumer fixture stay out of Git.

## Source map

| Location | Purpose |
| --- | --- |
| `packages/ui/src/` | Shared component implementations and package styles |
| `packages/ui/src/themes.json` | Source for semantic theme values used by CSS and gallery swatches |
| `packages/ui/README.md` | Installation, component props, themes, and package limits |
| `src/components/ui.tsx` | Re-exports package components; keeps remaining gallery-only primitives |
| `src/components/LibraryExamples.tsx` | Real package examples, variant controls, and copyable imports |
| `src/components/demos.tsx` | Earlier reference compositions, labeled separately |
| `src/pages/UsingHulmio.tsx` | Website installation guide and live package example |
| `src/lib/distribution.ts` | Package metadata, availability labels, and quick-start sample |
| `src/lib/brand.json` | Shared H mark geometry, wordmark, and favicon colors |
| `src/lib/preferences.ts` | Migrate previously saved gallery preferences to Hulmio keys |
| `src/styles/website.css` | Navbar, home page, library shell, responsive layout and readability |
| `public/fonts/` | Self-hosted website fonts with OFL notices and source hashes |
| `scripts/` | Build, packing, and independent consumer validation |
| `skills/` | Maintained sources for the installed Hulmio component and release skills |
| `docs/` | Owner guide, work log, and release process |

Examples use local state. Sign-in previews do not authenticate accounts and
selected files stay on the device. App authentication and data security remain the
responsibility of projects using Hulmio. Hosting metadata is retained in `.openai/`;
local builds produce the website in `dist/` and the library in `packages/ui/dist/`.
