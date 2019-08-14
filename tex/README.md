## LaTeX building

## Requirements
`minted` package is required for building LaTeX formated document.
```bash
sudo dnf install texlive-minted
```
And, python package `pygments` is also required:
```bash
pip install --user pygments
```

## Build
```bash
latexmk -xelatex --shell-escape  document.tex
```