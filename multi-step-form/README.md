<div align="center">
  
  ![GitHub repo size](https://img.shields.io/github/repo-size/eruedasanchez/multi-step-form)
  ![GitHub stars](https://img.shields.io/github/stars/eruedasanchez/multi-step-form?style=social)
  ![GitHub forks](https://img.shields.io/github/forks/eruedasanchez/multi-step-form?style=social)
  [![Twitter Follow](https://img.shields.io/twitter/follow/RSanchez_Eze?style=social)](https://twitter.com/intent/follow?screen_name=RSanchez_Eze)
  <br />
  <br />

  <h2 align="center">Multi Step Form</h2>

  Build a Multi Step Form which users should be able to complete each step of the sequence,
  go back to a previous step to update their selections, see a summary of their selections on the final step and confirm their order.<br/>Responsive for all devices. Build using React Js.

  <a href="https://casmart-moda-ecommerce.vercel.app/" target="_blank"><strong>➥ Live Demo</strong></a>

</div>

<br/>

### Demo Screenshots

![Multi Step Form Demo](https://i.postimg.cc/kgZr1Ppx/active-states-step-1.jpg "Multi Step Form Demo")

### Technologies

* [React Js](): Version 18.2.0
* [HTML](): Version 5 
* [CSS](): Version 3
* [Node Js](): Version 18.16.1
* [GIT](): Version 2.40

### Prerequisites

Before you begin, ensure you have met the following requirements:

* [Git](https://git-scm.com/downloads "Download Git") must be installed on your operating system.
* [Node Js](https://nodejs.org/es/download "Download Node Js") must be installed on your operating system.

### Components

**Multi Step Form** contains the following components:

* [MultiStepFormContainer](): Contains Sidebar and
StepContainer component and render Error component in case an invalid "step" parameter is passed.

* [Sidebar](): Renders the sidebar and contains the StepSidebar component.

* [StepSidebar](): Contains the number, the title and what step is currently being rendered.

* [StepContainer](): Contains the logic of each of the components corresponding to each step (StepOne, StepTwo, StepThree, StepFour). In addition, it contains the StepHeader component for each step and finally the Acknowledgment component for the last step.

* [StepHeader](): Contains the header of each step, that is, the title and subtitle corresponding to each step.

* [StepOne](): Contains a form to complete with the user's name, email and phone number. All fields in the form are required and you will not be able to advance to the next step if they are not all complete.

* [StepTwo](): Contains each of the proposed plans for the user's choice and a slider to determine if the plan is monthly or annual. Also, you will not be able to advance to the next step if you do not choose a plan.

* [StepTwoPlan](): Contains the details of each plan, that is, name, icon, price depending on whether it is monthly or annual and an alert to know which one the user is choosing.

* [StepThree](): Contains the add-ons that the user can add to the plan they have chosen.

* [StepThreeOns](): Contains the details of each add-on, that is, the name, the description, the price depending on whether the plan is annual or monthly and an alert to know which add-on is being added to the plan.

* [StepFour](): Contains the details of the plan and add-ons (name and price of each of them) chosen by the user. Also contains a change button in case you want to change plans before confirming.

* [Acknowledgment](): Contains a message of thanks after confirming the choice of the plan with its accessories.

* [NextStopButton](): Contains the logic of the buttons according to the step the user is currently.

* [Error](): Contains an error message for cases in which you want to access a route that is not defined or an invalid step number is passed.

### Contact

If you want to contact with me you can reach me at [LinkedIn](https://www.linkedin.com/in/e-ruedasanchez/).

### License

This project is **free to use** and does not contains any license.