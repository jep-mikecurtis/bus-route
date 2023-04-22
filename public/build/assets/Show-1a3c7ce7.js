import{_ as p}from"./AppLayout-b3850dc0.js";import c from"./DeleteUserForm-fde1d3fb.js";import l from"./LogoutOtherBrowserSessionsForm-e956d0a6.js";import{S as s}from"./SectionBorder-0363c610.js";import f from"./TwoFactorAuthenticationForm-7dc408d1.js";import u from"./UpdatePasswordForm-d08ac700.js";import d from"./UpdateProfileInformationForm-e595ee0e.js";import{c as _,w as n,o as e,a as i,d as r,b as t,e as a,F as h}from"./app-a0f93577.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ActionSection-4da3eabf.js";import"./SectionTitle-c0d5cde6.js";import"./DangerButton-28d9025b.js";import"./DialogModal-ac2f2dc3.js";import"./Modal-58b57708.js";import"./TextInput-b0e74aa0.js";import"./SecondaryButton-ea8486d3.js";import"./ActionMessage-032a5332.js";import"./PrimaryButton-821b19bc.js";import"./InputLabel-80e3c30d.js";import"./FormSection-fd999d22.js";const g=i("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Profile ",-1),$={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},w={key:0},k={key:1},y={key:2},H={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(o,x)=>(e(),_(p,{title:"Profile"},{header:n(()=>[g]),default:n(()=>[i("div",null,[i("div",$,[o.$page.props.jetstream.canUpdateProfileInformation?(e(),r("div",w,[t(d,{user:o.$page.props.auth.user},null,8,["user"]),t(s)])):a("",!0),o.$page.props.jetstream.canUpdatePassword?(e(),r("div",k,[t(u,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),o.$page.props.jetstream.canManageTwoFactorAuthentication?(e(),r("div",y,[t(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),o.$page.props.jetstream.hasAccountDeletionFeatures?(e(),r(h,{key:3},[t(s),t(c,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{H as default};