# SillyPack

This server has been retired! Thanks for playing. Follow the instructions below to host the server yourself in its final state.

## Credits

- thanks to @kenziemac130 for the aawesome help with the guide and contributions
- LICENSING NOTE: TREECAPITATOR.JPG was taken from FurfSky Reborn

## Setting up the Client

### Install launcher

Install the Launcher if you haven't already

1. Install Prism Launcher (follow their install steps)

   - [Prism](https://prismlauncher.org/)

2. Setup Java 17

   - on first launch you will be prompted to locate your java executable
   - you will need Java 17; find your arch and os, for example from [adoptium](https://adoptium.net/temurin/releases/?version=17)!

3. Login to your account

   - for new accounts you will have to launch at least once with the official launcher for first time setup
   - under the profiles dropdown on the top right of the screen choose "Manage Accounts" then "Add Microsoft"
   - complete the steps on the page as instructed

### Add client instance

1. Add a new instance, select "Import > Import from zip"

   Use the following URL in the direct download field or download and point to it manually.

   `https://github.com/pauliesnug/sillypack/releases/download/bootstrap/SillyPackBootstrap.zip`

2. Launch the game and the mods will be automatically installed and updated every time you launch!

## Setting up the Server

The server has been retired. Follow these steps to host it yourself.

1. Download the Fabric server jar **0.15.17** for Minecraft version **1.20.1** from either [the Fabric website here](https://fabricmc.net/use/server/) or by curling it:

   - `curl -OJ https://meta.fabricmc.net/v2/versions/loader/1.20.1/0.15.7/1.0.1/server/jar`

2. Create a working directory with the jarfile and run the launch command, allowing the server to run once, accept the EULA, etc.

   - `java -Xms1G -Xmx8G -jar fabric-server-mc.1.20.1-loader.0.15.7-launcher.1.0.1.jar nogui`
   - For the duration of this server's existence, it was allocated 12 gigabytes and performance wasn't hindered in normal play with <=10 players.

3. Download [the additional server files here](https://drive.google.com/file/d/1fbTbb9NNRRaCvy_ZYnqs5KnYIcVWFuI4/view?usp=sharing) and extract them to the root directory of the server. They include schematics, painting caches, whitelists, and the server settings. Overwrite files that were generated on first startup.

4. [Download the world save!](https://drive.google.com/file/d/1NVXGfckPfpndL_mFtwYeggfs8CVVbjzL/view?usp=sharing) Extract it to the subdirectory `world` within your server directory.

5. **Important** Download [this jarfile](https://github.com/packwiz/packwiz-installer-bootstrap/releases/tag/v0.0.3) from packwiz and place it in the root directory. Run this command **every time you start up the server** before running the launch command from step 2:

   - `java -jar packwiz-installer-bootstrap.jar -g -s server https://gh.dyn.gay/pack.toml`

6. Create any startup or maintenance scripts necessary for your usage, and connect with a client. The scripts used are provided in `script`.
