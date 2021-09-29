Respect 
-------

"_Thank you for contributing to this project, it means a lot to families impacted by family 
violence and will help to find and connect those in need to the right community support 
services, which will make a huge difference in their world._"

[Respect](www.respect.org.nz) is a community organisation based in Takapuna, Auckland, New Zealand. 

Their main purpose is to stop domestic violence and abuse on the North Shore, and help people create 
better relationships. People in violent relationships require a multitude of support that can be unique 
for each person, so it is crucial for them to be able to quickly browse a list of services they can use.

## Motivations

Because this application will be used by people who might have very limited time to find the information they 
need, or limited access to the internet, and because Respect has had no funding to build this, we are trying
to keep these key points in mind:
- minimise cost as much as possible
- make it fast to load on client side, by building everything server side
- make the content management system as robust as possible for a non-tech savvy community to use safely
- "_working software is more valuable than perfect software_"

With this in mind, these are the key technologies and tools that have been chosen:
- [Next.js](https://nextjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Netlify](https://www.netlify.com/) and [Netlify CMS](https://www.netlifycms.org/)

`Next.js` allows us to have a nice developer experience while doing smart server rendering with Typescript
support. `Typescript` will give us more confidence before deployments, because any issue will be picked up at build time.
`Netlify` has a **free open-source plan** _and_ an open-source Content Management System (CMS),
which made it a clear platform winner for our scenario. Besides, Netlify's CMS will also help with static page 
generation and reducing cost, since the content will be stored in our GitHub repository (inside the `/content` 
directory) : no need to run a separate database !


## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with 
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). You will need to have
`Node 12` (or later) installed. This project also uses `npm`, and we enforce `Prettier` rules for more consistent
formatting.

1. Fork the project (click the `Fork` button in the top-right corner of this page)
2. When you're ready to start working, install all the packages at the root of the project:
```bash
$ npm i
```
3. You can now run the development server with:
```bash
$ npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result and celebrate !

Pages will auto-update as you edit them.

The CMS is accessible at `/admin` (invite only).


## Contributing - Guidelines

If you want to contribute, please follow these [guidelines](docs/contributing) first (coming soon), then come back 
here to read the _Getting Started_ section.
