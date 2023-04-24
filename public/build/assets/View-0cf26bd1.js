import{c as w,w as a,o as d,a as t,f,t as n,d as u,k as l,C as i,h as p,e as v,g as h,F as k,b as m}from"./app-74142b45.js";import{_ as c}from"./AppLayout-6c763853.js";import{_ as b}from"./Modal-e8c9ec72.js";import"./_plugin-vue_export-helper-c27b6911.js";const C=t("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Route Info ",-1),g={class:"py-12"},E={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},S={class:"bg-white overflow-hidden shadow-xl sm:rounded-lg p-4"},$={class:"flex justify-between"},_=t("b",null," Route: ",-1),V=t("label",{for:"name"},"Route Name",-1),D=t("div",null,[t("button",{type:"submit",class:"bg-blue-600"}," Save ")],-1),U={class:"flex justify-between my-6"},A=t("h1",null,[t("b",null," Stops ")],-1),N={class:"mb-6 border p-4 rounded shadow-sm flex flex-col space-y-4 max-w-xl"},j={class:"flex justify-between"},z=t("b",null," Stop: ",-1),P={class:"flex space-x-2"},R=["onClick"],B=["onClick"],x=["onClick"],F=t("p",null,[t("b",null," Address: ")],-1),L=["href"],M={class:"flex space-x-4"},T=["onClick"],q={class:"my-2 flex items-center space-x-2 flex-wrap"},I=["onClick"],O=["href"],Z={class:"flex space-x-4"},G=t("b",null,"Pickup:",-1),H={class:"flex items-center justify-between p-4"},J=t("h2",{class:"text-xl"},"Add Stop",-1),K=t("label",{for:"order"},"Order",-1),Q=t("label",{for:"street"},"Street",-1),W=t("label",{for:"street"},"Apt #",-1),X=t("label",{for:"city"},"City",-1),Y=t("label",{for:"state"},"State",-1),tt=t("label",{for:"zip"},"Zip",-1),et={class:"flex flex-row justify-end"},ot=t("button",{type:"submit",class:"bg-blue-500 hover:bg-blue-700"}," Add Stop ",-1),st=t("h2",{class:"text-xl p-4"},"Contact",-1),nt=t("label",{for:"first_name"},"First Name",-1),lt=t("label",{for:"last_name"},"Last Name",-1),it=t("label",{for:"phone"},"Phone",-1),rt=t("label",{for:"email"},"Email",-1),dt={class:"flex flex-row justify-end"},at=t("button",{type:"submit",class:"bg-blue-600 min-w-[100px]"}," Save ",-1),ut=t("h2",{class:"text-xl p-4"},"Add Pickup",-1),pt=t("label",{for:"first_name"},"Date",-1),mt={class:"flex flex-row justify-end"},bt=t("button",{type:"submit",class:"bg-blue-600 min-w-[100px]"}," Save ",-1),ct={__name:"View",setup(ft){onMounted(()=>{store.dispatch("DataController","getRoute")});const y=e=>e?(e=new Date(e),e.setDate(e.getDate()+1),e=e.toLocaleDateString("en-US"),e):"";return(e,s)=>(d(),w(c,{title:"Dashboard"},{header:a(()=>[C]),default:a(()=>[t("div",g,[t("div",E,[t("div",S,[t("div",$,[t("h1",null,[_,f(" "+n(e.store.route.name),1)]),t("button",{onClick:s[0]||(s[0]=o=>e.store.routeEdit=!e.store.routeEdit)}," Edit ")]),e.store.routeEdit?(d(),u("form",{key:0,onSubmit:s[2]||(s[2]=p(o=>{e.store.submit("DataController","storeRoute",["route"]),e.store.routeEdit=!1},["prevent"]))},[t("div",null,[V,l(t("input",{type:"text",name:"name","onUpdate:modelValue":s[1]||(s[1]=o=>e.store.route.name=o)},null,512),[[i,e.store.route.name]])]),D],32)):v("",!0),t("div",U,[A,t("button",{onClick:s[3]||(s[3]=o=>{e.store.stopEdit=!e.store.stopEdit,e.store.stop={}})}," Add Stop ")]),(d(!0),u(k,null,h(e.store.stops,o=>(d(),u("div",N,[t("div",j,[t("p",null,[z,f(" "+n(o.order),1)]),t("div",P,[t("button",{class:"bg-blue-600 text-white rounded shadow text-xs font-bold p-1",onClick:r=>{e.store.stop=o,e.store.stopEdit=!0}}," Edit Stop ",8,R),t("button",{class:"bg-blue-600 text-white rounded shadow text-xs font-bold p-1",onClick:r=>{e.store.stop=o,e.store.contact={},e.store.contactEdit=!0}}," Add Contact ",8,B),t("button",{class:"bg-blue-600 text-white rounded shadow text-xs font-bold p-1",onClick:r=>{e.store.pickupEdit=!e.store.pickupEdit,e.store.pickup={},e.store.stop=o}}," Add Pickup ",8,x)])]),t("div",null,[F,t("p",null,[t("a",{href:"http://maps.google.com/?q="+o.street+" "+o.city+" "+o.state+" "+o.zip,target:"_blank"},n(o.street)+" "+n(o.street_2?`Apt: ${o.street_2}`:""),9,L)]),t("p",null,n(o.city)+", "+n(o.state)+" "+n(o.zip),1)]),t("div",null,[t("p",M,[t("b",null," Contacts: "+n(o.contacts.length),1),t("button",{class:"text-blue-600",onClick:r=>e.store[`show-stop-${o.id}`]=!e.store[`show-stop-${o.id}`]}," Show ",8,T)]),e.store[`show-stop-${o.id}`]?(d(!0),u(k,{key:0},h(o.contacts,r=>(d(),u("div",null,[t("div",q,[t("button",{class:"text-blue-600",onClick:vt=>{e.store.contactEdit=!0,e.store.contact=r,e.store.stop=o}},n(r.first_name)+" "+n(r.last_name),9,I),t("a",{href:"tel:"+r.phone,class:"text-purple-800 block"},n(r.phone),9,O),t("p",null,n(r.email),1)])]))),256)):v("",!0)]),t("div",null,[t("p",Z,[G,t("span",null,n(o.pickups.length?y(o.pickups[0].date):"None"),1)])])]))),256))])])]),m(b,{show:e.store.stopEdit},{default:a(()=>[t("div",H,[J,t("button",{class:"text-red-600",onClick:s[4]||(s[4]=o=>{e.store.submit("DataController","deleteStop",["stop"]),e.store.stopEdit=!1})}," Delete Stop ")]),t("form",{onSubmit:s[12]||(s[12]=p(o=>{e.store.submit("DataController","storeStop",["stop","route"]),e.store.stopEdit=!1},["prevent"])),class:"p-4"},[t("div",null,[K,l(t("input",{type:"text",name:"order",id:"order","onUpdate:modelValue":s[5]||(s[5]=o=>e.store.stop.order=o)},null,512),[[i,e.store.stop.order]])]),t("div",null,[Q,l(t("input",{type:"text",name:"street",id:"street","onUpdate:modelValue":s[6]||(s[6]=o=>e.store.stop.street=o)},null,512),[[i,e.store.stop.street]])]),t("div",null,[W,l(t("input",{type:"text",name:"street",id:"street","onUpdate:modelValue":s[7]||(s[7]=o=>e.store.stop.street_2=o)},null,512),[[i,e.store.stop.street_2]])]),t("div",null,[X,l(t("input",{type:"text",name:"city",id:"city","onUpdate:modelValue":s[8]||(s[8]=o=>e.store.stop.city=o)},null,512),[[i,e.store.stop.city]])]),t("div",null,[Y,l(t("input",{type:"text",name:"state",id:"state","onUpdate:modelValue":s[9]||(s[9]=o=>e.store.stop.state=o)},null,512),[[i,e.store.stop.state]])]),t("div",null,[tt,l(t("input",{type:"text",name:"zip",id:"zip","onUpdate:modelValue":s[10]||(s[10]=o=>e.store.stop.zip=o)},null,512),[[i,e.store.stop.zip]])]),t("div",et,[t("button",{onClick:s[11]||(s[11]=o=>{e.store.stopEdit=!1,e.store.stop={}}),class:"bg-red-600"}," Cancel "),ot])],32)]),_:1},8,["show"]),m(b,{show:e.store.contactEdit},{default:a(()=>[st,t("form",{onSubmit:s[18]||(s[18]=p(o=>{e.store.submit("DataController","storeContact",["stop","contact","route"]),e.store.contactEdit=!1},["prevent"])),class:"p-4"},[t("div",null,[nt,l(t("input",{"onUpdate:modelValue":s[13]||(s[13]=o=>e.store.contact.first_name=o),type:"text",name:"first_name",id:"first_name"},null,512),[[i,e.store.contact.first_name]])]),t("div",null,[lt,l(t("input",{"onUpdate:modelValue":s[14]||(s[14]=o=>e.store.contact.last_name=o),type:"text",name:"last_name",id:"last_name"},null,512),[[i,e.store.contact.last_name]])]),t("div",null,[it,l(t("input",{"onUpdate:modelValue":s[15]||(s[15]=o=>e.store.contact.phone=o),type:"text",name:"phone",id:"phone"},null,512),[[i,e.store.contact.phone]])]),t("div",null,[rt,l(t("input",{"onUpdate:modelValue":s[16]||(s[16]=o=>e.store.contact.email=o),type:"text",name:"email",id:"email"},null,512),[[i,e.store.contact.email]])]),t("div",dt,[t("button",{type:"button",class:"bg-red-600 min-w-[100px]",onClick:s[17]||(s[17]=o=>{e.store.contactEdit=!1,e.store.stop={},e.store.contact={}})}," Cancel "),at])],32)]),_:1},8,["show"]),m(b,{show:e.store.pickupEdit},{default:a(()=>[ut,t("form",{onSubmit:s[21]||(s[21]=p(o=>{e.store.submit("DataController","storePickup",["pickup","stop","route"]),e.store.pickupEdit=!1},["prevent"])),class:"p-4"},[t("div",null,[pt,l(t("input",{"onUpdate:modelValue":s[19]||(s[19]=o=>e.store.pickup.date=o),type:"date",name:"first_name",id:"first_name"},null,512),[[i,e.store.pickup.date]])]),t("div",mt,[t("button",{type:"button",class:"bg-red-600 min-w-[100px]",onClick:s[20]||(s[20]=o=>{e.store.pickupEdit=!1,e.store.stop={},e.store.pickup={}})}," Cancel "),bt])],32)]),_:1},8,["show"])]),_:1}))}};export{ct as default};
