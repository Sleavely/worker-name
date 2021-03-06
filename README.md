# worker-name

- [Github](https://github.com/Sleavely/worker-name)
- [NPM](https://www.npmjs.com/package/worker-name)

Gives your app instances descriptive names that help with identifying them in logs. No super heroes, no nonsense.

## Usage

```js
const servername = require('worker-name')
```

You can manually set the instance name by setting the `WORKER_NAME` environment variable.

For Heroku, it is recommended you enable [dyno metadata](https://devcenter.heroku.com/articles/dyno-metadata):

```sh
heroku labs:enable runtime-dyno-metadata -a <app name>
```

## MIT License

Copyright (c) 2018 Joakim Hedlund

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
