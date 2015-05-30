----------
1. Please download node js
----------

see https://nodejs.org/
To verify its installed open a command prompt and type node -v
It should return something similar to v0.12.2


2. Download this project
----------


3. Depending on how node is installed you may need sudo, so type in a command prompt
----------

TYPE IN A COMMAND PROMPT:

npm install -g grunt-cli
or sudo npm install -g grunt-cli


4. To verify everything is setup type in a command
----------

TYPE IN A COMMAND PROMPT:

cd ROOT_OF_THIS_PROJECT

grunt unit

You should see output:
1 test, 0 assertions, 0 failures, 0 skipped


5. implement the functions in src/dateUtil.js
----------

and

implement the tests in specs/dateUtilSpec.js

Note to see if your tests pass, please type in "grunt unit"


6. help unit tests please refer to
----------

http://jasmine.github.io/2.3/introduction.html
