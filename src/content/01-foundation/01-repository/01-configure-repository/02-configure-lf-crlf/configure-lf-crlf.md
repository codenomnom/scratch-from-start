---
title: "Configure <code>lf/crlf</code>"
draft: true
---

<p>
  Different operating systems use different invisible character to define a "<i>line ending</i>".
  If collaborators work in various systems, it could lead to problems.
  Making a simple change in a file might result in hundreds of modifications, because the operating system
  would transform all line endings.

</p>
<p>
  The <strong>best</strong> way to tackle this  is to configure your IDE to use the same line endings, using
  <a
      href="https://editorconfig.org/"
      target="_blank" class="underlined colorful"
  >
    .editorconfig
  </a> file:
  {% highlight bash %}
# .editorconfig file in root of your project
[*] # every file
end_of_line = lf # unix-style newlines with a newline ending
{% endhighlight %}
</p>
<p>
  <code>git</code> comes with a mechanism to
  <a
  href="https://docs.github.com/en/get-started/getting-started-with-git/configuring-git-to-handle-line-endings"
  target="_blank" class="underlined colorful"
  >
  convert
  </a> those for you,
  enforcing the same end result for everyone:
  {% highlight bash %}
# sample, check https://stackoverflow.com/questions/1967370/git-replacing-lf-with-crlf
  {% endhighlight %}
</p>
