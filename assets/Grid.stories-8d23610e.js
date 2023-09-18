import{c as g,j as e,a as x}from"./emotion-react.browser.esm-cc99c0e7.js";import"./index-928ed2fb.js";import"./_commonjsHelpers-725317a4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5cac086b.js";const y=({row:a,column:t,gap:o,rowGap:l,columnGap:i})=>g({display:"grid",gridTemplateRows:`repeat(${a}, auto)`,gridTemplateColumns:`repeat(${t}, auto)`,rowGap:l,columnGap:i,gap:o}),n=({as:a="div",row:t=2,column:o=2,gap:l="12px",rowGap:i="12px",columnGap:C="12px",children:c,...m})=>e(a,{...m,css:y({row:t,column:o,gap:l,rowGap:i,columnGap:C}),children:c});try{n.displayName="Grid",n.__docgenInfo={description:"",displayName:"Grid",props:{as:{defaultValue:{value:"div"},description:"Grid의 HTML 태그",name:"as",required:!1,type:{name:"ElementType"}},row:{defaultValue:{value:"2"},description:"Grid 의 자식요소 세로열 갯수",name:"row",required:!1,type:{name:"number"}},column:{defaultValue:{value:"2"},description:"Grid 의 자식요소 가로열 갯수",name:"column",required:!1,type:{name:"number"}},gap:{defaultValue:{value:"12px"},description:"Grid의 자식요소 사이 간격",name:"gap",required:!1,type:{name:"string"}},rowGap:{defaultValue:{value:"12px"},description:"Grid의 자식요소 가로열 사이 간격",name:"rowGap",required:!1,type:{name:"string"}},columnGap:{defaultValue:{value:"12px"},description:"Grid의 자식요소 세로열 사이 간격",name:"columnGap",required:!1,type:{name:"string"}}}}}catch{}const v={title:"Grid",component:n,tags:["autodocs"]},r=()=>e("div",{style:{border:"1px solid pink"},children:"item"}),u={render:a=>x(n,{...a,style:{border:"1px solid black"},children:[e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{})]}),args:{row:2,column:2,gap:"10px"},argTypes:{as:{control:"select",options:["section","dialog","div","span"]},columnGap:{control:"text"},rowGap:{control:"text"}}};var s,d,p;u.parameters={...u.parameters,docs:{...(s=u.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => {
    return <Grid {...args} style={{
      border: '1px solid black'
    }}>\r
        <SampleChild />\r
        <SampleChild />\r
        <SampleChild />\r
        <SampleChild />\r
        <SampleChild />\r
        <SampleChild />\r
        <SampleChild />\r
        <SampleChild />\r
      </Grid>;
  },
  args: {
    row: 2,
    column: 2,
    gap: '10px'
  },
  argTypes: {
    as: {
      control: 'select',
      options: ['section', 'dialog', 'div', 'span']
    },
    columnGap: {
      control: 'text'
    },
    rowGap: {
      control: 'text'
    }
  }
}`,...(p=(d=u.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const S=["Playground"];export{u as Playground,S as __namedExportsOrder,v as default};
//# sourceMappingURL=Grid.stories-8d23610e.js.map
