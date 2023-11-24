# Cosmic Logger: Bootcamp Wars
Module 02, Week 06, Project 02: MERN, API, CRUD + React-Bootstrap

by Alfonso Marquez and Yavuz Balay

## Description
An app that practices creating, reading, updating and deleting functionalities with regard to APIs.

The app is a database logger in which users are able to submit, read, edit and remove details and images of a fictional or non-fictional location and its life forms.

The concept of the cosmetic design and interactivity is meant to invoke an experience of retro sci-fi nostalgia and distopian grungy hacker tropes: Star Wars meets The Matrix meets Cyberpunk 2077 meets Fallout.

<img src='src/images/readme-image.png'>

## Run the app locally or through your browser:

### 1. To run the app locally:

1. Access the files at the GitHub repo:
<br>https://github.com/m02p02/react-json-project02

2. Navigate to the app folder and in the terminal:
    - ``npm install`` and
    - ``npm install react-bootstrap bootstrap``
    <br>to get the necessary dependencies

3. If the ``public`` folder lacks a ``_redirect`` file containing this single line:<br>``/* /index.html 200``, do the following, otherwise ignore this step:
    - navigate to the ``public`` folder
    - create a new file called ``_redirect``
    - on a single line inside ``_redirect`` type ``/* /index.html 200``
    - save the file

4. Staying inside the app folder, run by typing ``npm run dev`` in the terminal.

### 2. To run the app through your browser:

1. ``[optional]`` Give your browser permission to autoplay sounds.

2. Go to the demo deployed and hosted by Netlify:
<br>https://project-exo-app.netlify.app/

3. ``[optional]`` To reload the sequence that executes only upon first visiting the app's URL, ``clear the site's browser data`` (cookies, storage, cache). 

## Work in Progress
- ``[ ]`` <i><b>cleaning up the code</b></i> and making it more efficient and readable

- ``[ ]`` <i><b>responsive design:</b></i> particularly narrow viewports are causing text and element overlapping in some cases

- ``[ ]`` <i><b>consistent execution of sound elements and effects:</b></i> not operating reliably on every user's local setup

- ``[ ]`` <i><b>slight inconsistency between the local app and hosted app:</b></i> some minor cosmetic elements are not rendering in the hosted app

- ``[ ]`` <i><b>reconfiguring the React-Bootstrap modal</b></i> (window-in-window) to present as intended