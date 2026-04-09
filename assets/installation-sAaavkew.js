import{_ as r,c as u,w as t,r as p,o as c,a as e,b as n}from"./index-Ct5Lx6Lz.js";const d={},i={class:"installation-doc"};function f(m,l){const a=p("t-card-body"),o=p("t-card"),s=p("t-page");return c(),u(s,null,{default:t(()=>[e("section",i,[n(o,{class:"section-card"},{default:t(()=>[n(a,null,{default:t(()=>[...l[0]||(l[0]=[e("h1",null,"Installation",-1),e("p",{class:"lead"}," Install Toife packages and set up your Vue app in a few steps. ",-1)])]),_:1})]),_:1}),n(o,{class:"section-card"},{default:t(()=>[n(a,null,{default:t(()=>[...l[1]||(l[1]=[e("h2",null,"1. Install packages",-1),e("p",null,"Install the core Vue package and theme package:",-1),e("pre",null,[e("code",null,"npm install @toife/vue @toife/sass-layer-generator")],-1),e("pre",null,[e("code",null,"yarn add @toife/vue @toife/sass-layer-generator")],-1),e("pre",null,[e("code",null,"pnpm add @toife/vue @toife/sass-layer-generator")],-1)])]),_:1})]),_:1}),n(o,{class:"section-card"},{default:t(()=>[n(a,null,{default:t(()=>[...l[2]||(l[2]=[e("h2",null,"2. Import theme styles",-1),e("p",null,"Import the stylesheet in your app entry file:",-1),e("pre",null,[e("code",null,`// main.ts
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')`)],-1)])]),_:1})]),_:1}),n(o,{class:"section-card"},{default:t(()=>[n(a,null,{default:t(()=>[...l[3]||(l[3]=[e("h2",null,"3. Register Toife",-1),e("p",null,"Register the plugin so components are available globally:",-1),e("pre",null,[e("code",null,`// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import Toife from '@toife/vue'

const app = createApp(App)
app.use(Toife)
app.mount('#app')`)],-1)])]),_:1})]),_:1}),n(o,{class:"section-card"},{default:t(()=>[n(a,null,{default:t(()=>[...l[4]||(l[4]=[e("h2",null,"4. Use components",-1),e("p",null,"You can now use Toife components in your templates:",-1),e("pre",null,[e("code",null,`<template>
  <t-button type="button">Get started</t-button>
</template>`)],-1)])]),_:1})]),_:1})])]),_:1})}const y=r(d,[["render",f],["__scopeId","data-v-398a243e"]]);export{y as default};
