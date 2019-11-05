/**
 * Copyright 2017, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const express = require('express');
const ejs = require('ejs')

const app = express();
// Set up static files in 'static' folder
app.use(express.static('static'));

// Home Page
app.get('/', (req, res) => {
  ejs.renderFile('templates/index.html', {}, {}, function(err, html_output){
    res
      .status(200)
      .send(html_output)
      .end();
  });
});

// About my family
app.get('/about', (req, res) => {
  ejs.renderFile('templates/about_my_family.html', {}, {}, function(err, html_output){
    res
      .status(200)
      .send(html_output)
      .end();
  });
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});

module.exports = app;
