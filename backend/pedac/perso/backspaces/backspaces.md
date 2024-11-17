Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

## Examples

```js
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""


```

## Code

```js
function cleanString(s) {
  while (s.includes("#")) {
    if (/[a-zA-Z]#/.test(s)) {
      s = s.replace(/[a-zA-Z]#/, "");
    } else {
      s = s.replace("#", "");
    }
  }
  return s;
}
```

```

```
