# FEDERATED SPORTS ONTOLOGY

This is the project setup for the Federated Ontology for sports domain. 

## PROJECT AIM 

This project aims at creating a search-able Federated Ontology with data relating NFL players to their colleges and states.

## SOFTWARE REQUIREMENTS

#### TEXT EDITORS

Please use any one of the following text editors:  
    1. <a href = "https://code.visualstudio.com/">VS Code</a>  
    2. <a href = "https://www.sublimetext.com/">Sublime Text</a>  
    3. <a href = "https://atom.io/">Atom</a>  


#### DEV ENVIROMENT

To contribute to the code-base of this project, you should have installed/know the following:  
    1. AWS 
    2. git
    3. Protege
    4. SPARQL Server
    (Tech stack will be expanded as the project progresses)  

Please ensure that you have everything installed and ready to go. 

#### ACCESS RIGHTS

Please email .pem file of your dev machine to vkasturi@usc.edu to get access to AWS instance.    

#### GIT SETUP

Please follow the steps below to set up git.  
    1. sudo apt-get update  
    2. sudo apt-get install git   
    3. which git  
    4. *Copy the git path*  
    5. In VS Code, click the gear -> Settings  
    6. In the search toolbar search for git  
    7. Change git.path to the copied path and save  
    8. Clone the repo using the SSH URL.  

#### CODE REVIEW PROCESS

During development, while fixing bugs or adding features, please follow the steps below.  
    1. Create a branch of the repo locally  
    2. Write your changes and/or features  
    3. Generate a pull request  
    4. Add users for review  

Please merge the branch to master only after all reviewers have approved. 

##### PULL REQUEST GUIDELINES  

The following have to be addressed in the pull request created:  
    1. Type of change   
    2. Function   
    3. Related issue (if any)  
    4. Discussed in meeting (Y/N)  
    5. Change instructed (Y/N and name of instructor)  

Pull Requests without the above information will be declined automatically.

To resolve merge conflicts, please follow the steps below:  
    1. git checkout master  
    2. git pull  
    3. git checkout <branchname>  
    4. git merge master  
    5. manually accept incoming/current change  
    6. git add .  
    7. git commit -m "Type your message here"  
    8. git push  
    