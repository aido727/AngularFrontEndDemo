# Top 10 StackOverflow Questions
-----------------------

Note: App started using _ng new_ via AngularCLI

## Instructions
* Install [Node.js](https://nodejs.org/en/download/)
* Install Angular CLI
	* Open a terminal and enter the command "npm install -g @angular/cli"
* Download this project and extract the contents
* Open up a terminal
	* Navigate to your extracted folder (../TopStackOverflowQuestions)
	* Run the command "ng serve -o -c"

## Project Structure
* Angular on Node.JS
* On intialisation, the main App component calls to the service to make the API call, returned as an observable
* Each question renders in it's own instance of a Question component
	* These components handle HTML decoding and the external links
	* Pipes are used to convert some data elements for display

## Further Explanations
* What areas you focused on getting done (presented in order)
	* Functionality, make the call, get the data in a usable state, throw it on the screen
	* Overall page layout, just the basic flow of the page
	* Presenting the questions/results themselves
* Identify expected error cases that are unhandled and the impact they could have on the solution
	* The API call to get the questions failing is handled but very basically, not in a way that is good for a user
	* Multiple cases if any elements within the data are missing may cause an error
* Details on what compromises you are making in the interest of time
	* The header scrolling text functionality is missing
	* The advert block is entirely placeholder
* What you would improve in future iterations or with more time
	* More auto testing,e specially around the data handling
	* Responsive design (but first asking for a second design spec of how this should look instead of guessing/assuming)
	* How the header is layed out
	* View counts less than 1M but still 6 digits only just fit in their box, may be cases they bust out, this needs fixing
	* A loading cover for slower connections (wait on the call)