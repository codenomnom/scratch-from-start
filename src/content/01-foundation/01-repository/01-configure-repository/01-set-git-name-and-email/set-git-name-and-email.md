---
title: "Set git <code>name</code> and <code>email</code>"
---

<p>
  Git supports different configurations per repository. Its flexibility allows us to use separate credentials
  for each project, which comes in handy especially in open-source projects.
</p>
<p>
  That's why it's <strong>crucial</strong> that you configure your local repository to use the appropriate
  <code>name</code> and <code>email</code>:
</p>

<p>
  {% highlight bash %}
git config user.name # shows your current name
git config user.email # show your current email

git config user.name "John Doe" # set name in current repository
git config user.email "john@doe.com" # set email in current repository
  {% endhighlight %}
</p>

<p class="note">
  Note:
  If you're not using multiple identities, you can configure a
  <a
      href="https://docs.github.com/en/get-started/getting-started-with-git/setting-your-username-in-git#setting-your-git-username-for-every-repository-on-your-computer"
      target="_blank" class="underlined colorful"
  >
    global username & password
  </a> that would work for each repository.
</p>
