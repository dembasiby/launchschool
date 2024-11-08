const MAX_WINDOW_WIDTH = 80;

// textWrapper regex is from the following website:
// https://www.30secondsofcode.org/js/s/word-wrap/

function textWrapper(str) {
  return str.replace(
    new RegExp(
      `(?![^\\n]{1,${MAX_WINDOW_WIDTH}}$)([^\\n]{1,${MAX_WINDOW_WIDTH}})\\s`,
      "g"
    ),
    `$1\n`
  );
}

function logInBox(text) {
  let lines = textWrapper(text).split("\n");
  let len = text.length < MAX_WINDOW_WIDTH ? text.length : MAX_WINDOW_WIDTH;
  let horizontaleRule = `+-${"-".repeat(len)}-+`;
  let emptyLine = `| ${" ".repeat(len)} |`;

  console.log(horizontaleRule);
  console.log(emptyLine);

  lines.forEach((line) => {
    console.log(
      `| ${line}${
        len < MAX_WINDOW_WIDTH
          ? " "
          : " ".repeat(MAX_WINDOW_WIDTH - line.length + 1)
      }|`
    );
  });

  console.log(emptyLine);
  console.log(horizontaleRule);
}

logInBox("");

logInBox("To boldly go where no one has gone before.");

logInBox(
  "You may assume that the output will always fit in your browser window."
);

logInBox(
  "After demystifying the regular expression, we can use String.prototype.replace() to replace the matched sequences with the captured group and a newline character. This will effectively wrap the string to a maximum of 32 characters. In order to make this more generic, we can use the RegExp() constructor to create a regular expression with a dynamic maximum length. This allows us to create a function that can word wrap a string to any number of characters."
);
