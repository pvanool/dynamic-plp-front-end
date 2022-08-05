This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Prerequisites
### Code

Commerce-service with Dynamic PLP changes running locally using this branch:
https://github.com/coveo/commerce-service/tree/feat/com-1710-dynamic-plp-poc
Product Listing headless controller with Dynamic PLP changes from this branch:
https://github.com/coveo/ui-kit/tree/feat/com-1710-dynamic-plp-poc

Create a Symlink to the headless library in this project by first using `npm link` in the headless package. And then do a `npm link @coveo/headless` in this project. Detailed information in the [npm instructions](https://docs.npmjs.com/cli/v8/commands/npm-link).

### Demo environment
Ensure you have an organisation setup on the platform. And provide the api key (TODO) in environment variables. 
Setup a catalog and fill it with products from [mystore-products.json](./CatalogResources/mystore-products.json).
Add 2 PLP's names [Catalog](./CatalogResources/PLP/catalog.json) and [Sales](./CatalogResources/PLP/sales.json).
### Demo setup
We hava a catalog setup with 6 products. Sneakers from Nike, Puma and Adidas.
One PLP named Catalog to show the whole content, being 6 products. 2 of each brand.
One PLP names Sales that filters products with a price less then 100. Which gives 3 products. 1 of each brand.

### Demo
The POC implementation is based on the concept of [dynamic routing](https://nextjs.org/docs/routing/dynamic-routes) in the front-end world. We take the path withouth the slug and use it as a way to indentify the PLP specified as `rooturl`. It's used on the backend to extract the slug from the full url. The slug parts are used as values for the dynamic part of the PLP. The fields segments to resolve the slug values are specified in the slug options. We choose to let the client specify it for ease of implementation and experimentation. It could be easily stored or configured together with the PLP definition if we want to.

You can show show the content of the PLP's by navigating to http://localhost:3000/pages/catalog or http://localhost:3000/pages/sales.
The dynamic part is specified by the client. Currently it's setup on `ec_brand`. You can change it to a different field as desired.
Now you can **dynamically** navigate to the brand pages inside the product listing. For example http://localhost:3000/pages/sales/nike should give you only the Nike sneaker that's on sale. Or doing the same for the catalog PLP will give you 2 Nike sneakers. And so on.
Depending on the amount of fields specified by the client you can stack them like /nike/puma and so on. In the example implementation there are 3 fields `ec_brand` specified. So you're able to stack all 3 brands in the example. You can change the field to something different if you want the dynamic field to be something different like `gender` or `category` for example. 


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
