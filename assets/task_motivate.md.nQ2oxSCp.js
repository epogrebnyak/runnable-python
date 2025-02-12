import{_ as s,C as t,c as n,o as l,a2 as a,G as o}from"./chunks/framework.CvwbFZHS.js";const m=JSON.parse('{"title":"Motivate","description":"","frontmatter":{},"headers":[],"relativePath":"task/motivate.md","filePath":"task/motivate.md"}'),r={name:"task/motivate.md"};function h(p,i,d,k,c,g){const e=t("Editor");return l(),n("div",null,[i[0]||(i[0]=a(`<h1 id="motivate" tabindex="-1">Motivate <a class="header-anchor" href="#motivate" aria-label="Permalink to &quot;Motivate&quot;">​</a></h1><blockquote><p>Want to learn Python? Will not accept &quot;No&quot; as an answer.</p></blockquote><p>Run the code below using the ▶️ button, and see if you can finish the conversation by agreeing to learn Python. Press <code>Enter</code> after typing your answer each time.</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> motivate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(language</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Python&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  while</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> True</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    answer </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> input</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Would you like to learn </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">language</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">?</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> answer.lower().startswith(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;yes&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Full support and good luck to you!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      break</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Sorry, I cannot accept that as an answer.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">motivate()</span></span></code></pre></div>`,4)),o(e,{id:"i-motivate"}),i[1]||(i[1]=a('<details class="details custom-block"><summary>Exercise: Modify existing code</summary><ol><li>Make a small change in line 10 to motivate learning C or Rust instead of Python.</li><li>Add some <a href="https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.mjs" target="_blank" rel="noreferrer">emojis</a> ⛳ to program messages.</li><li>Add a counter of attempts: <ul><li>print current attempt number,</li><li>print total number of attempts at program end,</li><li>limit number of attempts allowed.</li></ul></li><li>Make the program work for a human language: <ul><li>accept &#39;yes&#39; in a different language (for example, &#39;oui&#39; in French),</li><li>print a few additional messages in this new language,</li><li>add motivational quotes to the program messages.</li></ul></li><li>Change line 4 to make sure an answer like <code>You win, yes!</code> also stops the program. (Hint: look for <code>yes</code> anywhere in the <code>answer</code>.)</li><li>Accept the letter <code>Q</code> or <code>q</code> as a command to quit the program without extra message.</li><li>Can the program use different messages on first and other attempts?</li><li>Suggest alternatives like &quot;learn in depth&quot;, &quot;make acquaintance&quot;, etc., and provide some useful fact depending on the answer.</li></ol></details><details class="details custom-block"><summary>Exercise: Talk about code</summary><ol><li>Explain in plain words what the program above does.</li><li>What are the main steps in this program?</li><li>Identify in the code: <ul><li>infinite <code>while</code> loop with <code>True</code> condition</li><li><code>break</code> command,</li><li>conditional statements with <code>if</code>,</li><li>a new function definition with a default argument</li><li>a function call,</li><li><code>print</code> and <code>input</code> for user interaction,</li><li>an f-string, and</li><li>a chain of string operations on the <code>answer</code> variable.</li></ul></li></ol></details><details class="details custom-block"><summary>Exercise: Reuse the code for a different app</summary><p>How about making a really useful, but minimal programming reference that compares Python to other programming languages?</p><p>You can reuse the <code>motivate(language)</code> approach from above. Make sure you change the data structures and allow extending the reference to even more programming languages.</p><p>You can make this a reference for textbooks, songs, paintings, travel destinations, or other objects or matters that interest you most.</p><p>Things list for a programming language reference are listed below. Pick just a few items that are most spectacular. Same approach applies if you make a reference in other subject - juggle with just a few categories first.</p><ul><li>How old is this programming language?</li><li>How popular is it, and how is it measured?</li><li>What is the latest version?</li><li>Most popular software written in this language.</li><li>Trending package on Github this week.</li><li>A package with most stars on Github.</li><li>Programming paradigms used.</li><li>Ancestors and competitors.</li><li>Link to official docs or a distribution.</li><li>Where to download it from.</li><li>Is there a language standard (there is for C and SQL).</li><li>Best references or free books.</li><li>Sets of exercises and exercise sections.</li><li>Code example (but please not a &quot;Hello, World&quot;).</li><li>An example from <a href="https://rosettacode.org/wiki/Rosetta_Code" target="_blank" rel="noreferrer">Rosetta Code</a>.</li><li>Other cool things that differentiate programming languages that you can think of.</li></ul></details>',3))])}const E=s(r,[["render",h]]);export{m as __pageData,E as default};
