var z=Object.defineProperty;var S=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var P=(e,n,o)=>n in e?z(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,w=(e,n)=>{for(var o in n||(n={}))F.call(n,o)&&P(e,o,n[o]);if(S)for(var o of S(n))q.call(n,o)&&P(e,o,n[o]);return e};import{d as f,t as T,c as t,r as a,h as p,P as W,a as v,F as L,b,o as j,w as R,e as G,M as H,l as V,f as Q,g as K,i as J,j as N,k as X}from"./vendor.9ab2e762.js";const Y=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function o(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(r){if(r.ep)return;r.ep=!0;const l=o(r);fetch(r.href,l)}};Y();var Z="./assets/tdesign-logo.62df70da.svg";const D="_header_g5mvl_1",ee="_logo_g5mvl_8";var U={header:D,logo:ee},te=f({name:"Intro",props:{lang:{type:String},onLangChange:{type:Function}},setup(e){return{lang:T(e,"lang"),onLangChange:e.onLangChange}},render(){return t(a("t-header"),{bordered:!0,class:U.header},{default:()=>[t("div",{class:U.logo},[t("img",{src:Z},null)])]})}}),ne="./assets/TDesign-IM.d0916af5.png",B={"zh-CN":{lang:"zh-CN",introTitle:"\u6B22\u8FCE\u4F60\u7684\u53C2\u4E0E",introCommunity:()=>p("div",{class:"content-text"},{default:()=>["TDesign \u7684 Issue \u5217\u8868\u63A5\u53D7 bug \u62A5\u544A\u6216\u662F\u65B0\u529F\u80FD\u8BF7\u6C42\u3002\u4E5F\u53EF\u52A0\u5165\u5B98\u65B9\u793E\u533A\uFF1A",p(W,{content:()=>p("img",{style:{width:"112px",height:"112px",display:"block"},src:ne}),showArrow:!0},{default:()=>p("a",null,"\u5FAE\u4FE1\u7FA4")}),"\u3002"]}),introOne:({faqUrl:e,changeLogUrl:n,issuesUrl:o})=>p("div",{class:"content-text"},{default:()=>["\u5728\u53D1\u5E03\u4E00\u4E2A Issue \u524D\uFF0C\u8BF7\u786E\u4FDD\uFF1A",p("br"),"1. \u5728 ",p("a",{href:e,target:"_blank"},"\u5E38\u89C1\u95EE\u9898"),"\u3001",p("a",{href:n,target:"_blank"},"\u66F4\u65B0\u65E5\u5FD7")," \u548C ",p("a",{href:o,target:"_blank"},"\u65E7Issue\u5217\u8868 "),"\u4E2D\u641C\u7D22\u8FC7\u4F60\u7684\u95EE\u9898\u3002\uFF08\u4F60\u7684\u95EE\u9898\u53EF\u80FD\u5DF2\u6709\u4EBA\u63D0\u51FA\uFF0C\u4E5F\u53EF\u80FD\u5DF2\u5728\u6700\u65B0\u7248\u672C\u4E2D\u88AB\u4FEE\u6B63\uFF09",p("br"),"2. \u5982\u679C\u4F60\u53D1\u73B0\u4E00\u4E2A\u5DF2\u7ECF\u5173\u95ED\u7684\u65E7 Issue \u5728\u6700\u65B0\u7248\u672C\u4E2D\u4ECD\u7136\u5B58\u5728\uFF0C\u4E0D\u8981\u5728\u65E7 Issue \u4E0B\u9762\u7559\u8A00\uFF0C\u8BF7\u5EFA\u4E00\u4E2A\u65B0\u7684 issue\u3002"]}),introWarningMsg:"\u6CE8\u610F\uFF1A\u4E0D\u7B26\u5408issue\u89C4\u5B9A\u5C06\u4F1A\u88AB\u5173\u95ED",introWarningBtn:"\u4EC0\u4E48\u662F Good Issue\uFF1F",repos:[{name:"tdesign",github:"Tencent/tdesign",npm:""},{name:"tdesign-vue",github:"Tencent/tdesign-vue",npm:"tdesign-vue"},{name:"tdesign-vue-next",github:"Tencent/tdesign-vue-next",npm:"tdesign-vue-next"},{name:"tdesign-react",github:"Tencent/tdesign-react",npm:"tdesign-react"},{name:"tdesign-miniprogram",github:"Tencent/tdesign-miniprogram",npm:"tdesign-miniprogram"},{name:"tdesign-starter-cli",github:"Tencent/tdesign-starter-cli",npm:"tdesign-starter-cli"},{name:"tdesign-common",github:"Tencent/tdesign-common",npm:""},{name:"tdesign-vue-starter",github:"Tencent/tdesign-vue-starter",npm:""},{name:"tdesign-vue-next-starter",github:"Tencent/tdesign-vue-next-starter",npm:""},{name:"tdesign-icons",github:"Tencent/tdesign-icons",npm:""}],issueTypesLabel:"Issue \u7C7B\u522B",repoSelectLabel:"\u76F8\u5173\u4ED3\u5E93",issueTitleLabel:"Issue \u6807\u9898",issueTitlePlaceholder:"[\u7EC4\u4EF6\u540D\u79F0] \u63CF\u8FF0\u95EE\u9898\u7684\u6807\u9898",issueTypes:[{label:"Bug",value:"Bug"},{label:"Feature",value:"New"}],versionRepositoryLabel:"\u76F8\u5173\u7248\u672C",versionRepositoryTip:"\u8BF7\u68C0\u67E5\u5728\u6700\u65B0\u9879\u76EE\u7248\u672C\u4E2D\u80FD\u5426\u91CD\u73B0\u6B64 issue\u3002",versionStructureLabel:"\u6846\u67B6\u7248\u672C / \u57FA\u7840\u5E93\u7248\u672C",versionStructurePlaceholder:"Vue(3.2.12) / React(17.0.2) / \u5C0F\u7A0B\u5E8F(v2.1.3)",versionSystemLabel:"\u7CFB\u7EDF\u3001\u6D4F\u89C8\u5668",versionSystemPlaceholder:"MacOS(11.2.3)\u3001Chrome(8.213.231.123)",versionNodeLabel:"Node\u7248\u672C",reproduceLabel:"\u91CD\u73B0\u94FE\u63A5",reproduceTip:"\u8BF7\u63D0\u4F9B\u5C3D\u53EF\u80FD\u7CBE\u7B80\u7684 CodePen\u3001CodeSandbox \u6216 GitHub \u4ED3\u5E93\u7684\u94FE\u63A5\u3002\u8BF7\u4E0D\u8981\u586B\u65E0\u5173\u94FE\u63A5\uFF0C\u5426\u5219\u4F60\u7684 Issue \u5C06\u88AB\u5173\u95ED\u3002",stepsLabel:"\u91CD\u73B0\u6B65\u9AA4",stepsTip:"\u8BF7\u6E05\u6670\u7684\u63CF\u8FF0\u91CD\u73B0\u8BE5 Issue \u7684\u6B65\u9AA4\uFF0C\u8FD9\u80FD\u5E2E\u52A9\u6211\u4EEC\u5FEB\u901F\u5B9A\u4F4D\u95EE\u9898\u3002\u6CA1\u6709\u6E05\u6670\u91CD\u73B0\u6B65\u9AA4\u5C06\u4E0D\u4F1A\u88AB\u4FEE\u590D\uFF0C\u6807\u6709 'need reproduction' \u7684 Issue \u5728 7 \u5929\u5185\u4E0D\u63D0\u4F9B\u76F8\u5173\u6B65\u9AA4\uFF0C\u5C06\u88AB\u5173\u95ED\u3002",expectLabel:"\u671F\u671B\u7ED3\u679C",actualLabel:"\u5B9E\u9645\u7ED3\u679C",remarksLabel:"\u8865\u5145\u8BF4\u660E",remarksTip:"\u53EF\u4EE5\u662F\u9047\u5230\u8FD9\u4E2A bug \u7684\u4E1A\u52A1\u573A\u666F\u3001\u4E0A\u4E0B\u6587\u7B49\u4FE1\u606F\u3002",pictureTipPlaceholder:"\u8BF7\u8F93\u5165\u5185\u5BB9 (\u5982\u9700\u4E0A\u4F20\u56FE\u7247\uFF0C\u8BF7\u5148\u8F93\u5165\u56FE\u7247\u540D\u79F0\uFF0C\u5728\u9884\u89C8\u65F6\u4E0A\u4F20\u56FE\u7247\u5E76\u66FF\u6362\u56FE\u7247\u540D\u79F0)",placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",preview:"\u9884\u89C8",valid:{repo:"\u8BF7\u9009\u62E9\u76F8\u5173\u4ED3\u5E93",title:"\u8BF7\u586B\u5199 Issue \u6807\u9898",type:"\u8BF7\u9009\u62E9 Issue \u7C7B\u522B",versionRepository:"\u8BF7\u9009\u62E9\u9879\u76EE\u7684\u7248\u672C",versionStructure:"\u8BF7\u586B\u5199\u6846\u67B6\u7248\u672C / \u57FA\u7840\u5E93\u7248\u672C",versionSystem:"\u8BF7\u586B\u5199\u7CFB\u7EDF\u3001\u6D4F\u89C8\u5668",reproduce:"\u8BF7\u586B\u5199\u91CD\u73B0\u94FE\u63A5",steps:"\u8BF7\u586B\u5199\u91CD\u73B0\u6B65\u9AA4",expected:"\u8BF7\u586B\u5199\u671F\u671B\u7684\u7ED3\u679C",actual:"\u8BF7\u586B\u5199\u5B9E\u9645\u7684\u7ED3\u679C",functionContent:"\u8BF7\u586B\u5199\u8FD9\u4E2A\u529F\u80FD\u89E3\u51B3\u7684\u95EE\u9898",functionalExpectations:"\u8BF7\u586B\u5199\u4F60\u5EFA\u8BAE\u7684\u65B9\u6848\u662F\u4EC0\u4E48\uFF1F"},functionContentLabel:"\u8FD9\u4E2A\u529F\u80FD\u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898",functionContentTip:"\u8BF7\u8BE6\u5C3D\u8BF4\u660E\u8FD9\u4E2A\u9700\u6C42\u7684\u7528\u4F8B\u548C\u573A\u666F\u3002\u6700\u91CD\u8981\u7684\u662F\uFF1A\u89E3\u91CA\u6E05\u695A\u662F\u600E\u6837\u7684\u7528\u6237\u4F53\u9A8C\u9700\u6C42\u50AC\u751F\u4E86\u8FD9\u4E2A\u529F\u80FD\u4E0A\u7684\u9700\u6C42\u3002\u6211\u4EEC\u5C06\u8003\u8651\u6DFB\u52A0\u5728\u73B0\u6709 API \u65E0\u6CD5\u8F7B\u677E\u5B9E\u73B0\u7684\u529F\u80FD\u3002\u65B0\u529F\u80FD\u7684\u7528\u4F8B\u4E5F\u5E94\u5F53\u8DB3\u591F\u5E38\u89C1\u3002",functionalExpectationsLabel:"\u4F60\u5EFA\u8BAE\u7684\u65B9\u6848\u662F\u4EC0\u4E48\uFF1F"}};const oe="_contentBox_bygo3_1",ae="_introTitle_bygo3_5",re="_introTitleLayout_bygo3_12",le="_introWarningTip_bygo3_17",se="_contentParagraph_bygo3_21";var h={contentBox:oe,introTitle:ae,introTitleLayout:re,introWarningTip:le,contentParagraph:se},ie=f({name:"Intro",props:{lang:{type:String},repo:String},setup(e){const n=T(e,"lang"),o=v(()=>B[n.value]),i=v(()=>({faqUrl:"https://tdesign.tencent.com/about/faq",changeLogUrl:`https://github.com/${e.repo}/blob/main/CHANGELOG.md`,issuesUrl:`https://github.com/${e.repo}/issues?q=is%3Aissue`}));function r(){return p("span",null,{default:()=>[p("span",{class:"intro-warning-tip"},o.value.introWarningMsg)]})}return{lang:n,contentText:o,introUrl:i,renderAlertMsg:r}},render(){const{contentText:e}=this;return t(L,null,[t("div",{class:h.introTitleLayout},[t("div",{class:h.contentBox},[t("div",{class:[h.introTitle,h.contentParagraph]},[t(a("v-node"),{render:e.introTitle},null)]),t(a("v-node"),{render:e.introCommunity},null)])]),t("div",{class:h.contentBox},[t(a("v-node"),{render:()=>e.introOne(this.introUrl),class:h.contentParagraph},null),t(a("t-alert"),{message:this.renderAlertMsg,theme:"warning"},null)])])}}),C;(function(e){e.New="__FEATURE_REQUEST__",e.Bug="__BUG__"})(C||(C={}));function E(e){return"<!-- generated by issue-helper DO NOT REMOVE -->".replace("-->",C[e]+" -->")}function ue(e,n,o){return e.value?`### ${o.value.reproduceLabel}
${n.value.reproduce}

### ${o.value.stepsLabel}
${n.value.steps}

### ${o.value.expectLabel}
${n.value.expected}

### ${o.value.actualLabel}
${n.value.actual}
${n.value.remarks?`
### ${o.value.remarksLabel}
${n.value.remarks}
`:""}
| Environment | Info |
|---|---|
| ${o.value.versionRepositoryLabel} | ${n.value.versionRepository||"-"} |
| ${o.value.versionStructureLabel} | ${n.value.versionStructure} |
| ${o.value.versionSystemLabel} | ${n.value.versionSystem} |
| ${o.value.versionNodeLabel} | ${n.value.versionNode} |
`.trim():`### ${o.value.functionContentLabel}
${n.value.functionContent}

### ${o.value.functionalExpectationsLabel}
${n.value.functionalExpectations}`.trim()}function ce(e,n,o){const i=`${E(n.value.type)}

${ue(e,n,o)}

${E(n.value.type)}`,r=encodeURIComponent(i).replace(/%2B/gi,"+");window.open(`https://github.com/${n.value.repo}/issues/new?title=${n.value.title}&body=${r}`)}const pe="_contentBox_2tppm_1",de="_formBox_2tppm_5",me="_formItem_2tppm_8",ge="_tipContent_2tppm_11",ve="_contentText_2tppm_15",fe="_formPreview_2tppm_21";var s={contentBox:pe,formBox:de,formItem:me,tipContent:ge,contentText:ve,formPreview:fe},he=f({name:"Intro",props:{lang:{type:String},repo:String,onRepoChange:{type:Function}},setup(e){const n=T(e,"lang"),o=v(()=>B[n.value]),i=b(null),r=b({repo:e.repo,title:"",type:"Bug",versionRepository:"",versionStructure:"",versionSystem:"",versionNode:"",reproduce:"",steps:"",expected:"",actual:"",remarks:"",functionContent:"",functionalExpectations:""}),l=v(()=>!!o.value.repos.find(c=>c.github===r.value.repo).npm),d=v(()=>{const u=o.value.valid;let c={};for(let g in u)g==="remarks"||g==="versionNode"||g==="versionRepository"||(c[g]=[{required:!0,message:u[g],trigger:"change"}]);c.versionRepository=[{required:l.value,message:u.versionRepository,trigger:"change"}];const m=n.value==="zh-CN"?"\u8BF7\u586B\u5199\u6B63\u786E\u7684\u91CD\u73B0\u94FE\u63A5":"Please input a valid reproduction link";return c.reproduce.push({trigger:"change",validator:g=>new Promise(M=>{M(g&&/(github|jsfiddle|codepen|jsbin|codesandbox|stackblitz|tdesign)/gi.test(g))}),message:m}),c}),$=v(()=>r.value.type==="Bug"),O=v(()=>o.value.repos.map(u=>({label:u.name,value:u.github}))),y=b([]),A=v(()=>{const u=o.value.repos.find(c=>c.github===r.value.repo);return`https://registry.npm.taobao.org/${u.npm&&u.npm}`}),k=async()=>{if(r.value.versionRepository="",y.value=[],!l.value)return;const u=await G.get(A.value),c=new RegExp(/-/);y.value=Object.keys(u.data.versions).filter(m=>!c.test(m)).map(m=>({label:m,value:m})),r.value.versionRepository=y.value[0].value};return j(()=>{k()}),R(()=>r.value.repo,()=>{k(),i.value.clearValidate()}),R(()=>r.value.type,()=>{i.value.clearValidate()}),{formRef:i,contentText:o,repoOptions:O,versionOptions:y,formData:r,rules:d,isBug:$,handlePreview:({validateResult:u,firstError:c,e:m})=>{m.preventDefault(),u===!0?ce($,r,o):H.warning(c)}}},render(){const{contentText:e,formData:n}=this;return t(a("t-content"),{class:[s.contentBox,s.formBox]},{default:()=>[t(a("t-form"),{ref:"formRef",data:this.formData,onSubmit:this.handlePreview,rules:this.rules,"label-align":"top"},{default:()=>[t(a("t-row"),{gutter:48,class:s.formItem},{default:()=>[t(a("t-col"),{span:6},{default:()=>[t(a("t-form-item"),{label:e.issueTypesLabel,name:"type",key:"type"},{default:()=>[t(a("t-radio-group"),{variant:"default-filled",modelValue:n.type,"onUpdate:modelValue":o=>n.type=o,style:"width: 100%; text-align: center"},{default:()=>[t(a("t-radio-button"),{value:e.issueTypes[0].value,style:"width: 50%"},{default:()=>[e.issueTypes[0].label]}),t(a("t-radio-button"),{value:e.issueTypes[1].value,style:"width: 50%"},{default:()=>[e.issueTypes[1].label]})]})]})]}),t(a("t-col"),{span:6},{default:()=>[t(a("t-form-item"),{label:e.repoSelectLabel,name:"repo",key:"repo"},{default:()=>[t(a("t-select"),{value:n.repo,"onUpdate:value":o=>n.repo=o,options:this.repoOptions,onChange:o=>this.onRepoChange(o)},null)]})]})]}),t(a("t-row"),{gutter:48,class:s.formItem},{default:()=>[t(a("t-col"),{span:12},{default:()=>[t(a("t-form-item"),{label:e.issueTitleLabel,name:"title",key:"title"},{default:()=>[t(a("t-input"),{modelValue:n.title,"onUpdate:modelValue":o=>n.title=o,placeholder:e.issueTitlePlaceholder},null)]})]})]}),this.isBug?t(L,null,[t(a("t-row"),{gutter:48,class:s.formItem},{default:()=>[t(a("t-col"),{span:6},{default:()=>[t(a("t-form-item"),{label:e.versionRepositoryLabel,name:"versionRepository",key:"versionRepository"},{default:()=>[t(a("t-select"),{value:n.versionRepository,"onUpdate:value":o=>n.versionRepository=o,options:this.versionOptions},null)]})]}),t(a("t-col"),{span:6},{default:()=>[t(a("t-form-item"),{label:e.versionStructureLabel,name:"versionStructure",key:"versionStructure"},{default:()=>[t(a("t-input"),{modelValue:n.versionStructure,"onUpdate:modelValue":o=>n.versionStructure=o,placeholder:e.versionStructurePlaceholder},null)]})]}),t("div",{class:[s.tipContent,s.contentText]},[t(a("v-node"),{render:e.versionRepositoryTip},null)])]}),t(a("t-row"),{gutter:48,class:s.formItem},{default:()=>[t(a("t-col"),{span:6},{default:()=>[t(a("t-form-item"),{label:e.versionSystemLabel,name:"versionSystem",key:"versionSystem"},{default:()=>[t(a("t-input"),{modelValue:n.versionSystem,"onUpdate:modelValue":o=>n.versionSystem=o,placeholder:e.versionSystemPlaceholder},null)]})]}),t(a("t-col"),{span:6},{default:()=>[t(a("t-form-item"),{label:e.versionNodeLabel,name:"versionNode",key:"versionNode"},{default:()=>[t(a("t-input"),{modelValue:n.versionNode,"onUpdate:modelValue":o=>n.versionNode=o,placeholder:e.placeholder},null)]})]})]}),t(a("t-row"),{gutter:48,class:s.formItem},{default:()=>[t(a("t-col"),{span:12},{default:()=>[t(a("t-form-item"),{label:e.reproduceLabel,name:"reproduce",key:"reproduce"},{default:()=>[t(a("t-input"),{modelValue:n.reproduce,"onUpdate:modelValue":o=>n.reproduce=o,placeholder:e.pictureTipPlaceholder},null)]})]}),t("div",{class:[s.tipContent,s.contentText]},[t(a("v-node"),{render:e.reproduceTip},null)])]}),t(a("t-row"),{gutter:48,class:s.formItem},{default:()=>[t(a("t-col"),{span:12},{default:()=>[t(a("t-form-item"),{label:e.stepsLabel,name:"steps",key:"steps"},{default:()=>[t(a("t-textarea"),{modelValue:n.steps,"onUpdate:modelValue":o=>n.steps=o,autosize:{minRows:2,maxRows:5},placeholder:e.pictureTipPlaceholder},null)]})]}),t("div",{class:[s.tipContent,s.contentText]},[t(a("v-node"),{render:e.stepsTip},null)])]}),t(a("t-row"),{gutter:48,class:s.formItem},{default:()=>[t(a("t-col"),{span:12},{default:()=>[t(a("t-form-item"),{label:e.expectLabel,name:"expected",key:"expected"},{default:()=>[t(a("t-textarea"),{modelValue:n.expected,"onUpdate:modelValue":o=>n.expected=o,autosize:{minRows:2,maxRows:5},placeholder:e.placeholder},null)]})]})]}),t(a("t-row"),{gutter:48,class:s.formItem},{default:()=>[t(a("t-col"),{span:12},{default:()=>[t(a("t-form-item"),{label:e.actualLabel,name:"actual",key:"actual"},{default:()=>[t(a("t-textarea"),{modelValue:n.actual,"onUpdate:modelValue":o=>n.actual=o,autosize:{minRows:2,maxRows:5},placeholder:e.placeholder},null)]})]})]}),t(a("t-row"),{gutter:48},{default:()=>[t(a("t-col"),{span:12},{default:()=>[t(a("t-form-item"),{label:e.remarksLabel,name:"remarks",key:"remarks"},{default:()=>[t(a("t-textarea"),{modelValue:n.remarks,"onUpdate:modelValue":o=>n.remarks=o,autosize:{minRows:2,maxRows:5},placeholder:e.placeholder},null)]})]}),t("div",{class:[s.tipContent,s.contentText]},[t(a("v-node"),{render:e.remarksTip},null)])]})]):t(L,null,[t(a("t-row"),{gutter:48,class:s.formItem},{default:()=>[t(a("t-col"),{span:12},{default:()=>[t(a("t-form-item"),{label:e.functionContentLabel,name:"functionContent",key:"functionContent"},{default:()=>[t(a("t-textarea"),{modelValue:n.functionContent,"onUpdate:modelValue":o=>n.functionContent=o,autosize:{minRows:2,maxRows:5},placeholder:e.placeholder},null)]})]}),t("div",{class:[s.tipContent,s.contentText]},[t(a("v-node"),{render:e.functionContentTip},null)])]}),t(a("t-row"),{gutter:48},{default:()=>[t(a("t-col"),{span:12},{default:()=>[t(a("t-form-item"),{label:e.functionalExpectationsLabel,name:"functionalExpectations",key:"functionalExpectations"},{default:()=>[t(a("t-textarea"),{modelValue:n.functionalExpectations,"onUpdate:modelValue":o=>n.functionalExpectations=o,autosize:{minRows:2,maxRows:5},placeholder:e.placeholder},null)]})]})]})]),t(a("t-row"),{gutter:48,class:s.formPreview},{default:()=>[t(a("t-col"),{span:4,offset:4},{default:()=>[t(a("t-button"),{block:!0,theme:"primary",variant:"base",type:"submit"},{default:()=>[e.preview]})]})]})]})]})}});const _=()=>V.parse(window.location.search.slice(1)),x=e=>{const{origin:n,pathname:o}=window.location,i=n+o+"?"+V.stringify(w(w({},_()),e),{encode:!1});window.history.pushState({path:i},"",i)},be="_layout_f3g35_1";var ye={layout:be},_e=f({name:"IssuePage",setup(){const e=b("zh-CN"),n=b("Tencent/tdesign"),o=l=>{e.value=l,x({lang:l})},i=l=>{n.value=l,x({repo:l})},r=_();return(r==null?void 0:r.lang)?o(r.lang):x({lang:e.value}),(r==null?void 0:r.repo)?i(r.repo):x({repo:n.value}),window.addEventListener("popstate",()=>{var l,d;e.value=((l=_())==null?void 0:l.lang)||"zh-CN",n.value=((d=_())==null?void 0:d.repo)||"Tencent/tdesign"}),{lang:e,repo:n,setLang:o,setRepo:i}},render(){const{lang:e,repo:n}=this;return t(a("t-layout"),{class:ye.layout},{default:()=>[t(te,{lang:e,onLangChange:this.setLang},null),t(ie,{lang:e,repo:n},null),t(he,{lang:e,repo:n,onRepoChange:this.setRepo},null)]})}});var xe=(e,n)=>{const o=e.__vccOpts||e;for(const[i,r]of n)o[i]=r;return o};const we=f({name:"App",components:{IssuePage:_e}});function Te(e,n,o,i,r,l){const d=a("IssuePage");return K(),Q(d)}var Le=xe(we,[["render",Te]]);const I=J(Le);I.component("VNode",f({props:["render"],render(){const{render:e}=this;return typeof e=="function"?e():typeof e=="string"?N(e):typeof e=="number"?N(String(e)):null}}));I.use(X);I.mount("#app");
