import{_ as c}from"./AppLayout-e0392dd8.js";import{c as i,w as t,s as _,o,a as e,b as a,f as l,d as r,g as h,F as x,t as f}from"./app-bbe7c36e.js";import"./_plugin-vue_export-helper-c27b6911.js";const u=e("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Bus Dashboard ",-1),m={class:"flex mt-4 justify-between shadow rounded overflow-hidden"},p={class:"py-12"},b={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},g={class:"bg-white overflow-hidden shadow-xl sm:rounded-lg p-4"},w=e("h1",{class:"text-2xl mb-4"},"Routes",-1),v={class:"mb-4"},y={class:"flex space-x-2"},k=e("span",{class:"font-bold"},"Name:",-1),B={class:"text-blue-600"},V={__name:"Dashboard",setup(D){return onMounted(()=>{store.dispatch("DataController","getRoutes")}),(n,C)=>{const s=_("Link");return o(),i(c,{title:"Dashboard"},{header:t(()=>[u,e("div",m,[a(s,{class:"flex-1 bg-blue-600 text-white font-bold text-center py-2 text-sm",href:"/route/create"},{default:t(()=>[l("Add Route")]),_:1}),a(s,{class:"flex-1 bg-blue-600 text-white font-bold text-center py-2 text-sm",href:"/dashboard/stop"},{default:t(()=>[l("Create Prospect")]),_:1})])]),default:t(()=>[e("div",p,[e("div",b,[e("div",g,[w,(o(!0),r(x,null,h(n.store.routes,d=>(o(),r("div",v,[e("div",y,[a(s,{class:"flex space-x-2",href:"/route/view?id="+d.id},{default:t(()=>[k,e("span",B,f(d.name),1)]),_:2},1032,["href"])])]))),256))])])])]),_:1})}}};export{V as default};
