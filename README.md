# About

[Learn about Blockstack User Authentication](https://blockstack.github.io/blockstack.js/index.html#authentication)

Blockstack Authentication provides single sign on and authentication without third parties or remote servers. Blockstack Authentication is a bearer token-based authentication system. From an app user's perspective, it functions similar to legacy third-party authentication techniques that they're familiar with. For an app developer, the flow is a bit different from the typical client-server flow of centralized sign in services (e.g., OAuth). Rather, with Blockstack, the authentication flow happens entirely client-side.

[Learn about Blockstack Storage Methods](https://blockstack.github.io/blockstack.js/index.html#storage)

Applications built using Blockstack don’t store any user data. Users on Blockstack’s network store their individual application data using a storage system called Gaia that allows a user to store their data wherever they like. The user brings the application specific data to an app each time they authenticate.


# Details

Decentralized Application (DApp)
 
2 Blockstack services, the [Blockstack Browser](https://browser.blockstack.org) and the [Gaia data storage hub](https://hub.blockstack.org/). The Blockstack Browser is in itself a DApp. The storage hub is purely a service without user-facing functionality.

## Prerequisites

This project requires the following tools:

- Blockstack ID (Identity)
- NPM - A Node.js package manager used to install dependencies.

## Getting Started

**Step 1. Create a Blockstack ID**

Open the [Blockstack web application in your browser](http://hackp.ac/blockstack-create).

Blockstack will will prompt you to create or restore an ID.

**Step 2. Install Node Package Manager (NPM).**

Use `npm` command to install these required packages.

Check if you have `npm` installed by entering the following command in your terminal, and see if you get a response back.

```
npm -v
```

If `npm` is not installed, you can download it [here](https://www.npmjs.com/get-npm)

**Step 3. Clone the code into a new folder**

Open your terminal if you haven't already and enter the command below to clone the current repository.

```
$ git clone https://github.com/samjwu/PayTron
$ cd PayTron
```

**Step 4. Install Dependencies**

Install the project dependencies listed in `package.json`.

```
$npm install
```

In the project directory, run 

```
npm start
```

Open http://localhost:3000 to view it in the browser.

The default port for the app is `3000`