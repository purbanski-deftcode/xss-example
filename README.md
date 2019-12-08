# Example of XSS attack

In this example of XSS attack we have backend with three endpoints:
- `GET /` - This one is using Pug template engine to render interactive HTML page. We can use input here to add new value to the page.
- `GET /xss` - This one is just sending HTML as text that we are parsing manually adding some dynamic content to it.
- `POST /add` - This one is used by both endpoints above to add new value to simple in-memory storage (basically to specific array).

To test it just run `npm run start` (after installing dependencies by using `npm run install`) in your terminal and then test both `http://localhost:4000` and `http://localhost:4000/xss` endpoints in your browser
by adding value like this: `<script>alert('You have been hacked')</script>` to the page.
