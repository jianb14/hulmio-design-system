const ids = new Set('slider,input,text-area,input-otp,input-group,form,checkbox,checkbox-group,radio-group,switch,select,combo-box,autocomplete,number-field,date-field,time-field,date-picker,date-range-picker,color-picker,color-area,color-field,color-slider,color-swatch,color-swatch-picker,description,error-message,field-error,fieldset,label,text-field,search-field,tag-group'.split(','));
const optionData = '[{value:"design",label:"Design",description:"Interfaces and systems",group:"Product"},{value:"engineering",label:"Engineering",description:"Build reliable products",group:"Product"},{value:"research",label:"Research",description:"Understand people",group:"Insights"}]';
const tagData = '[{id:"design",label:"Design"},{id:"engineering",label:"Engineering"},{id:"research",label:"Research"}]';
const slugify = value => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const result = (imports, body, setup = '', rest = {}) => ({ imports, body, setup, ...rest });
const surface = body => `<div style={{padding:24,background:"var(--hulmio-subtle, #edf1e8)",borderRadius:16,width:"100%"}}>${body}</div>`;
const row = body => `<div style={{display:"flex",gap:16,flexWrap:"wrap",alignItems:"center"}}>${body}</div>`;
const form = (body, imports, setup = '') => result(`Form, Button, ${imports}`, `<Form onSubmit={event => {event.preventDefault(); setSubmitted(Object.fromEntries(new FormData(event.currentTarget)));}}>${body}<Button type="submit">Submit</Button><Button type="reset" variant="outline">Reset</Button><output aria-live="polite">{JSON.stringify(submitted)}</output></Form>`, `const [submitted,setSubmitted] = React.useState<Record<string, FormDataEntryValue>>({});\n${setup}`);

function fields(id, title) {
  const component = ({'text-field':'TextField','search-field':'SearchField','number-field':'NumberField','date-field':'DateField','time-field':'TimeField','color-field':'ColorField'})[id];
  let props = 'label="'+({'text-field':'Display name','search-field':'Search projects','number-field':'Budget','date-field':'Start date','time-field':'Meeting time','color-field':'Brand color'})[id]+'"';
  let setup = '', extraImports;
  const numeric = id === 'number-field';
  const date = id === 'date-field';
  const time = id === 'time-field';
  const color = id === 'color-field';
  let initial = numeric ? '1200' : color ? '"#284c3f"' : '""';
  if (date || time) { extraImports = `import { ${date ? 'parseDate, parseDateTime' : 'parseTime'} } from "@internationalized/date";`; initial = date ? 'parseDate("2026-11-06")' : 'parseTime("09:30")'; props += ` defaultValue={${initial}}`; }
  else props += numeric ? ' defaultValue={1200}' : color ? ' defaultValue="#284c3f"' : ' placeholder="Type here…"';
  if (title === 'Variants') return result(component, row(['outline','filled','underline'].map(variant => `<${component} ${props} variant="${variant}" />`).join('')), '', {extraImports});
  if (/Description/.test(title)) props += ' description="This value is shared with your team."';
  if (/Required/.test(title)) props += ' isRequired';
  if (/Disabled/.test(title)) props += ' isDisabled';
  if (/Full Width/.test(title)) props += ' fullWidth';
  if (/Validation|Error Message/.test(title)) props += color ? ' isInvalid error="Choose a valid CSS color."' : numeric ? ' minValue={100} maxValue={5000} validate={value => value > 3000 ? "Budget must be 3000 or less." : null} description="Allowed budget: 100 to 3000."' : date ? ' minValue={parseDate("2026-11-01")} maxValue={parseDate("2026-12-31")} description="Choose a date in November or December 2026."' : time ? ' minValue={parseTime("09:00")} maxValue={parseTime("17:00")} description="Office hours: 09:00–17:00."' : ' isRequired minLength={3} validate={value => value.includes("admin") ? "This name is reserved." : null} description="At least three characters. Admin is reserved."';
  if (title === 'Controlled') { props = props.replace(/ defaultValue=\{[^}]+\}| defaultValue="[^"]+"/g,''); setup = `const [value,setValue] = React.useState${date || time ? `<ReturnType<typeof ${date ? 'parseDate' : 'parseTime'}> | null>` : color ? '<Color | null>' : ''}(${color ? 'parseColor("#284c3f")' : initial});`; props += ' value={value} onChange={setValue}'; }
  if (title === 'Granularity') { props = props.replace('parseDate("2026-11-06")','parseDateTime("2026-11-06T14:30:15")'); props += ' granularity="second" hourCycle={24}'; }
  if (title === 'Step Values') props += ' step={50} minValue={0} maxValue={5000}';
  if (title === 'Format Options') props += ' formatOptions={{style:"currency",currency:"PHP",maximumFractionDigits:2}}';
  if (title === 'Channel Editing') return result('ColorField', row(['red','green','blue','alpha'].map(channel=>`<ColorField label="${channel}" colorSpace="rgb" channel="${channel}" defaultValue="rgb(40, 76, 63)" />`).join('')));
  if (/Icons/.test(title)) props += ' prefix={<Search size={16} aria-hidden="true" />}';
  if (title === 'Custom Icons' && numeric) props += ' decrementIcon={<ChevronDown size={16} />} incrementIcon={<ChevronUp size={16} />}';
  if (title === 'With Chevrons') props += ' decrementIcon={<ChevronDown size={16} />} incrementIcon={<ChevronUp size={16} />}';
  if (title === 'With Keyboard Shortcut') props += ' suffix={<kbd>⌘ K</kbd>} onKeyDown={event => {if (event.key === "Escape") event.currentTarget.blur();}}';
  if (title === 'TextArea') props += ' multiline rows={5}';
  if (title === 'Input Types') return result(component, `<div style={{display:"grid",gap:16}}>${['email','password','url','tel'].map(type=>`<${component} label="${type}" type="${type}" />`).join('')}</div>`);
  if (title === 'Render Function') props += ' children={state => <output className="h-hint">{state.isInvalid ? "Needs attention" : state.isDisabled ? "Disabled" : "Ready to edit"}</output>}';
  if (title === 'Customization') props += ' style={{"--hulmio-radius":"18px",maxWidth:420} as React.CSSProperties} inputClassName="custom-field-entry"';
  let body = `<${component} ${props} />`;
  if (title === 'Controlled') body += `<output aria-live="polite">{${numeric ? 'value' : color ? 'value?.toString("hex")' : date || time ? 'value?.toString()' : 'value'}}</output>`;
  if (/Surface/.test(title)) body = surface(body);
  let imports = component;
  if (title === 'Controlled' && color) imports += ', parseColor, type Color';
  if (/Form Example|With Validation|Required Field/.test(title)) { const def = form(body.replace('label=', 'name="value" label='), imports, setup); return {...def, extraImports, icons:/Icons|Chevrons/.test(title)?'Search, ChevronDown, ChevronUp':undefined}; }
  return result(imports, body, setup, {extraImports,icons:/Icons|Chevrons/.test(title)?'Search, ChevronDown, ChevronUp':undefined});
}

