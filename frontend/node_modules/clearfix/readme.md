clearfix mixin for less
=======================
Clearfix mixin for less. Contain your floats without extra markup.

This package is intended to be used with the less [npm-import](https://www.npmjs.com/package/less-plugin-npm-import) plugin:

```less
@import "npm://clearfix/.";

.stuff {
    .clearfix();

    > .left {
        float: left;
        width: 50%;
    }
    > .right {
        float: right;
        width: 50%;
    }
}
```

This package contains the following mixin (copied from bootstrap):

```less
.clearfix() {
    &:before,
    &:after {
        content: " ";
        display: table;
    }
    &:after {
        clear: both;
    }
}

```