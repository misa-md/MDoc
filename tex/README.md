## LaTeX building

## Build
```bash
./preprocess.sh ../docs
latexmk -xelatex document.tex
```

## Build using minted as highlighting
By default, `listings` package is used for code highlighting, 
you also can highlight the code using minted package.

### install minted
`minted` package is required for building minted highlighted LaTeX document.
```bash
sudo dnf install texlive-minted # or: tlmgr install minted
```
And, python package `pygments` is also required:
```bash
pip install --user pygments
```

### add pandoc-minted
pandoc does not support minted directly,
we use [pandoc-minted](github.com/nick-ulle/pandoc-minted) as pandoc filter to provide minted support.

```bash
pip install --user pandoc-minted
```

### build
Then build document using:
```bash
./preprocess.sh ../docs --minted
latexmk -xelatex --shell-escape document-minted.tex
```
