# allgo

Crawler of Go dependencies graph. Uses http://go-search.org/ as the data source.

# usage

These simple steps will produce local version of the go graph:

```
git clone https://github.com/anvaka/allgo
cd allgo
./download.sh
node layout.js
node toBinary.js
```

The ouptut is stored to `./data` folder, and can be consumed by [pm visualization](https://github.com/anvaka/pm)

# license

MIT
