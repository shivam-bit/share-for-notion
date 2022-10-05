**Local setup**

```sh
git clone https://github.com/shivam-bit/share-for-notion.git
cd share-for-notion/
npm i
npm run start
```
Then open http://localhost:3000/


**Live - [share-for-notion.vercel.app](http://share-for-notion.vercel.app/)**

**Goal** : 

To build a re-usable notion, share widget component with plain CSS + any JavaScript Framework.

**My thought process**:



1. Since plain CSS has been asked to use, I can't even use scss.
2. Since we can use any javascript framework, I will start with react.js as I haven't used it for quite a long and this assignment will act as a refresher.

	**Project structure**



1. Then I was thinking about the project structure, which was the most confusing part. Since we need to use plain CSS, one of the other things that I assumed is that we don't need to use any design component library or extra packages for the UI in react.js.
2. I tried to follow a combination of the atomic design system and the container-view design system. 
3. So I built a bunch of core components like button, popover modal etc., which I believe can be extended to any other new feature.
4. Then I built modules which are a combination of a bunch of core components and some specific logic.
5. After which, I built a layout folder. Layouts components are responsible for data layout into a specific form without any business logic.
6. Then we got containers, which are collections of modules, core components and layouts with business logic. 
7. I created a share context to share states between components and prevent props drilling with minimal propeties. 

	**CSS structure**



1. I have divided the css into similar folder architecture as react so that we don't need to search for classes.
2. All shared CSS properties are declared in index.css as a variable so that we use them anywhere and have a single source of truth.
3.  I have followed the CSS BEM methodology for my CSS class name.
4. I was missing scss as I could easily have used mixins and extended property.

**Pending Tasks**



1. Unit Tests (in -progress)
2. Storybook Implementation (Pending)

**Issues**



1. Close Modal when clicking outside
2. Close all popovers when the sibling popover opens up.
3. Close popover when clicked outside.
4. Look for performance improvement.