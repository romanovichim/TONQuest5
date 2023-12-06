# TON Speedrun 

## 🚩 Challenge 5: Create UI to interact with the contract in 5 minutes

🎫 Let's take an open source contract and build a simple website that will allow you to log in, send a transaction to the contract and see the result of the transaction by requesting the Get method.

📺 Get a full-fledged web 3 application with a backend in the form of a smart contract.

💬 Meet other builders working in TON and get help in the [official dev chat](https://t.me/tondev_eng) or [TON learn tg](https://t.me/ton_learn)

---

# Checkpoint 0: 📦 Install 📚

Required: 
* [Git](https://git-scm.com/downloads)
* [Node](https://nodejs.org/en/download/) (Use Version 18 LTS)
* [Yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable)

(⚠️ Don't install the linux package `yarn` make sure you install yarn with `npm i -g yarn` or even `sudo npm i -g yarn`!)

```sh
git clone https://github.com/romanovichim/TONQuest5.git
```
```sh
cd challenge-5
yarn install
```
---

# Checkpoint 1: Manifest and Button

The balance between comfort and security in web3 applications is the division into:
- applications - the logic of interactions with smart contracts
- wallets - the place where funds are safely stored and the place where you confirm the transactions that you send

In TON, [TONConnect](https://www.npmjs.com/package/@tonconnect/sdk) is used for authorization using a wallet in the application.

To confirm the transaction in the wallet, you understand what kind of application it is, a manifest describing the application is created. Uncomment the manifest into the file `main.tsx`:

![image](https://user-images.githubusercontent.com/18370291/256482822-00810129-21e0-4ae5-b76a-39de3ec44aa8.png)

TonConnect allows you to create an authorization very quickly with one, yes, one component - go to the file and uncomment:

![image](https://user-images.githubusercontent.com/18370291/256483195-4b0db34f-944c-4e19-ae85-f10f24313327.png)

Let's run the application:

```sh
yarn dev
```

Enter the link in the browser.

---

# Checkpoint 2:  🔑 Connect/Disconnect 🔓

After loading you must see:
	
![image](https://user-images.githubusercontent.com/18370291/246772802-49be02b5-6612-450a-8b72-8da3d2d68f28.png)

Click on the button and you will see a QR and the ability to select a wallet:

![image](https://user-images.githubusercontent.com/18370291/246774239-3666e7ce-d496-4da5-a0de-92ee32721395.png)

Select Tonkeeper in wallets tab, QR will change:

![image](https://user-images.githubusercontent.com/18370291/246774718-49b0114c-938a-44bc-8ad8-ff48c72aa0f0.png)

We log in using Tonkeeper, the button will change and will display your address. In the drop-down list there will be a disconnect button and the ability to copy the address.

Disconnect and move on to the next checkpoint.

---

# Checkpoint 3: 🤖 Counter Contract 📜

In this quest, we will use this example of a [smart contract](https://github.com/ton-org/blueprint/tree/5b234d83fae6e73234ed32a38cdf0b1558f7cc93/example). The contract, when receiving a message, increments the counter value, which is stored in register c4 of the contract. There is also a Get method that returns the value of the counter.

The example has a wrapper, we will use it for the convenience of interacting with the contract in the file useContractWrapper.ts

I have already deployed the contract for your convenience. 

        const contract = new Counter(
            Address.parse("kQB6UE8yqAonG8AM6tz8PtTE-JQ5svQwWjUWUM4ycZWId39V")
        );

The only question left is how to call Get method. We will use https://testnet.toncenter.com/api/v2/jsonRPC , we will call the method every 5 seconds so that the user can see if their transaction has changed the contract data.

---

# Checkpoint 4: 💻 Add ui 💻

Let's use the wrapper of our contract, comment out the piece of code with the button from the previous step.

![image](https://user-images.githubusercontent.com/18370291/256514220-2731716d-80c3-41e1-9206-1e92aa5c549a.png)

And uncomment the code below - this will be primitive ui:

![image](https://user-images.githubusercontent.com/18370291/256514400-7c28935c-f543-4f07-bcab-e05511d7c526.png)

---

# Checkpoint 5: 📫 Send transaction and Check result in  📮

Launch the application and follow the link:

```sh
yarn dev
```

Log in and click on the button to increase the counter(Send increase by 1):

![image](https://user-images.githubusercontent.com/18370291/256515537-6e7cc55c-0e09-4d67-873f-2100b3d472d5.png)

Confirm the transaction in the wallet and wait for the counter to increase:

![image](https://user-images.githubusercontent.com/18370291/256516167-4b521571-60d6-439e-9556-595f45c59761.png)

---

# ⚔️ Side Quests

Quick results are great, but to play longer, enjoy the ecosystem, I suggest you the following tutorials:
- Dive deep into the React ui [login button](https://github.com/romanovichim/TonFunClessons_Eng/blob/main/lessons/tonconnect/button.md)
- Dive deep into the React ui [send transaction](https://github.com/romanovichim/TonFunClessons_Eng/blob/main/lessons/tonconnect/sendtx.md)


# 🏆 Reward 

Congratulations on successfully completing this challenge! Before we conclude, let's take a quick look at the exciting reward awaiting you from the <a target="_blank" href="https://getgems.io/collection/EQBDUREt8ZScVPe5vkuVxLRU5Juk38WBLnFJop2q4fRJQ_aQ">"TON Speedrun"</a> collection:

<img style="border-radius: 10pt; margin: 25pt auto; display: block;" width="40%" src="https://ton-devrel.s3.eu-central-1.amazonaws.com/tonspeedrun/3/image.jpg">

Ready to claim your reward? Just scan the QR code, which can be generated using the script below:
```sh
yarn reward
```