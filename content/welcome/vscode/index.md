---
title: Visual studio code
type: exercise
weight: 20
---

In this module we will be using the *VSCode* text editor to create and edit code files.

<!--more-->

[VSCode](https://code.visualstudio.com/) will help us to write in *HTML*, *CSS*, *JavaScript* and *PHP* and will also act as a **server** that can communicate with the web browser over *HTTP* to create a complete development environment for the web.

{{<figure src="images/vscode.png" caption="My VSCode, I have a few extensions installed">}}

>Other code editors are available, but according to the [2023 stackoverflow developer survey](https://survey.stackoverflow.co/2023/#section-most-popular-technologies-integrated-development-environment), VSCode is the most popular text editor with developers by a huge margin.

## Getting started

Download VSCode [for your platform](https://code.visualstudio.com/Download) and do the normal things.
Installation should be fairly painless. 

Check out the [official videos](https://code.visualstudio.com/docs/getstarted/introvideos#VSCode). 
In particular, this video will give you a good start.

{{< youtube B-s71n0dHUk >}}

> For obvious reasons, we would prefer it if you watched video content outside of timetabled lab sessions.
> You should use the sessions to work through exercises, experiment and to ask questions.


## Installing extensions

We will install the *live server* extension to run a simple **HTTP server** from within *VSCode*.

> The *live server* extension is perfect for front-end work.
Later, we will also install the *php server* extension to add php capabilities to the server.

On the left side of your VSCode window, select the extensions icon (usually the bottom icon) or use *Ctrl + Shift + X* to open the extensions panel and search for "live server" using the search bar at the top of the panel.

Find the *live server* extension, click the "install" button and wait a few moments.

{{<figure caption="the live server extension is already installed on my VSCode" src="images/live-server.png">}}

Once installed you should see a small "Go Live" button has appeared at the bottom of your VSCode window.

{{<figure caption="the 'Go Live' button" src="images/go-live-2.png">}}

Clicking this will start up a web server and open a browser tab to serve your project.
The server will be serving the top level folder you have open in VSCode.

> If you don't have a folder open in VSCode, then it will prompt you to open a folder.

Try adding some HTML content, the next exercise will guide you through creating a very simple web page.

## Conclusions

VSCode is a powerful editor and will allow you to write code in HTML, CSS, JavaScript, PHP and SQL with full syntax highlighting and *"intellisense"* auto-completion.

We have seen that we can also install extensions that add functionality such as web servers and even PHP servers directly from VScode making it the core software for developing our code.

> Use the next exercise to become comfortable with the basics of VSCode.