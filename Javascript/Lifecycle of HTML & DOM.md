# Lifecycle of HTML & DOM

https://tilomitra.com/html-page-lifecycle-events/

**The lifecycle of an HTML page has three important events:**

- `DOMContentLoaded` – the browser fully loaded HTML, and the DOM tree is built, but external resources like pictures `img` and stylesheets may be not yet loaded.

- `load` – the browser loaded all resources (images, styles etc).

- `beforeunload/unload` – when the user is leaving the page.

  

**Each event may be useful:**

- `DOMContentLoaded` event – DOM is ready, so the handler can lookup DOM nodes, initialize the interface.
- `load` event – additional resources are loaded, we can get image sizes (if not specified in HTML/CSS) etc.
- `beforeunload/unload` event – the user is leaving: we can check if the user saved the changes and ask him whether he really wants to leave.