<div align="center">
  <img height="100" src="https://res.cloudinary.com/gabyc/image/upload/v1652738521/wander-logo_uwvdkr.png">
</div>


# Why WANDER? - App Overview
WANDER is an application that helps users take the first step towards their WANDERing journey through the many national parks by providing them with the basic information of any and all the national parks in the country.

For people who: 
- want to visit/learn more about national parks
- want a starting/reference point for their planning process

<div align="center">
<img height="400px" src="https://user-images.githubusercontent.com/74997368/168925387-70a9887c-def0-4cb9-a715-a8f9a5bcb597.png">
</div>



## Techstack


> Tools, languages, and others

<table align="center">
  <tr>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168923681-ece848fc-5700-430b-957f-e8de784e9847.png" width="48" height="48" alt="html" />
      <br>html
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168924521-589f95da-069a-496a-bcc1-ee6dd132ff12.png" width="48" height="48" alt="CSS" />
      <br>CSS
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168977094-6a5073a2-2f48-4f5a-ae0e-ed1421a678c6.png" width="48" height="48" alt="JavaScript" />
      <br>JavaScript
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168976819-15a1f4e0-29cf-4ac0-94a7-1f15eee374a1.png" width="48" height="48" alt="postgreSQL" />
      <br>postgreSQL
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168978951-5ac2af5e-c911-4e59-b493-683071cf1860.png" width="48" height="48" alt="Express" />
      <br>Express
    </td>
    </tr>
  <tr>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168979311-4a486cad-32c8-46f4-a5da-912fdc51b2d6.png" width="48" height="48" alt="React" />
      <br>React
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168979848-733f7090-0f78-401a-9ceb-4267231abef7.png" width="48" height="48" alt="Node" />
      <br>Node
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168980647-1690f9de-bf0e-4318-93cb-1b2ba3701ded.png" width="48" height="48" alt="Bootstrap" />
      <br>Bootstrap
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168980702-6b8c5030-26c7-4c4f-b4ac-727d26daafd3.png" width="48" height="48" alt="Docker" />
      <br>Docker
    </td>
    <td align="center" width="96"> 
        <img src="https://user-images.githubusercontent.com/74997368/168981541-6d1713a5-25ce-4d4b-9d20-0eef28957af0.png" width="48" height="48" alt="Heroku" />
      <br>Heroku
    </td>
  </tr>
</table>

## APIs

<table align="center">
  <tr>
    <td align="center" width="96">
      <img src="https://user-images.githubusercontent.com/74997368/168983872-e5c5bfa4-c3e9-4092-911b-44148afc2136.png" width="48" height="48" alt="nps-api" />
    </td>
    <td align="center" width="96">
       <img src="https://user-images.githubusercontent.com/74997368/168984679-a7fa607e-2a9a-46c8-91a6-9a9e77501dbd.png" width="48" height="48" alt="auth0" />
    </td>
    <td align="center" width="96" height="96">
       <img src="https://user-images.githubusercontent.com/74997368/168984366-8af8a658-c990-4bae-8838-bdcd1334947d.png" width="48" height="48" alt="google-api" />
    </td>
  </tr>
  <tr>
    <td align="center" width="96">
      <br>National Park Service
    </td>
    <td align="center" width="96" >
      <br>Auth0
    </td>
    <td align="center" width="96">
      <br>GoogleMaps
    </td>
  </tr>
</table>


## Drawing Board

### Style Guide
<div align="center">
<img src="https://user-images.githubusercontent.com/74997368/169140404-712f5bac-7289-4b9a-84e0-11f9c1ef9dc4.png" width="500" alt="style-guide" />
</div>

### Wireframe
<div align="center">
<img src="https://user-images.githubusercontent.com/74997368/169140618-86d8d67d-408f-4ba9-bef2-8c5d28c1f10a.png" width="500" alt="wireframe" />
</div>

### Data Model
<div align="center">
<img src="https://user-images.githubusercontent.com/74997368/169140673-04ce8ec2-48f3-473a-a9f4-0da113e57c59.png" width="500" alt="data-model" />
</div>

### User Flow
<div align="center">
<img src="https://user-images.githubusercontent.com/74997368/169140784-4da93438-3afe-487b-97b4-39af1ed07b26.png" width="600" alt="user-flow" />
</div>


## Installation

### Prereq

**Docker**

This project relies on Docker to run the PostgreSQL server for registered users. To use those features, you must install Docker first before continuing.

Windows:
- Follow Microsoft's instructions to install [WSL](https://docs.microsoft.com/en-us/windows/wsl/install-win10) and [Docker](https://docs.microsoft.com/en-us/windows/wsl/tutorials/wsl-containers#install-docker-desktop)

MacOS:
- Use [Homebrew](https://docs.brew.sh/Installation): `brew install --cask docker`
- [Follow the instructions on the Docker website](https://www.docker.com/)

Launch Docker Desktop once it is installed. 

**Node**

You'll need to install Node v14 or above. [`nvm`](https://github.com/nvm-sh/nvm) is highly recommended.

### Installation

1. Clone the repo:
   ```sh
   git clone https://github.com/GabyC0/wander.git
   ```
2. Install all NPM packages using this in the root directory:
   ```sh
   npm install
   ```
3. Database setup:
   1. Copy the root example environment file

   ```sh
   cp .env.example .env
   ```
   2. You can choose to edit `.env` or just use as-is.
   3. Run the following to setup the database with the seed file:
   ```sh
   npm run db:init
   ```

Start the app and view it at <http://localhost:3000> by using:
   ```sh
   npm start
   ```
Shut Down the Express and React development servers using `Ctrl-C` .


#### Set Up React client for `auth0`
If you want to try it with Auth0, the frontend needs to be setup with the following:

1. Copy the app's example environment file

   ```sh
   cp app/.env.example app/.env
   ```

2. The `.env` file allows the React app to use Auth0, and requires an Auth0 domain + client-id.
   - These can be obtained by signing up for an Auth0 account and [Registering a Single-Page Web Application](https://auth0.com/docs/get-started) in order to get these values
   - This [graphic](https://images.ctfassets.net/23aumh6u8s0i/1DyyZTcfbJHw577T6K2KZk/a8cabcec991c9ed33910a23836e53b76/auth0-application-settings) from [Auth0's guide](https://auth0.com/blog/complete-guide-to-react-user-authentication/#Connect-React-with-Auth0) may be helpful to locating them


## Difficulties/Unsolved Problems


## Future Development