function simpleInput(id, title) {
  const textarea = id === 'text-area';
  const component = textarea ? 'Textarea' : 'Input';
  let props = `label="${textarea ? 'Project notes' : 'Project name'}" placeholder="${textarea ? 'Describe the project…' : 'Untitled project'}"`;
  let setup = '';
  if (title === 'Variants') return result(component,row(['outline','filled','underline'].map(variant=>`<${component} ${props} variant="${variant}" />`).join('')));
  if (title === 'Full Width') props += ' style={{width:"100%"}}';
  if (title === 'Controlled') { setup = 'const [value,setValue] = React.useState("Hulmio");'; props += ' value={value} onChange={event => setValue(event.target.value)}'; }
  if (title === 'Input Types') return result('Input', `<div style={{display:"grid",gap:16}}>${['text','email','password','number','date','url','tel','search'].map(type=>`<Input label="${type}" type="${type}" />`).join('')}</div>`);
  if (title === 'Rows and Resizing') return result('Textarea', row('<Textarea label="Compact notes" rows={2} style={{resize:"vertical"}} /><Textarea label="Long notes" rows={7} style={{resize:"both"}} />'));
  if (title === 'Customization') props += ' className="custom-input" style={{fontFamily:"monospace",letterSpacing:".03em"}}';
  let body = `<${component} ${props} />${title === 'Controlled' ? '<output aria-live="polite">{value.length} characters</output>':''}`;
  if (title === 'In Surface') body=surface(body);
  return result(component,body,setup);
}

