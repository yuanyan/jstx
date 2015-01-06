# jstx
> Compile templates to a JST file.

## Settings
```
{
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g,
    include     : /<%@([\s\S]+?)%>/g,
    variable    : 'obj',
    escaper     : '_.escape'
}
```

## License
Copyright (c) 2015 Yuanyan Cao. Licensed under the MIT license.
