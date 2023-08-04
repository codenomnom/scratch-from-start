---
title: CI/CD pipeline
---

<p>
  <abbr title="Continuous Integration / Continuous Delivery">CI/CD</abbr> sounds very complex and something the DevOps team should typically do.
  But the truth is, you don't have to be a magician in order to set it up. Gone are the days when you had to have a masters degree for that.
</p>

<p>
  Your CI/CD pipeline is your project's <strong>automatic gatekeeper and a best friend of yours</strong>. Ideally, it should:
</p>

<ul>
  <li><i>Lint your code</i>, making sure messed up code does not enter the repository</li>
  <li><i>Run unit tests</i> so your code always stays functional</li>
  <li><i>Run e2e tests</i>, if you have some, so your code works as best as it can</li>
  <li><i>Deploy your code</i> so your results are always online</li>
</ul>

<p>
  Some of those points might not seems meaningful right away.
  But it's important to <strong>set up a solid foundation</strong> to build upon!
</p>

<p>
  Most of the tools nowadays (<i>TODO: link to GitHub, GitLab, BitBucket</i>) work almost the same way.
  They use a file describing the pipeline, with different steps.
  <br>
  Do something basic - implement an empty pipeline that runs your feature branches, and simply log a message.
  If you have follow the list and already set up a test suite (<i>TODO: internal link to testing section</i>
  you can run the tests and get a "passed" sign.
</p>
<p>Good enough to build upon!</p>
