import{c as v,j as o}from"./emotion-react.browser.esm-cc99c0e7.js";import"./index-928ed2fb.js";import"./_commonjsHelpers-725317a4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5cac086b.js";const C=({dir:e,align:l,justify:r,gap:n})=>v({display:"flex",flexDirection:e,alignItems:l,justifyContent:r,gap:n}),u=({as:e="div",dir:l="row",align:r="center",justify:n="center",gap:c="10px",children:d,...p})=>o(e,{...p,css:C({dir:l,align:r,justify:n,gap:c}),children:d});try{u.displayName="Flex",u.__docgenInfo={description:"",displayName:"Flex",props:{as:{defaultValue:{value:"div"},description:"Flex의 HTML 태그",name:"as",required:!1,type:{name:"ElementType"}},dir:{defaultValue:{value:"row"},description:"Flex 자식 요소의 정렬 방향",name:"dir",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"column"'},{value:'"row-reverse"'},{value:'"column-reverse"'}]}},align:{defaultValue:{value:"center"},description:"Flex의 교차축을 따라 배치하는 방식",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"inherit"'},{value:'"normal"'},{value:'"stretch"'},{value:'"start"'},{value:'"end"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"self-start"'},{value:'"self-end"'},{value:'"baseline"'},{value:'"initial"'},{value:'"unset"'}]}},justify:{defaultValue:{value:"center"},description:"Flex의 주축을 기준으로 배치하는 방식",name:"justify",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"inherit"'},{value:'"normal"'},{value:'"stretch"'},{value:'"start"'},{value:'"end"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"initial"'},{value:'"unset"'},{value:'"left"'},{value:'"right"'},{value:'"space-between"'},{value:'"space-around"'},{value:'"space-evenly"'},{value:'"revert"'}]}},gap:{defaultValue:{value:"10px"},description:"Flex의 자식요소들 간의 간격",name:"gap",required:!1,type:{name:"string"}}}}}catch{}const D={title:"Flex",component:u,tags:["autodocs"]},a={render:e=>o(u,{...e,style:{border:"1px solid black"},children:"flexFlex"}),args:{dir:"row",align:"center",justify:"center",gap:"10px"},argTypes:{as:{control:"select",options:["section","dialog","div","span"]}}};var t,s,i;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => {
    return <Flex {...args} style={{
      border: '1px solid black'
    }}>\r
        flexFlex\r
      </Flex>;
  },
  args: {
    dir: 'row',
    align: 'center',
    justify: 'center',
    gap: '10px'
  },
  argTypes: {
    as: {
      control: 'select',
      options: ['section', 'dialog', 'div', 'span']
    }
  }
}`,...(i=(s=a.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const F=["Playground"];export{a as Playground,F as __namedExportsOrder,D as default};
//# sourceMappingURL=Flex.stories-ef9c5add.js.map
