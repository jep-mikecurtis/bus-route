import{v as _,d as c,b as e,u as o,w as l,F as g,o as f,X as w,a as r,f as d,e as h,i as v,n as y,h as V}from"./app-04ec7faa.js";import{A as b}from"./AuthenticationCard-642f2578.js";import{_ as k}from"./AuthenticationCardLogo-46508717.js";import{_ as x}from"./Checkbox-c304d187.js";import{_ as u,a as n}from"./TextInput-8ecf66c9.js";import{_ as i}from"./InputLabel-8727d930.js";import{_ as $}from"./PrimaryButton-1a9cf952.js";import"./_plugin-vue_export-helper-c27b6911.js";const P=["onSubmit"],q={class:"mt-4"},C={class:"mt-4"},N={class:"mt-4"},U={key:0,class:"mt-4"},A={class:"flex items-center"},F={class:"ml-2"},B=["href"],R=["href"],S={class:"flex items-center justify-end mt-4"},H={__name:"Register",setup(T){const s=_({name:"",email:"",password:"",password_confirmation:"",terms:!1}),p=()=>{s.post(route("register"),{onFinish:()=>s.reset("password","password_confirmation")})};return(m,a)=>(f(),c(g,null,[e(o(w),{title:"Register"}),e(b,null,{logo:l(()=>[e(k)]),default:l(()=>[r("form",{onSubmit:V(p,["prevent"])},[r("div",null,[e(i,{for:"name",value:"Name"}),e(u,{id:"name",modelValue:o(s).name,"onUpdate:modelValue":a[0]||(a[0]=t=>o(s).name=t),type:"text",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),e(n,{class:"mt-2",message:o(s).errors.name},null,8,["message"])]),r("div",q,[e(i,{for:"email",value:"Email"}),e(u,{id:"email",modelValue:o(s).email,"onUpdate:modelValue":a[1]||(a[1]=t=>o(s).email=t),type:"email",class:"mt-1 block w-full",required:"",autocomplete:"username"},null,8,["modelValue"]),e(n,{class:"mt-2",message:o(s).errors.email},null,8,["message"])]),r("div",C,[e(i,{for:"password",value:"Password"}),e(u,{id:"password",modelValue:o(s).password,"onUpdate:modelValue":a[2]||(a[2]=t=>o(s).password=t),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),e(n,{class:"mt-2",message:o(s).errors.password},null,8,["message"])]),r("div",N,[e(i,{for:"password_confirmation",value:"Confirm Password"}),e(u,{id:"password_confirmation",modelValue:o(s).password_confirmation,"onUpdate:modelValue":a[3]||(a[3]=t=>o(s).password_confirmation=t),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),e(n,{class:"mt-2",message:o(s).errors.password_confirmation},null,8,["message"])]),m.$page.props.jetstream.hasTermsAndPrivacyPolicyFeature?(f(),c("div",U,[e(i,{for:"terms"},{default:l(()=>[r("div",A,[e(x,{id:"terms",checked:o(s).terms,"onUpdate:checked":a[4]||(a[4]=t=>o(s).terms=t),name:"terms",required:""},null,8,["checked"]),r("div",F,[d(" I agree to the "),r("a",{target:"_blank",href:m.route("terms.show"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},"Terms of Service",8,B),d(" and "),r("a",{target:"_blank",href:m.route("policy.show"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},"Privacy Policy",8,R)])]),e(n,{class:"mt-2",message:o(s).errors.terms},null,8,["message"])]),_:1})])):h("",!0),r("div",S,[e(o(v),{href:m.route("login"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:l(()=>[d(" Already registered? ")]),_:1},8,["href"]),e($,{class:y(["ml-4",{"opacity-25":o(s).processing}]),disabled:o(s).processing},{default:l(()=>[d(" Register ")]),_:1},8,["class","disabled"])])],40,P)]),_:1})],64))}};export{H as default};
