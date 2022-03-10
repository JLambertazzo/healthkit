# YOUR PRODUCT/TEAM NAME

> _Note:_ This document is intended to be relatively short. Be concise and precise. Assume the reader has no prior knowledge of your application and is non-technical. 

## Description 
 * Provide a high-level description of your application and it's value from an end-user's perspective
 * What is the problem you're trying to solve?
 * Is there any context required to understand **why** the application solves this problem?
 
This application at its core is meant to fill out forms collaboratively. The particular use case given by the Boston Children’s Hospital is to measure the pediatric emergency care capacities of different hospitals, but this app is generalized for other, similar use cases. The app allows an end-user to create these massive questionnaires/surveys and distribute them out to the relevant people. Then these end-users will be able to complete the form questions concurrently. After the form has been completed, the app will automatically generate a report that details how well equipped the hospitals are. 
  
One of the challenges that the hospital faced was the issue of multiple people having to complete the massive form/survey. Currently with the tools that they have, they would have to all get together for a 3 hour meeting with all pertinent staff members and painstakingly complete the survey. Another issue that arises is when this form needs to be completed by a hospital overseas. Then it becomes arduous to try to coordinate with all members to complete the form. This is clearly unideal and our tool aims to solve that problem by allowing all end-user’s to concurrently access their relevant sections of the survey at the same time. 

## Key Features
 * Described the key features in the application that the user can access
 * Provide a breakdown or detail for each feature that is most appropriate for your application
 * This section will be used to assess the value of the features built

Upon arriving to the application, users will be asked to sign up or to log in as an existing user. Once logged in users will be redirected to their dashboard which will show them their recent sent and received forms. Users can click on the profile icon in the top right to see their profile details. On the profile page users can press log out to log out and destroy their session. Sessions will be stored for some time for the user's convenience, keeping them from needing to sign in too often.

Note: for this deliverable, forms are hard-coded and do not reflect the logged in user's form data stored in the backend

## Instructions
 * Clear instructions for how to use the application from the end-user's perspective
 * How do you access it? Are accounts pre-created or does a user register? Where do you start? etc. 
 * Provide clear steps for using each feature described above
 * This section is critical to testing your application and must be done carefully and thoughtfully
 
An end user will first sign up through the sign up page, inputting their email address, username and password. After entry of these fields, the user’s account will be created and they will immediately be directed to their dashboard. On their dashboard, they will see all the current forms that they are a part of. Under the “My Forms” tab, the user will be able to see the forms that they have created under the “Created Forms” section and the forms that they have been invited to work on under the “Sent Forms” section. When a user creates a form, they will be able to invite others to work on the form by sending an email invite or by link. Any user who is able to work on a form will also be able to invite others within their affiliation/group to also access the form. A user will be able to answer questions in any form they have been invited to and once the survey has been fully completed, the user will be able to click on the results button to generate a readable format summarizing the data collected from the forms.   
 
 ## Development requirements
 * If a developer were to set this up on their machine or a remote server, what are the technical requirements (e.g. OS, libraries, etc.)?
 * Briefly describe instructions for setting up and running the application (think a true README).
 In order to run this app a developer would need Node.js, NPM and git installed. To clone and run the project follow the steps below:
 1. Open a terminal and cd to a folder that will contain this project
 1. Clone the repo locally
 1. Run `git branch dev` for the development version, or stay on main for production version
 1. Create a .env folder in the project root with the following contents
 ```text
 MONGODB_URI=<Paste connection string here>
 ``` 
 1. run `npm run setup`
 1. run `npm run build-run`
 1. should be running on port 5000
 
 ## Deployment and Github Workflow

Describe your Git / GitHub workflow. Essentially, we want to understand how your team members shares a codebase, avoid conflicts and deploys the application.

 * Be concise, yet precise. For example, "we use pull-requests" is not a precise statement since it leaves too many open questions - Pull-requests from where to where? Who reviews the pull-requests? Who is responsible for merging them? etc.
 * If applicable, specify any naming conventions or standards you decide to adopt.
 * Describe your overall deployment process from writing code to viewing a live applicatioon
 * What deployment tool(s) are you using and how
 * Don't forget to **briefly explain why** you chose this workflow or particular aspects of it!

 Our workflow revolves around 4 main branches:
 1. main
 1. release
 1. dev
 1. hotfix

 Main is our production-ready (or at this stage demo-ready) code. Release holds different release versions for staging and testing before going to main. Dev is the more volatile branch for merging work and is the main one developers interact with. Hotfix is for making small fixes to the code and merging safely with PRs.

 When developing a feature, devs will create a branch from dev and develop their changes separately. Once finished, devs will make two pull requests:
 1. <your_branch> <- dev
 1. dev <- <your_branch>
 
 The first pull requests give devs the responsibility of merging any conflicts and testing changes to their branch before going to dev. The second pull request pushes a merge-error-free version of the code to dev.

 Currently we have two active deployments:
 1. https://teambch.herokuapp.com
 1. https://teambch-dev.herokuapp.com
 
 The first link is automatically deployed following changes to the main branch, it is our production ready application. The second link is a staging link watching for changes on and deploying our dev branch where we can test changes together.

 Deployment is done using containerization with docker and is automatically deployed to the environments above on heroku using github actions (see our .github/workflows files). 

 ## Licenses 

 Keep this section as brief as possible. You may read this [Github article](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/licensing-a-repository) for a start.

 * What type of license will you apply to your codebase?
 * What affect does it have on the development and use of your codebase?
 * Why did you or your partner make this choice?
 
 We went with the MIT license for now, as it fits the needs of our team as agreed upon by our team members and partner (see our deliverable-1 minutes and agreement for more details).
