#!/usr/bin/env bash
for f in *.txt; do 
    mv -- "$f" "${f%.txt}.csv"
done