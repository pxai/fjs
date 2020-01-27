#!/bin/bash
# run from the content
TEXT=
TEMPL=../scripts/
DIST=../dist/
LANG="english"

# This wraps lines and adds line number...
#     --listings -H ${TEMPL}listings-setup.tex \

#FILES=${TEXT}prologue.md ${TEXT}level1.md ${TEXT}level7.md
pandoc --template=${TEMPL}plantilla-kdp.latex \
    -V language=${LANG} -V lang=${LANG} \
    -V author='Pello Xabier Altadill Izura' -V title='A gentle introduction to Functional Programming with JavaScript'\
    -V documentclass=book\
    -S --latex-engine=xelatex  \
    -o ${DIST}fpjsintro.pdf  \
    ${TEXT}functionaljs.md \
    --toc
