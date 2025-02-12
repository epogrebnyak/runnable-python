import{_ as a,c as s,o as e,a2 as t}from"./chunks/framework.CvwbFZHS.js";const g=JSON.parse('{"title":"Control flow","description":"","frontmatter":{},"headers":[],"relativePath":"ru/reference/control-flow.md","filePath":"ru/reference/control-flow.md"}'),o={name:"ru/reference/control-flow.md"};function i(p,n,l,c,r,d){return e(),s("div",null,n[0]||(n[0]=[t(`<h1 id="control-flow" tabindex="-1">Control flow <a class="header-anchor" href="#control-flow" aria-label="Permalink to &quot;Control flow&quot;">​</a></h1><p>In Python the commands, or <strong>statements</strong>, are executed in order, one after another. You can think of a Python program as a series of instructions that runs as a sequence. In addition to that the program may have <strong>branches</strong> and <strong>loops</strong>. These constructs are fundamental to expressing the logic of a program.</p><p>Both branches and loops operate over <strong>code blocks</strong>, some parts of the program that you may want to choose from or repeat.</p><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h2><p>A minimal visual picture for control flow concepts is the following.</p><h2 id="conditional-execution-and-branching" tabindex="-1">Conditional execution and branching <a class="header-anchor" href="#conditional-execution-and-branching" aria-label="Permalink to &quot;Conditional execution and branching&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  Sequence  --&gt; --&gt; --&gt; --&gt; --&gt; --&gt; One code block.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  Branch          / --&gt; --&gt; --&gt; --&gt;  Will run this part.</span></span>
<span class="line"><span>                 /</span></span>
<span class="line"><span>            --&gt; (?) Check condition</span></span>
<span class="line"><span>                 \\  here</span></span>
<span class="line"><span>                  \\ ==&gt; ==&gt; ==&gt; ==&gt;  Condition not met,</span></span>
<span class="line"><span>                                     this part will not run.</span></span></code></pre></div><ul><li>Logic of a code block <ul><li>achives some task with a boundary</li><li>has distinct variables available within block</li><li>may be reused or repeated</li></ul></li><li>Whitespace and identation in Python</li><li>Code blocks in other languages</li></ul><h2 id="if-for-conditional-execution-and-branching" tabindex="-1"><code>if</code> for conditional execution and branching <a class="header-anchor" href="#if-for-conditional-execution-and-branching" aria-label="Permalink to &quot;\`if\` for conditional execution and branching&quot;">​</a></h2><p>Also known as conditional execution.</p><ul><li><code>if... elif... else...</code></li><li><code>case</code> and pattern matching</li></ul><h2 id="for-loop-iterate-over-some-sequence" tabindex="-1"><code>for</code> loop: iterate over some sequence <a class="header-anchor" href="#for-loop-iterate-over-some-sequence" aria-label="Permalink to &quot;\`for\` loop: iterate over some sequence&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  for loop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      Repeat this code block 3 times.</span></span>
<span class="line"><span>            --&gt; --&gt; --&gt; --&gt; --&gt; --&gt;</span></span>
<span class="line"><span>      Ok!</span></span>
<span class="line"><span>            --&gt; --&gt; --&gt; --&gt; --&gt; --&gt;</span></span>
<span class="line"><span>            --&gt; --&gt; --&gt; --&gt; --&gt; --&gt;</span></span>
<span class="line"><span>            --&gt; --&gt; --&gt; --&gt; --&gt; --&gt;</span></span></code></pre></div><h2 id="while-do-something-while-a-condition-is-met" tabindex="-1"><code>while</code>: do something while a condition is met <a class="header-anchor" href="#while-do-something-while-a-condition-is-met" aria-label="Permalink to &quot;\`while\`: do something while a condition is met&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>                                            # Initial value</span></span>
<span class="line"><span>  Enter the while loop                      temp = 15</span></span>
<span class="line"><span>          |</span></span>
<span class="line"><span>          v                                 # Let&#39;s increase until 18.</span></span>
<span class="line"><span>  +------------------+                      # Here is the codintion:</span></span>
<span class="line"><span>  | Is the condition |                      while temp &lt; 18:</span></span>
<span class="line"><span>  |     true?        | &lt;--------------+</span></span>
<span class="line"><span>  +------------------+                |</span></span>
<span class="line"><span>          |                           |        # Code block start</span></span>
<span class="line"><span>   Yes ---+---&gt; +------------------+  |        print(temp)</span></span>
<span class="line"><span>          |     | Run the code     |  |        print(&quot;Increasing by one!&quot;)</span></span>
<span class="line"><span>          |     | block            |--+        temp = temp + 1</span></span>
<span class="line"><span>          |     | (may change the  |           # Code block end</span></span>
<span class="line"><span>          |     | condition)       |</span></span>
<span class="line"><span>          |     +------------------+</span></span>
<span class="line"><span>          |</span></span>
<span class="line"><span>   No ----+--&gt; +--------------------------+</span></span>
<span class="line"><span>               | Skip code block, we are  |</span></span>
<span class="line"><span>               | getting out of the loop. |</span></span>
<span class="line"><span>               +--------------------------+</span></span>
<span class="line"><span>                         |</span></span>
<span class="line"><span>                         v                  # After loop</span></span>
<span class="line"><span>                  Continue program          print(&quot;Now it is&quot;, temp)</span></span></code></pre></div>`,15)]))}const u=a(o,[["render",i]]);export{g as __pageData,u as default};
