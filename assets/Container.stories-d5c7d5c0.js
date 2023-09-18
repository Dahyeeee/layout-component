import{c as d,j as s}from"./emotion-react.browser.esm-cc99c0e7.js";import"./index-928ed2fb.js";import"./_commonjsHelpers-725317a4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5cac086b.js";const c=(e,n)=>d({display:"block",minWidth:typeof e=="number"?`${e}px`:e,maxWidth:typeof n=="number"?`${n}px`:n,marginLeft:"auto",marginRight:"auto",whiteSpace:"normal"}),a=({maxWidth:e="100%",minWidth:n="100px",as:i="div",children:C,...p})=>s(i,{...p,css:c(n,e),children:C});try{a.displayName="Container",a.__docgenInfo={description:"",displayName:"Container",props:{as:{defaultValue:{value:"div"},description:"Container의 HTML 태그",name:"as",required:!1,type:{name:"ElementType"}},maxWidth:{defaultValue:{value:"100%"},description:"최대 넓이 (number로 입력시 px로 고정, string으로 입력시 그대로 반영)",name:"maxWidth",required:!1,type:{name:"string | number"}},minWidth:{defaultValue:{value:"100px"},description:"최소 넓이 (number로 입력시 px로 고정, string으로 입력시 그대로 반영)",name:"minWidth",required:!1,type:{name:"string | number"}}}}}catch{}const x={title:"Container",component:a,tags:["autodocs"]},r={render:e=>s(a,{...e,style:{border:"1px solid black"},children:"container"}),args:{maxWidth:"100%",minWidth:"100px"},argTypes:{as:{control:"select",options:["section","dialog","div","span"]}}};var t,u,o;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => {
    return <Container {...args} style={{
      border: '1px solid black'
    }}>\r
        container\r
      </Container>;
  },
  args: {
    maxWidth: '100%',
    minWidth: '100px'
  },
  argTypes: {
    as: {
      control: 'select',
      options: ['section', 'dialog', 'div', 'span']
    }
  }
}`,...(o=(u=r.parameters)==null?void 0:u.docs)==null?void 0:o.source}}};const f=["Playground"];export{r as Playground,f as __namedExportsOrder,x as default};
//# sourceMappingURL=Container.stories-d5c7d5c0.js.map
