---
type: exercise
title: Deno setup
weight: 2
author: Dr Graeme Stuart
---

The *deno* runtime allows us to execute JavaScript code. 
In this exercise we will install deno, write a few test scripts and get our environment set up for development.

<!--more-->

## Installing deno

The first step is to get deno installed. 
We will do this from the integrated terminal within **Visual Studio Code**.  

> The following instructions are suitable for the lab machines running windows.
General instructions for installing deno can be found at [the deno website](https://deno.com).

Open VSCode and press **Ctrl + @** to open the integrated terminal.

> We will often use the terminal to execute our code, so keep it open.

If the terminal shows "cmd.exe", click the dropdown and select **PowerShell** to switch to PowerShell. 
Copy and paste the following command into the PowerShell terminal and press Enter:

```powershell { linenos=false }
irm https://deno.land/install.ps1 | iex
```

Wait for the installation to complete (this may take a few minutes)


### Verify the installation

We have seen the install fail on the lab machines in the past, so it's worth checking the install worked.

To confirm everything is working type the following command into the integrated powershell terminal and press Enter:

```bash { linenos=false }
deno --version
```
If you see output showing the Deno version (e.g., `deno 2.9.7`), you're ready to go!

> If not, close and restart VSCode and try again.

## Create and Run Your First Script

In VSCode, create a new file in your workspace called `main.js` with a simple "hello world" example.

```javascript
console.log("Hello World");
```

Make sure you save the file (**Ctrl + S**).

Open the PowerShell terminal in VSCode (**Ctrl + @**) and run the script with the following command.

```powershell{linenos=false}
deno main.js
```

> We are running the **deno** programme and passing it the path to the JavaScript code we want to execute. 

You should see the output printed in the terminal.

```plaintext{linenos=false}
Hello World
```

> If you don't see anything then ask your lab tutor to help. 

## Write a more complex programme

Update **main.js** with the following code.

```JavaScript
const items = ['apples', 'bananas', 'cherries'];
for(const item of items) {
   console.log("logging", item);
}
```

Our code iterates over an array and logs each element.

### Run the programme

Execute the programme from the terminal as before.

```powershell {linenos=false}
deno main.js
```

You should see the output is printed to the terminal.

```plaintext{linenos=false}
logging apples
logging bananas
logging cherries
```


## Conclusion

We have installed deno and executed a very simple JavaScript programme.

> Now try writing some simple JavaScript programmes to see what you can do with [while loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while).