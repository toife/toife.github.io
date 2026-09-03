import{c,a,o as r}from"./index-finOKzIB.js";const n=(e,t)=>{const o=e.__vccOpts||e;for(const[s,d]of t)o[s]=d;return o},l={},i={class:"docs-article"};function p(e,t){return r(),c("article",i,[...t[0]||(t[0]=[a(`<span class="docs-tag">@toife/vue</span><h1>Tài liệu component Vue</h1><p class="docs-lead"> Trang này demo toàn bộ tag <code>t-*</code> của <code>@toife/components/vue</code>. Types, defaults và SCSS nằm ở <code>@toife/components/core</code>. Vue chỉ adapt core. </p><h2 class="docs-kicker">Cài đặt</h2><pre class="setup-code">pnpm add @toife/vue vue vue-router @toife/gesture @toife/sass-layer sass</pre><h2 class="docs-kicker">Đăng ký</h2><pre class="setup-code">import { createApp } from &quot;vue&quot;;
import { createToife } from &quot;@toife/vue&quot;;
import App from &quot;./App.vue&quot;;

const app = createApp(App);
const toife = createToife(app, { name: &quot;my-app&quot;, prefix: &quot;t-&quot; });
toife.subscribeAll();
toife.subscribe(&quot;back-header&quot;, BackHeader); // custom → &lt;t-back-header&gt;

app.mount(&quot;#app&quot;);</pre><h2 class="docs-kicker">Style</h2><pre class="setup-code">/* index.scss */
@use &quot;@toife/vue/styles/index.css&quot;;
@use &quot;@toife/sass-layer&quot; as layer;
@use &quot;@toife/sass-utils&quot; as utils;

@include layer.build();
@include utils.build();</pre><p class="docs-lead"> Cấu hình token (palette, layers, sizes) qua <code>@use &quot;@toife/sass-layer&quot; with ($modes: …)</code> — xem <code>src/styles/_config.scss</code> trong package này. </p><h2 class="docs-kicker">Shell</h2><pre class="setup-code">&lt;t-app :shape=&quot;theme.shape&quot; :direction=&quot;theme.direction&quot;&gt;
  &lt;t-route-wrapper&gt;
    &lt;t-route-navigator variant=&quot;swipe&quot; /&gt;
  &lt;/t-route-wrapper&gt;
&lt;/t-app&gt;</pre><h2 class="docs-kicker">Quy tắc bind</h2><table class="prop-table"><thead><tr><th>Pattern</th><th>Component</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>Field, Select, Checkbox, Switch, RadioGroup, Tabs, Collapse, Dropdown, SlideRange, SegmentedField</td></tr><tr><td><code>:visible</code> + <code>@close</code></td><td>Modal, Present, Action, DecisionModal — không dùng v-model</td></tr><tr><td>Native <code>@click</code></td><td>Button</td></tr><tr><td>Composable <code>.open()</code></td><td>useAction, useDecisionModal, useToast</td></tr></tbody></table><h2 class="docs-kicker">Theme tokens</h2><table class="prop-table"><thead><tr><th>Token</th><th>Giá trị</th><th>Ý nghĩa</th></tr></thead><tbody><tr><td><code>role</code></td><td>mode, primary, danger, success, warning, reverse</td><td>Màu</td></tr><tr><td><code>shape</code></td><td>pill, flat, rounded</td><td>Bo góc</td></tr><tr><td><code>variant</code></td><td>fill, outline, text (field thêm underline)</td><td>Chrome</td></tr><tr><td><code>size</code></td><td>small, standard, large</td><td>Tỉ lệ</td></tr></tbody></table><p class="docs-lead"> Chọn component ở sidebar để xem demo sống. Thanh trên cùng đổi Light/Dark và shape toàn app. </p>`,17)])])}const h=n(l,[["render",p]]);export{h as default};