function choices(id, title) {
  let imports='', setup='', body='';
  const controlled = title === 'Controlled' || /Render Props/.test(title);
  if (id === 'checkbox-group') {
    imports='CheckboxGroup';
    let props=`label="Project access" options={${optionData.replace(/,group:"[^"]+"/g, "")}}`;
    if (title === 'Disabled') props += ' isDisabled defaultValue={["design"]}';
    if (controlled) { setup='const [value,setValue] = React.useState<string[]>(["design"]);'; props += ' value={value} onChange={setValue}'; }
    if (title === 'Validation') props += ' isRequired validate={values => values.length < 2 ? "Choose at least two roles." : null} description="Choose at least two roles."';
    if (title === 'Features and Add-ons Example') props=`label="Subscription extras" options={[{value:"backup",label:"Daily backup",description:"₱150 per month"},{value:"support",label:"Priority support",description:"₱250 per month"},{value:"audit",label:"Audit log",disabled:true}]} defaultValue={["backup"]}`;
    if (title === 'With Custom Indicator') props += ' renderIndicator={state => state.isSelected ? "●" : "○"}';
    if (title === 'Render Function') props += ' children={state => <output>{state.isInvalid ? "Select your roles" : "Your permissions are ready"}</output>}';
    if (title === 'Indeterminate') return result('Checkbox, CheckboxGroup','<Checkbox label="All roles" checked={value.length === 3} indeterminate={value.length > 0 && value.length < 3} onChange={event => setValue(event.target.checked ? ["design","engineering","research"] : [])} /><CheckboxGroup label="Roles" options={'+optionData.replace(/,group:"[^"]+"/g, "")+'} value={value} onChange={setValue} />','const [value,setValue] = React.useState<string[]>(["design"]);');
    body=`<CheckboxGroup ${props} />${controlled?'<output>{value.join(", ") || "No roles"}</output>':''}`;
    if(title === 'Validation') return form(body,imports,setup);
  } else if (id === 'radio-group') {
    imports='RadioGroup'; let props=`label="Delivery method" options={[{value:"standard",label:"Standard",description:"3–5 business days"},{value:"express",label:"Express",description:"Next business day"},{value:"pickup",label:"Pick up",disabled:true}]} defaultValue="standard"`;
    if(title === 'Horizontal Orientation') props += ' orientation="horizontal"';
    if(title === 'Disabled') props += ' disabled';
    if(title === 'Controlled') {setup='const [value,setValue] = React.useState("standard");';props += ' value={value} onValueChange={setValue}';}
    if(title === 'Uncontrolled') props += ' onValueChange={next => setMessage(`Delivery: ${next}`)}';
    if(title === 'Uncontrolled') setup='const [message,setMessage] = React.useState("Choose a delivery method");';
    if(title === 'Validation') {props=props.replace(' defaultValue="standard"','');props += ' required name="delivery" error="Please select a delivery method."';}
    if(title === 'Custom Indicator') props += ' renderOption={(option, selected) => <span>{selected ? "◉" : "○"} {option.label}</span>}';
    if(title === 'Render Function') props += ' renderOption={(option, selected) => <strong style={{opacity:selected ? 1 : .65}}>{option.label}{selected ? " · selected" : ""}</strong>}';
    body=`<RadioGroup ${props} />${title==='Controlled'?'<output>{value}</output>':title==='Uncontrolled'?'<output>{message}</output>':''}`;
    if(title === 'Variants') body=row(['outline','soft'].map(variant=>`<RadioGroup ${props} variant="${variant}" />`).join(''));
    if(title === 'Delivery & Payment') {body+='<RadioGroup label="Payment method" options={[{value:"card",label:"Credit card"},{value:"bank",label:"Bank transfer"}]} name="payment" defaultValue="card" />';return form(body,imports,setup);}
  } else {
    const sw = id === 'switch'; const component = sw ? 'Switch':'Checkbox'; imports=component;
    let props=`label="${sw?'Email notifications':'Accept the terms'}"`;
    if(/Disabled/.test(title)) props += ' disabled defaultChecked';
    if(title==='Without Label') props='aria-label="Email notifications"';
    if(title==='Default Selected') props += ' defaultChecked';
    if(title==='With Description') props += ' hint="Manage this preference at any time."';
    if(title==='Invalid') props += ' required error="Accept the terms to continue."';
    if(title==='Indeterminate') props += ' indeterminate';
    if(title==='Full Rounded') props += ' fullRounded';
    if(title==='External Label') return result('Checkbox, Label','<Label htmlFor="external-consent">Accept the terms</Label><Checkbox id="external-consent" aria-label="Accept the terms" />');
    if(controlled) {setup='const [checked,setChecked] = React.useState(false);';props += ' checked={checked} onChange={event => setChecked(event.target.checked)}';}
    if(title==='Custom Indicator') props += ' renderIndicator={state => state.selected ? "◆" : "◇"}';
    if(title==='Render Function'||title==='Render Props') props += ' renderLabel={state => state.selected ? "Notifications enabled" : "Notifications paused"}';
    if(title==='Label Position') return result('Switch',row('<Switch label="Label before" labelPosition="start" /><Switch label="Label after" labelPosition="end" />'));
    if(title==='With Icons') props += ' thumbIcon={<Sun size={11} aria-hidden="true" />}';
    body=`<${component} ${props} />${controlled?'<output aria-live="polite">{checked ? "Enabled" : "Disabled"}</output>':''}`;
    if(title==='Sizes') body=row(['sm','md','lg'].map(size=>`<Switch label="${size}" controlSize="${size}" />`).join(''));
    if(title==='Variants') body=row(['outline','soft'].map(variant=>`<Checkbox label="${variant}" variant="${variant}" />`).join(''));
    if(title==='Group'||title==='Group Horizontal') body=`<fieldset><legend className="h-label">Notify me about</legend><div style={{display:"flex",gap:16,flexDirection:"${title==='Group'?'column':'row'}"}}><Switch label="Messages" defaultChecked /><Switch label="Mentions" /><Switch label="Updates" /></div></fieldset>`;
    if(/Form/.test(title)) return form(`<${component} ${props} required name="consent" value="yes" />`,imports,setup);
  }
  if(title==='In Surface') body=surface(body);
  if(title==='Customization') body=`<div style={{fontFamily:"monospace",padding:16,border:"1px dashed currentColor",borderRadius:12}}>${body}</div>`;
  return result(imports,body,setup,{icons:title==='With Icons'?'Sun':undefined});
}

function collections(id,title) {
  const multiple=/Multiple|Tag Group Selection|Email Recipients/.test(title);
  const component=id==='select' ? multiple?'MultiSelect':'Select' : id==='autocomplete'?'Autocomplete':multiple?'MultiSelect':'Combobox';
  let imports=component, setup=`const options = ${optionData};`, props='label="Team role" options={options}', options='';
  if(component==='Autocomplete'&&multiple) props+=' selectionMode="multiple"';
  if(component==='Combobox'||component==='Autocomplete'&&!multiple) props+=' allowsCustomValue={false}';
  if(title==='With Description') props+=' hint="Choose the role that matches your work."';
  if(title==='Required') props+=' required name="role"';
  if(title==='Disabled') props+=' disabled';
  if(title==='Read Only') props+=' readOnly defaultValue="design"';
  if(title==='With Disabled Options') {setup=setup.replace('const options = '+optionData,'const options = '+optionData.replace('value:"research",','disabled:true,value:"research",'));}
  if(title==='Allows Empty Collection') {setup='const options: {value:string;label:string}[] = [];';props+=' emptyText="No roles yet. Create one to continue."';}
  if(title==='Full Width') props+=' style={{width:"100%"}}';
  if(title==='Variants') return result(component,row(['outline','filled','underline'].map(variant=>`<${component} ${props} ${component==='Select'?`variant="${variant}"`:`className="h-rich-field" data-variant="${variant}"`} />`).join('')),setup);
  if(title==='Default Selected Key') props+=' defaultSelectedKey="engineering"';
  if(title==='Allows Custom Value') props=props.replace('allowsCustomValue={false}','allowsCustomValue');
  if(title==='With Clear Button') props+=' clearable';
  if(title==='Custom Indicator') props+=' indicator={<ChevronsUpDown size={16} aria-hidden="true" />}';
  if(title==='Custom Value') props+=component==='Select'?' renderValue={option => option ? <strong>Role: {option.label}</strong> : "Choose a role"} defaultValue="design"':' renderValue={option => <strong>Role: {option?.label}</strong>} defaultValue="design"';
  if(title==='Render Function') props+=component==='Select'?' renderOption={(option, selected) => <span style={{fontWeight:selected?700:400}}>{option.label}{selected ? " · active" : ""}</span>}':' renderOption={(option, state) => <span style={{fontWeight:state.isSelected?700:400}}>{option.label}{state.isFocused ? " ←" : ""}</span>}';
  if(title==='Controlled'||title==='Controlled Multiple') {setup+=`\nconst [value,setValue] = React.useState${multiple?'<string[]>':''}(${multiple?'["design"]':'"design"'});`;props+=' value={value} onValueChange={setValue}';options='<output aria-live="polite">{JSON.stringify(value)}</output>';}
  if(title==='Controlled Input Value') {setup+='\nconst [query,setQuery] = React.useState("");';props+=' inputValue={query} onInputChange={setQuery}';options='<output>Search: {query}</output>';}
  if(title==='Controlled Open State') {setup+='\nconst [open,setOpen] = React.useState(false);';props+=' isOpen={open} onOpenChange={setOpen}';imports+=', Button';options='<Button variant="outline" onClick={() => setOpen(!open)}>{open ? "Close options" : "Open options"}</Button><output>{open ? "Options open" : "Options closed"}</output>';}
  if(/Asynchronous/.test(title)) {setup=`const [options,setOptions] = React.useState<{value:string;label:string}[]>([]);\nconst [loading,setLoading] = React.useState(true);\nconst [query,setQuery] = React.useState("");\nReact.useEffect(() => {setLoading(true);const timer = window.setTimeout(() => {setOptions((${optionData}).filter(option => option.label.toLowerCase().includes(query.toLowerCase())));setLoading(false);},350);return () => window.clearTimeout(timer);},[query]);`;props+=' isLoading={loading} inputValue={query} onInputChange={setQuery}'; if(component==='Select') props=props.replace(' inputValue={query} onInputChange={setQuery}',''); options='<output role="status">{loading ? "Loading roles…" : `${options.length} roles available`}</output>';}
  if(title==='Custom Filtering') props+=' filter={(label, query) => label.toLowerCase().startsWith(query.toLowerCase())}';
  if(title==='Menu Trigger') props+=' menuTrigger="manual"';
  if(title==='Form Value') props+=' formValue="text"';
  if(title==='Validation Behavior') props+=' validationBehavior="aria" required error="Choose a role before continuing."';
  if(title==='Custom Validation') props+=' validationBehavior="aria" validate={({value}) => value === "research" ? "Research access requires approval." : null}';
  if(title==='Virtualization') {setup='const options = Array.from({length:1000},(_,index) => ({value:String(index),label:`Location ${index}`}));';props+=' virtualized';}
  if(title==='User Selection'||title==='User Selection Multiple') {setup='const options = [{value:"ana",label:"Ana Reyes",description:"ana@example.test",icon:<span aria-hidden="true">AR</span>},{value:"luis",label:"Luis Cruz",description:"luis@example.test",icon:<span aria-hidden="true">LC</span>},{value:"maya",label:"Maya Santos",description:"maya@example.test",disabled:true}];';props=props.replace('Team role','Assign teammates');if(multiple)props+=' renderTag={option => <span>{option.icon} {option.label}</span>}';}
  if(title==='Location Search') {setup='const options = [{value:"manila",label:"Manila",description:"Metro Manila, Philippines"},{value:"cebu",label:"Cebu City",description:"Central Visayas, Philippines"},{value:"davao",label:"Davao City",description:"Davao Region, Philippines"}];';props=props.replace('Team role','Find a city');}
  if(title==='Tag Group Selection') {imports+=', TagGroup';setup+='\nconst [value,setValue] = React.useState<string[]>(["design"]);';props+=' value={value} onValueChange={setValue}';options='<TagGroup label="Selected roles" items={options.filter(option => value.includes(option.value)).map(option => ({id:option.value,label:option.label}))} onRemove={keys => setValue(value.filter(key => !keys.has(key)))} />';}
  if(title==='Email Recipients') {props+=' allowsCustomValue';setup='const options = [{value:"ana@example.test",label:"ana@example.test",description:"Ana Reyes"},{value:"luis@example.test",label:"luis@example.test",description:"Luis Cruz"},{value:"team@example.test",label:"team@example.test",description:"Product team"}];';props=props.replace('Team role','To');}
  let body=`<${component} ${props} />${options}`;
  if(title==='In Surface') body=surface(body);
  if(title==='Customization') body=`<div style={{maxWidth:420,fontFamily:"monospace"}}>${body}</div>`;
  if(title==='Form Value'||title==='Required') return form(body.replace('label=','name="role" label=').replace(' required name="role"',' required'),imports,setup);
  return result(imports,body,setup,{icons:title==='Custom Indicator'?'ChevronsUpDown':undefined});
}

function colors(id,title) {
  if(id==='color-field') return fields(id,title);
  let imports='',setup='',body='';
  if(id==='color-picker') {
    imports='ComposedColorPicker'; let props='label="Brand color" defaultValue="#284c3f"';
    if(title==='Controlled'){imports+=', parseColor';setup='const [value,setValue] = React.useState(parseColor("#284c3f"));';props='label="Brand color" value={value} onChange={setValue}';}
    let children='';
    if(title==='With Swatches'){imports+=', ColorSwatchPicker, parseColor';children='<ColorSwatchPicker label="Palette" colors={[{value:"#284c3f",label:"Forest"},{value:"#c4dc77",label:"Lime"},{value:"#d56e46",label:"Clay"}]} value={color.toString("hex")} onValueChange={value => setColor(parseColor(value))} />';setup='const [color,setColor] = React.useState(parseColor("#284c3f"));';props='label="Brand color" value={color} onChange={setColor}';}
    if(title==='With Fields'){imports+=', ColorField';children=row(['red','green','blue'].map(channel=>`<ColorField label="${channel}" colorSpace="rgb" channel="${channel}" />`).join(''));}
    if(title==='With Sliders'){imports+=', ColorSlider';children='<ColorSlider channel="alpha" label="Opacity" /><ColorSlider channel="saturation" colorSpace="hsl" label="Saturation" />';}
    body=`<ComposedColorPicker ${props}>${children}</ComposedColorPicker>${title==='Controlled'?'<output>{value.toString("hexa")}</output>':''}`;
    if(title==='Customization') body=`<div style={{fontFamily:"monospace",padding:16,border:"1px dashed currentColor"}}>${body}</div>`;
  } else if(id==='color-area'||id==='color-slider') {
    const area=id==='color-area', component=area?'ColorArea':'ColorSlider';imports=component;
    let props=area?'defaultValue="hsl(155, 55%, 42%)" colorSpace="hsb" xChannel="saturation" yChannel="brightness"':'defaultValue="hsl(155, 55%, 42%)" channel="hue" label="Hue"';
    if(title==='Disabled') props+=' isDisabled';
    if(title==='With Dots') props+=' showDots';
    if(title==='Vertical') props+=' orientation="vertical"';
    if(title==='Controlled'){imports+=', parseColor';setup='const [color,setColor] = React.useState(parseColor("hsl(155, 55%, 42%)"));';props=props.replace(/defaultValue="[^"]+"/,'value={color} onChange={setColor}');}
    if(title==='Color Space & Channels') return result('ColorArea',row('<ColorArea defaultValue="hsl(155, 55%, 42%)" colorSpace="hsl" xChannel="hue" yChannel="lightness" /><ColorArea defaultValue="rgb(40, 76, 63)" colorSpace="rgb" xChannel="red" yChannel="green" />'));
    if(title==='HSL Channels'||title==='RGB Channels') {const space=title==='HSL Channels'?'hsl':'rgb';const channels=space==='hsl'?['hue','saturation','lightness']:['red','green','blue'];return result('ColorSlider',`<div style={{display:"grid",gap:24}}>${channels.map(channel=>`<ColorSlider colorSpace="${space}" channel="${channel}" label="${channel}" defaultValue="#284c3f" />`).join('')}</div>`);}
    if(title==='Alpha Channel') props='defaultValue="hsla(155, 55%, 42%, 0.5)" channel="alpha" label="Opacity"';
    if(title==='Render Function') props+=' children={state => <output className="h-hint">{state.isDisabled ? "Disabled" : "Use arrow keys to adjust the color"}</output>}';
    if(title==='Customization') props+=' style={{width:240,borderRadius:0}}';
    body=`<${component} ${props} />${title==='Controlled'?'<output aria-live="polite">{color.toString("hexa")}</output>':''}`;
  } else if(id==='color-swatch') {
    imports='ColorSwatch';let props='color="#284c3f" colorName="Forest green"';
    if(title==='Sizes') return result(imports,row(['sm','md','lg'].map(size=>`<ColorSwatch ${props} size="${size}" />`).join('')));
    if(title==='Shapes') return result(imports,row(['square','circle'].map(shape=>`<ColorSwatch ${props} shape="${shape}" />`).join('')));
    if(title==='Transparency') return result(imports,row(['0.25','0.5','0.75','1'].map(alpha=>`<ColorSwatch color="rgba(40,76,63,${alpha})" colorName="Forest at ${Number(alpha)*100}% opacity" />`).join('')));
    if(title==='Render Function') props+=' style={({color}) => ({borderColor:color.toString("hex"),borderWidth:3,borderStyle:"double",padding:3})}';
    if(title==='Accessibility') props+=' aria-label="Forest green, primary brand color"';
    if(title==='Customization') props+=' style={{width:80,height:48,borderRadius:16}}';
    body=`<ColorSwatch ${props} />${title==='Accessibility'?'<span>Forest green — primary brand color</span>':''}`;
  } else {
    imports='ColorSwatchPicker';let props='label="Brand palette" colors={[{value:"#284c3f",label:"Forest"},{value:"#c4dc77",label:"Lime"},{value:"#d56e46",label:"Clay"}]}';
    if(title==='Disabled') props+=' disabled';
    if(title==='Default Value') props+=' defaultValue="#c4dc77"';
    if(title==='Controlled'){setup='const [value,setValue] = React.useState("#284c3f");';props+=' value={value} onValueChange={setValue}';}
    if(title==='Stack Layout') props+=' layout="grid"';
    if(title==='Custom Indicator') props+=' renderIndicator={state => state.selected ? "★" : null}';
    if(title==='Render Function') props+=' renderSwatch={(color, state) => <span style={{fontWeight:state.selected ? 700 : 400}}>{color.label}{state.selected ? " ✓" : ""}</span>}';
    if(title==='Sizes') return result(imports,row(['sm','md','lg'].map(size=>`<ColorSwatchPicker ${props} size="${size}" />`).join('')));
    if(title==='Variants') return result(imports,row(['outline','soft','solid'].map(variant=>`<ColorSwatchPicker ${props} variant="${variant}" />`).join('')));
    if(title==='Customization') props+=' style={{padding:16,border:"1px dashed currentColor"}}';
    body=`<ColorSwatchPicker ${props} />${title==='Controlled'?'<output>{value}</output>':''}`;
  }
  return result(imports,body,setup);
}

function dates(id,title) {
  const range=id==='date-range-picker', component=range?'SegmentedDateRangePicker':'SegmentedDatePicker';
  let props='label="'+(range?'Trip dates':'Appointment date')+'"';
  let initial=range?'{start:parseDate("2026-11-06"),end:parseDate("2026-11-12")}':'parseDate("2026-11-06")',setup='';
  let extraImports='import { parseDate, parseDateTime } from "@internationalized/date";';
  if(title==='Disabled') props+=' isDisabled';
  if(title==='Validation') props+=' minValue={parseDate("2026-11-01")} maxValue={parseDate("2026-12-31")} isDateUnavailable={date => date.day === 15} description="November–December; the 15th is unavailable."';
  if(title==='Format Options'){initial=range?'{start:parseDateTime("2026-11-06T09:00"),end:parseDateTime("2026-11-12T17:00")}':'parseDateTime("2026-11-06T14:30")';props+=' granularity="minute" hourCycle={24} shouldForceLeadingZeros';}
  if(title==='Controlled'){setup=`const [value,setValue] = React.useState<${range?'{start:ReturnType<typeof parseDate>;end:ReturnType<typeof parseDate>}':'ReturnType<typeof parseDate>'} | null>(${initial});`;props+=' value={value} onChange={setValue}';} else props+=` defaultValue={${initial}}`;
  if(title==='Custom Indicator') props+=' indicator={<ChevronDown size={18} aria-hidden="true" />}';
  if(title==='Render Function') props+=' children={state => <output>{state.isOpen ? "Calendar is open" : "Select or type a date"}</output>}';
  if(title==='Customization') props+=' style={{maxWidth:560,fontFamily:"monospace"}}';
  let body=`<${component} ${props} />${title==='Controlled'?`<output aria-live="polite">{${range?'value ? `${value.start} – ${value.end}` : "No dates"':'value?.toString() ?? "No date"'}}</output>`:''}`;
  if(title==='International Calendar'){extraImports+='\nimport { I18nProvider } from "react-aria-components";';body=`<I18nProvider locale="hi-IN-u-ca-indian">${body}</I18nProvider>`;}
  if(title==='Form Example'){const def=form(body.replace('label=',range?'startName="trip-start" endName="trip-end" isRequired label=':'name="appointment" isRequired label='),component,setup);return {...def,extraImports};}
  return result(component,body,setup,{extraImports,icons:title==='Custom Indicator'?'ChevronDown':undefined});
}

function inputGroup(title) {
  let props='', setup='', leading='',trailing='',imports='InputGroup, InputGroupAddon, InputGroupInput',icons;
  const textArea=/TextArea/.test(title);
  if(textArea) imports+=', InputGroupTextarea';
  if(/Required/.test(title)) props+=' required';
  if(/Disabled/.test(title)) props+=' disabled';
  if(title==='Validation') props+=' aria-invalid="true" aria-describedby="group-error"';
  if(title==='Full Width') props+=' style={{width:"100%"}}';
  if(/Text Prefix/.test(title)) leading='$';
  if(/Text Suffix/.test(title)) trailing='.com';
  if(/Prefix Icon|Icon Prefix|Prefix and Suffix/.test(title)){leading='<Search size={16} aria-hidden="true" />';icons='Search, Copy, LoaderCircle, Eye, EyeOff';}
  if(/Suffix Icon|Prefix and Suffix/.test(title)){trailing='<Search size={16} aria-hidden="true" />';icons='Search, Copy, LoaderCircle, Eye, EyeOff';}
  if(title==='Loading State'){leading='<LoaderCircle size={16} aria-hidden="true" />';props+=' disabled aria-busy="true"';icons='LoaderCircle';}
  if(/Copy/.test(title)){setup='const [copied,setCopied] = React.useState(false);\nconst inputRef = React.useRef<HTMLInputElement>(null);';props+=' ref={inputRef} defaultValue="hulmio.design"';trailing='<button type="button" aria-label="Copy value" onClick={async () => {try {await navigator.clipboard.writeText(inputRef.current?.value ?? "");setCopied(true);} catch {setCopied(false);}}}>{copied ? "Copied" : "Copy"}</button>';}
  if(title==='Password Toggle'){setup='const [show,setShow] = React.useState(false);';props+=' type={show ? "text" : "password"}';trailing='<button type="button" onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>';}
  if(title==='Keyboard Shortcut') trailing='<kbd>⌘ K</kbd>';
  if(title==='Badge Suffix') trailing='<span className="h-tag">New</span>';
  if(title==='Customization') props+=' style={{fontFamily:"monospace",letterSpacing:".06em"}}';
  let body=`<InputGroup>${leading?`<InputGroupAddon>${leading}</InputGroupAddon>`:''}<${textArea?'InputGroupTextarea':'InputGroupInput'} aria-label="${textArea?'Project notes':'Project name'}" placeholder="${textArea?'Describe your project…':'Find a project…'}" ${props} />${trailing?`<InputGroupAddon align="end">${trailing}</InputGroupAddon>`:''}</InputGroup>${title==='Validation'?'<p id="group-error" className="h-error">Enter a project name.</p>':''}`;
  if(title==='Variants') body=row(['outline','filled','underline'].map(variant=>`<InputGroup variant="${variant}"><InputGroupAddon>@</InputGroupAddon><InputGroupInput aria-label="${variant} username" placeholder="Username" /></InputGroup>`).join(''));
  if(title==='Usage Example'||title==='TextArea Usage Example') return form(body.replace('aria-label=','name="project" required aria-label='),imports,setup);
  if(title==='In Surface') body=surface(body);
  return result(imports,body,setup,{icons});
}

function otp(title) {
  let props='label="Verification code"',setup='';
  if(title==='Four Digits') props+=' length={4}';
  if(title==='Disabled State') props+=' disabled defaultValue="123456"';
  if(title==='Controlled'){setup='const [value,setValue] = React.useState("");';props+=' value={value} onValueChange={setValue}';}
  if(title==='On Complete'){setup='const [message,setMessage] = React.useState("Enter six digits");';props+=' onComplete={value => setMessage(`Completed: ${value}`)}';}
  if(title==='With Pattern') props+=' pattern="[A-Za-z0-9]+" inputMode="text" hint="Letters and numbers are accepted."';
  if(title==='With Validation') props+=' required error="Enter all six digits."';
  if(title==='Variants') return result('OtpInput',row('<OtpInput label="Standard" defaultValue="123" /><OtpInput label="Masked" masked defaultValue="456" />'));
  if(title==='Customization') props+=' style={{fontFamily:"monospace",fontSize:22}}';
  let body=`<OtpInput ${props} />${title==='Controlled'?'<output>{value.length} of 6 digits entered</output>':title==='On Complete'?'<output role="status">{message}</output>':''}`;
  if(title==='In Surface') body=surface(body);
  if(title==='Form Example') return form(body.replace('label=','name="otp" required label='),'OtpInput',setup);
  return result('OtpInput',body,setup);
}

function helpers(id,title) {
  if(id==='tag-group') {
    let setup=`const [items,setItems] = React.useState(${tagData});`,props='label="Project tags" items={items}';
    if(title==='Disabled') props+=' isDisabled';
    if(title==='With Error Message') props+=' error="Choose at least one tag."';
    if(title==='With Remove Button'||title==='With List Data') props+=' onRemove={keys => setItems(items.filter(item => !keys.has(item.id)))}';
    if(title==='With Prefix') {setup='const items = [{id:"design",label:"Design",prefix:<span aria-hidden="true">✦</span>},{id:"engineering",label:"Engineering",prefix:<span aria-hidden="true">⌘</span>}];';}
    if(title==='Controlled'){setup+='\nconst [selected,setSelected] = React.useState<"all" | Set<string | number>>(new Set(["design"]));';props+=' selectionMode="multiple" selectedKeys={selected} onSelectionChange={setSelected}';}
    if(title==='Selection Modes') return result('TagGroup',`<TagGroup label="Single tag" items={${tagData}} selectionMode="single" defaultSelectedKeys={["design"]} /><TagGroup label="Multiple tags" items={${tagData}} selectionMode="multiple" defaultSelectedKeys={["design","research"]} />`);
    if(title==='Sizes') return result('TagGroup',row(['sm','md','lg'].map(size=>`<TagGroup label="${size}" items={${tagData}} size="${size}" />`).join('')));
    if(title==='Variants') return result('TagGroup',row(['outline','filled','underline'].map(variant=>`<TagGroup label="${variant}" items={${tagData}} variant="${variant}" />`).join('')));
    if(title==='Render Function') props+=' selectionMode="multiple" renderTag={(item,state) => <span>{state.isSelected ? "✓ " : ""}{item.label}</span>}';
    if(title==='Customization') props+=' style={{fontFamily:"monospace",maxWidth:360}}';
    return result('TagGroup',`<TagGroup ${props} />${title==='Controlled'?'<output>{selected === "all" ? "All selected" : Array.from(selected).join(", ")}</output>':''}`,setup);
  }
  if(id==='label') {let props='htmlFor="label-example"';if(title==='With Required Indicator')props+=' required';if(title==='With Disabled State')props+=' aria-disabled="true" style={{opacity:.5}}';if(title==='With Invalid State')props+=' style={{color:"var(--hulmio-danger, #b42318)"}}';if(title==='Customization')props+=' style={{fontFamily:"monospace",textTransform:"uppercase",letterSpacing:".08em"}}';return result('Label, Input',`<Label ${props}>Display name</Label><Input id="label-example" ${title==='With Disabled State'?'disabled':''} ${title==='With Invalid State'?'aria-invalid="true"':''} ${title==='With Required Indicator'?'required':''} />`);}
  if(id==='description') return result('TextField, Description', title==='Basic'?'<Description>Use your full name as it appears on your profile.</Description>':title==='With Form Fields'?'<TextField label="Username" description="Letters and numbers only." /><SearchField label="Search" description="Search by title or owner." />':'<TextField label="Display name"><Description>Your teammates see this name.</Description></TextField>','',{...title==='With Form Fields'?{imports:'TextField, SearchField'}:{}});
  if(id==='error-message') return result('ErrorMessage',`<ErrorMessage ${title==='Customization'?'style={{borderLeft:"3px solid currentColor",paddingLeft:12}}':''}>Unable to save your changes. Try again.</ErrorMessage>`);
  if(id==='fieldset') {let body='<Fieldset label="Contact information" description="Tell us how to reach you."><TextField label="Full name" name="name" isRequired /><TextField label="Email" name="email" type="email" isRequired /></Fieldset>';if(title==='In Surface')body=surface(body);if(title==='Customization')body='<div style={{padding:20,border:"1px dashed currentColor"}}>'+body+'</div>';return result('Fieldset, TextField',body);}
  if(id==='field-error') {
    let props='label="Username" isRequired name="username"';
    if(title==='Basic') props+=' isInvalid error="Username is unavailable."';
    if(title==='Basic Validation') props+=' minLength={3} description="At least three characters."';
    if(title==='With Dynamic Messages') props+=' type="email" description="Enter a valid email address."';
    if(title==='Custom Validation Logic') props+=' validate={value => value.toLowerCase() === "admin" ? "This username is reserved." : null} description="Try entering admin."';
    if(title==='Multiple Error Messages') props+=' validate={value => [value.length < 8 ? "Use at least eight characters." : "", !/[0-9]/.test(value) ? "Include a number." : ""].filter(Boolean)}';
    if(title==='Customization') props+=' isInvalid error={<span style={{fontFamily:"monospace"}}>Please choose another username.</span>}';
    return form(`<TextField ${props} />`,'TextField');
  }
  if(id==='form') return form('<TextField name="email" type="email" label="Work email" isRequired /><TextField name="username" label="Username" isRequired minLength={3} validate={value => value === "admin" ? "This username is reserved." : null} />'+(title==='Render Function'?'<TextField label="Live status" children={state => <output>{state.isInvalid ? "Fix the field before submitting" : "Ready"}</output>} />':''),'TextField');
  throw new Error(`Unimplemented form reference ${id}: ${title}`);
}

function example(id,title) {
  if(id==='slider') {
    let props='label="Volume" min={0} max={100}',setup='';
    const range=/Range/.test(title), vertical=/Vertical/.test(title);
    props+=range?' defaultValue={[20,80]} thumbLabels={["Minimum volume","Maximum volume"]}':' defaultValue={40}';
    if(/Steps/.test(title))props+=' step={10} showSteps';
    if(/Marks/.test(title))props+=' marks={[0,25,50,75,100]}';
    if(vertical)props+=' orientation="vertical"';
    if(title==='Disabled')props+=' disabled';
    if(title==='Controlled Value'){setup='const [value,setValue] = React.useState(40);';props=props.replace(' defaultValue={40}',' value={value} onValueChange={setValue}');}
    if(title==='Custom Value Formatting')props+=' formatOptions={{style:"unit",unit:"celsius"}}';
    if(title==='Custom Output')props+=' renderOutput={(values) => <strong>{values[0] < 30 ? "Quiet" : values[0] < 70 ? "Balanced" : "Loud"} · {values[0]}</strong>}';
    if(title==='Render Function')props+=' renderThumb={state => <span style={{fontSize:9,color:"white"}}>{state.value}</span>}';
    if(title==='Customization')props+=' style={{maxWidth:320,padding:16,border:"1px dashed currentColor"}}';
    return result('Slider',`<Slider ${props} />${title==='Controlled Value'?'<output aria-live="polite">Volume: {value}</output>':''}`,setup);
  }
  if(['text-field','search-field','number-field','date-field','time-field','color-field'].includes(id)) return fields(id,title);
  if(id==='input'||id==='text-area')return simpleInput(id,title);
  if(['checkbox','checkbox-group','radio-group','switch'].includes(id))return choices(id,title);
  if(['select','combo-box','autocomplete'].includes(id))return collections(id,title);
  if(id.startsWith('color-'))return colors(id,title);
  if(id==='date-picker'||id==='date-range-picker')return dates(id,title);
  if(id==='input-group')return inputGroup(title);
  if(id==='input-otp')return otp(title);
  return helpers(id,title);
}

export function buildDomain(snapshot) {
  return snapshot.heroComponents.filter(reference => ids.has(reference.id)).flatMap(reference => [...reference.requiredSections,{title:'Customization'}].map(section => ({
    family:reference.existingHulmioFamilies[0] ?? reference.id,
    referenceId:reference.id,
    title:section.title,
    ...(['date-picker','date-range-picker'].includes(reference.id)?{slug:`${reference.id}-${slugify(section.title)}`}:{slug:slugify(section.title)}),
    ...example(reference.id,section.title),
  })));
}
