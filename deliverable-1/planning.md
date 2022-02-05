# Team BCH
> _Note:_ This document is meant to evolve throughout the planning phase of your project.   That is, it makes sense for you commit regularly to this file while working on the project (especially edits/additions/deletions to the _Highlights_ section). Most importantly, it is a reflection of all the planning you work you've done in the first iteration. 
 > **This document will serve as a master plan between your team, your partner and your TA.**

## Product Details
 
#### Q1: What are you planning to build?

 > Short (1 - 2 min' read)
 * We want to build a data collection tool for hospitals to fill out forms and receive a score based on standards set by the World Health Organization.
 * Boston Children’s Hospital currently needs a pediatric emergency care capacity self-assessment tool. Pediatric emergency care capacity refers to a hospital’s ability to triage, treat, stabilize, and resuscitate a pediatric patient for the first 24 hours after arrival. As a solution, we are planning to build a generalized platform that lets users create and distribute self-assessment forms to hospitals.
 * The product will let users create a collaborative form that hospital staff members fill out based on their role. After completing the form, the tool outputs a score and feedback on areas where the hospital is meeting the needs for the specific criteria and areas that may require improvement or further investment.

#### First Mock Up of Software:
[Link to Figma Mockup](https://www.figma.com/file/9RqY7SJ5I8nKWdYbF68LJY/Untitled?node-id=0%3A1)

#### Q2: Who are your target users?

  > Short (1 - 2 min' read max)
 We have two groups of target users, those designing forms and those filling/submitting them.
 Target designers include the following:
 * Doctors
 * Global Health Workers
 * Hospital Workers
 * Government Organizations
 The people we mainly have in mind as target submitters are
 * Hospital Leaders
 * Hospital Staff
 We aim to have an app that is not specific to this problem, and so there is no strict division between these two groups of users. But based on the problem that created a need for this program, these are the target users that we will focus on.

#### Q3: Why would your users choose your product? What are they using today to solve their problem/need?

> Short (1 - 2 min' read max)
 * Boston Children's Hospital is currently using KoBo Toolbox to create and fill these kinds of forms
 * Hospitals worldwide who work with our partner use similar tools, but there is not one tool for all of them and they all share the problem we are trying to address
 * Partner brought up examples such as survey monkey, google forms, and more, all of which are not meeting their needs
 * Our app would allow our target submitters to collaborate on the same form conveniently, rather than have to fill out many individual forms and have somebody collect and merge all of the responses
 * In addition our app will display the results in a convenient way, as well as provide feedback and scores after the forms are completed

#### Q4: How will you build it?

> Short (1-2 min' read max)
 * We will build this project as a progressive web app built in React
 * It is important to us that the project is a progressive web app as some features we would like to include involve making use of device storage and a good user experience for those opening the app on mobile devices
 * Our app will be served by a backend API designed by our backend subteam
 * We will store data in a database chosen and set up by our data subteam

#### Q5: What are the user stories that make up the MVP?

1. As a global health director at Boston Children’s Hospital, I want to send a form to multiple staff in a partnering hospital and have them fill it out collaboratively in order to assess their pediatric emergency care capacity.
2. As a global health director, after receiving data from partnering hospitals I want to see a detailed description of what results are limiting pediatric emergency care capacity in order to fully understand how pediatric emergency care can be improved.
3. As a global health director with partnering hospitals in places that may have limited or inconsistent access to an internet connection, I want the hospital staff to have the ability to fill out a form offline, only needing the internet to download and submit the form in order to get crucial data from them regardless of connection quality.
4. As a hospital leader, I want to collect handwashing data at my hospital and receive feedback in order to make improvements accordingly.
5. As a global health organization worker, I want to create shareable forms with a customizable scoring system (??? lol) so that I can send them to hospitals and assess their pediatric emergency care capacity based on criteria set by the World Health Organization.
6. As a nurse, I want to be able to fill out my section of the form while workers at other departments fill out theirs, so that we complete the form efficiently and with accurate information.


----
## Intellectual Property Confidentiality Agreement 
> Note this section is **not marked** but must be completed briefly if you have a partner. If you have any questions, please contact David and Adam.
>  
**By default, you own any work that you do as part of your coursework.** However, some partners may want you to keep the project confidential after the course is complete. As part of your first deliverable, you should discuss and agree upon an option with your partner. Examples include:
1. You can share the software and the code freely with anyone with or without a license, regardless of domain, for any use.
2. You can upload the code to GitHub or other similar publicly available domains.
3. You will only share the code under an open-source license with the partner but agree to not distribute it in any way to any other entity or individual. 
4. You will share the code under an open-source license and distribute it as you wish but only the partner can access the system deployed during the course.

**Briefly describe which option you have agreed to. Your partner cannot ask you to sign any legally binding agreements or documents pertaining to non-disclosure, confidentiality, IP ownership, etc.**
We have agreed to option 2. that the code can be on GitHub and the running application will be handled by our Partner. We have also agreed to revisit this agreement if the project is successful and the app is deployed/used.
----

## Process Details

#### Q6: What are the roles & responsibilities on the team?

Describe the different roles on the team and the responsibilities associated with each role. 
Our subteams are:
* Frontend: Design the app’s user interface, send and receive data to and from the backend and display relevant data on the interface. Handle sensitive user data with care. 
* Backend: Create a server that will communicate between the frontend and database. Define endpoints for requests that serve necessary information to the frontend. Encrypt sensitive data before sending it to the database.
* DevOps: Automate tasks such as deployment, code formatting on merge. Define git branch structure.
* Data: Define the data that needs to be stored. Decide the best database management architecture and data models. Integrate the database API with the rest of the backend.
Members:
* Akshat
 * Roles: Backend, DevOps, Data
 * Strengths: JavaScript, Databases, Backend programming
 * Weaknesses: Designing UI, no experience with react-native, testing web applications
* Julien
 * Roles: Backend, DevOps
 * Strengths: JavaScript, React, MongoDB
 * Weaknesses: Design, Testing, SQL
* Judy
 * Roles: Frontend
 * Strengths: JavaScript, React, Figma
 * Weaknesses: Not a lot of backend experience, testing, C
* Nabeel
 * Roles: Backend, Data
 * Strengths: Python, C, Java
 * Weaknesses: No prior web app experience, not good at UI, no experience with Figma or Notion
* Isha
 * Roles: Backend, Frontend
 * Strengths: React, JavaScript, Python
 * Weaknesses: No react native experience, C, Testing

#### Q7: What operational events will you have as a team?

Describe meetings (and other events) you are planning to have. 
 * The team of students will meet every Wednesday at 7pm
 * As our partner is an ER doctor, no regular recurring meeting is possible. However our partner will be available for meetings every week, scheduled the week before, and more meetings as needed
 * Meeting minutes are uploaded as PDFs to this folder
 * Meeting 1 outcomes:
  * Introductions to partner and project
  * Gained insight on the project, user stories, and our goals
  * Set expectations for timeline and meeting schedule
 * Meeting 2 outcomes:
  * Demoed figma mock-up to partner, partner agreed with design and plan
  * Further clarified some expectations for project and functionality
  * Agreed on completion of this project as a progressive web app as suggested by our TA
  
#### Q8: What artifacts will you use to self-organize?

List/describe the artifacts you will produce in order to organize your team.       

We have set up and will be using a notion page for this project including:
* Links to important resources
* A KanBan board where we can organize tasks and assign them to each person based on team
* A calendar to keep track of deadlines, meeting times, and important dates
We have also set up a discord channel for calling and more regular communication and updates

#### Q9: What are the rules regarding how your team works?

Describe your team's working culture.

**Communications:**
 * Communicate mostly through discord and at weekly meetings
 * Send some update at least once a week
  * What you did, what you'll do next
 
**Meetings:**
 * Our team will be meeting every Wednesday at 7pm, where we will discuss progress, what we wanted to achieve, what we did achieve, and what we will do next
 * We will be meeting with our partner once a week and more if needed. Times are dependant on her schedule.
 
**Conflict Resolution:**
 * Indecision, such as competing ideas, if significant will be brought up to our partner to make a final decision. If the indecision is less significant and is not relevant to the partner, it will be put to a team-wide majority-rules vote as we have an odd number of team members.
 * Unresponsive team members will be handled by first attempting to make contact through different means and see what is stopping them from communicating. If member responds explaining why they are unresponsive and any reason they will continue to be, if any, and any urgent tasks assigned to them will be given to another member of the team. If the member continues to be unresponsive and does not explain, we will contact the TA to see what course of action is best for our situation.
 * Merge Conflicts will be handled by those who created and pushed the conflicting merges. They are to meet on the discord channel as soon as possible an collaborate to resolve the merge.




----
## Highlights

Specify 3 - 5 key decisions and/or insights that came up during your meetings
and/or collaborative process.

 * Short (5 min' read max)
 * We will be creating a progressive web app as the team as well as our partner agree it is the best way to meet the requests within our timeline.
 * Rather than making a tool specific to the pediatric care readiness issue, our team will aim to make the app as a more general solution which can also be a solution to other problems the parter has had and will have in the future.
  * When discussing the issue behind our project, partner mentioned this tool would have been very helpful for past endeavors as well and we agreed to try and make this tool to fill this need.
 * Sections of the form will not be restricted to different submitters, and submitters can overwrite each other's changes. To handle this we will add a commenting system and track changes and the commented reason for change
  * Originally imagined sections restricted to a single person
  * Partner requested to have the responsibility of designing good sections fall on the designer, while the submitters are free to fill in information they feel they can provide
