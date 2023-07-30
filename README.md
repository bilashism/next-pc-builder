# Next PC Builder - with Next.js (v13), Redux toolkit, NextAuth, Express, MongoDB, Tailwind CSS   

- Live website: https://next-pc-builder.vercel.app  
- Github repository: https://github.com/bilashism/next-pc-builder 

 This is a clean and straightforward PC Builder website for PC parts and components using Next.js. The website includes a PC Builder tool where users can add selected PC components to build their own PC.

## Navbar:

Clicking on the PC Builder button the users will be redirected to the PC Builder page to start building their PC.

The navbar has a Categories dropdown with the following categories:

- CPU / Processor
- Motherboard
- RAM
- Power Supply Unit
- Storage Device
- Monitor
- Others
Each category has a corresponding route. (SSG implementation) 

## Home Page: (SSG implementation)
- The home page features 6 PC components as Featured Products
- The home page features 6 categories as Featured Categories 

## Product Detail Page / Route: (SSG implementation)
- Each PC Components has a Product Details page with the following properties:
  - Image
  - Product Name
  - Category
  - Status: In Stock | Out of stock
  - Price
  - Description
  - Key Features (like Brand, Model, Specification, Port, Type, Resolution, Voltage, etc)
  - Individual Rating (Out of 5 Stars)
  - Average Rating (Out of 5 Stars)
  - Reviews
  
## PC Builder Page: (SSR implementation)
- The PC Builder page has category sections as follows:
  - CPU / Processor
  - Motherboard
  - RAM
  - Power Supply Unit
  - Storage Device
  - Monitor
  - Each category has a Select/Change Button.

- Clicking on the Select/Change Button will take the user to another page where pc components of that specific category will be displayed.
- Each component card on this page shows the following properties:
  - Image
  - Product Name
  - Category
  - Price
  - Status
  - Rating
  - Each component card on that page has an Add To Builder Button.
  
- Clicking on this button will redirect the user to the PC Builder page, and it will update the state of that selected category section in the PC Builder Page with the selected component below. To create a central store for this Redux and Redux-toolkit is used. 

## Other Features:

* The PC Builder Page is a protected/private route (only logged-in users can visit this route). Using NextAuth with Google social login provider to enable user authentication.
* Clicking on the Complete Build button will show a success alert  
* The entire application is responsive for both mobile and desktop devices to ensure an enjoyable user experience across all devices. 


## How to run the application 

After cloning the application first, you have to install all the packages using the following command  
`npm install`  

After successfully installing all the packages you can start the application in development server using the following command  
`npm run dev`   

This will start a development server in your local machine.  

To build the application you will can run the following command  
`npm run build`  

To deploy the application you will can run the following command  
`npm run deploy`  


** You'll need a .env file that would store the secret key values for running the application, which is not present in the repository for security reasons.