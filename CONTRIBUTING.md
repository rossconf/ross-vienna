# Contributors Guide

**Table of contents**

 * [Filing bug reports](#file_bugs)
 * [Contributing documentation](#contrib_docs)
 * [Contributing code](#contrib_code)
 * [Pull requests](#pull_requests)

Thank you for your interest in ROSS conf. ROSS conf is open source and welcomes contributions. This guide gives you an overview of the ways with which you can contribute, as well as contribution guidelines.

You can contribute in one of the following areas:

 * Filing bugs.
 * Bug triage.
 * Documentation (user documentation, developer documentation, contributor documentation).
 * Community support.
 * Code.

Please submit patches in the form of a Github pull request.

<a name="file_bugs"></a>
## Filing bug reports

When filing a bug report, please ensure that you include the following information:
- What steps will reproduce the problem?
- What is the expected output? What do you see instead?
- What does your environment looks like (operating system, language, configuration, infrastructure)

### Checklist
Before submitting your issue, please consider the following:
- Avoid using GitHub issues for questions or help. Submitting issues to this repository are reserved for bugs, feature requests, or changes to the source code.
- Check if the issue is not already reported. If you're experiencing an issue someone else has already reported, please add a comment to the existing issue so we can properly assess the gravity of the problem.
- Use labels appropriately.

<a name="contrib_docs"></a>
## Contributing documentation

Documentations can be found in the README for this project.

<a name="contrib_code"></a>
##Contributing code

rossconf.io uses Ruby, CSS, HTML and JavaScript and is build using [Middleman](https://middlemanapp.com/)

<a name="pull_requests"></a>
## Pull Requests

Please consider the following when creating a Pull Request (yay!):

### Reference an issue or milestone
Describe the big picture of your changes here to communicate to the maintainers why we should accept this pull request. If it fixes a bug or resolves a feature request, be sure to link to that issue.

You can bring up a list of suggested issues and pull requests within the repository by typing #. Type the issue or pull request number or title to filter the list, and then press either tab or enter to complete the highlighted result.

### Write a description of changes made
Provide a description of the changes proposed. Make sure to answer what types of changes your code introduces:
- Bugfix (non-breaking change which fixes an issue)
- New feature (non-breaking change which adds functionality)
- Breaking change (fix or feature that would cause existing functionality to not work as expected)

__BONUS POINTS__
- Check if the commit's or even all commits' message styles matches ours.
- Extend the repo's README / documentation, if applicable.

### Avoid breakage
- Pull requests should normally be submitted against the latest stable branch (e.g. main).
- Elaborate how you've tested your code.
- If this is a relatively large or complex change, kick off the discussion by explaining why you chose the solution you did and what alternatives you considered, etc...
