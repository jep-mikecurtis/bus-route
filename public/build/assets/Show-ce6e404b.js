import{_ as i}from"./AppLayout-d7294ec2.js";import o from"./DeleteTeamForm-4ba768f9.js";import{S as r}from"./SectionBorder-dd2698d2.js";import l from"./TeamMemberManager-7f52a8f5.js";import n from"./UpdateTeamNameForm-ffc681b4.js";import{c,w as a,o as s,a as m,b as t,d as p,F as d,e as f}from"./app-8edd1505.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ActionSection-ae994f26.js";import"./SectionTitle-4e7908db.js";import"./ConfirmationModal-898d7406.js";import"./Modal-432cad61.js";import"./DangerButton-5a88567f.js";import"./SecondaryButton-4ddf689c.js";import"./ActionMessage-e707c897.js";import"./DialogModal-3ff0055e.js";import"./FormSection-6b167755.js";import"./TextInput-351a5c8f.js";import"./InputLabel-68720bc8.js";import"./PrimaryButton-c6d43819.js";const u=m("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Team Settings ",-1),x={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},E={__name:"Show",props:{team:Object,availableRoles:Array,permissions:Object},setup(e){return(b,h)=>(s(),c(i,{title:"Team Settings"},{header:a(()=>[u]),default:a(()=>[m("div",null,[m("div",x,[t(n,{team:e.team,permissions:e.permissions},null,8,["team","permissions"]),t(l,{class:"mt-10 sm:mt-0",team:e.team,"available-roles":e.availableRoles,"user-permissions":e.permissions},null,8,["team","available-roles","user-permissions"]),e.permissions.canDeleteTeam&&!e.team.personal_team?(s(),p(d,{key:0},[t(r),t(o,{class:"mt-10 sm:mt-0",team:e.team},null,8,["team"])],64)):f("",!0)])])]),_:1}))}};export{E as default};