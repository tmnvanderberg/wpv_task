import re
import os

current_dir = os.path.abspath(os.path.dirname(__file__))

input_prefix = "in/"
output_prefix = "in/"
input_files = ["output1.csv", "output2.csv",
               "output3.csv", "output4.csv"]


def replace_spaces(inFile, outFile):
    fin = open(inFile, "rt")
    fout = open(outFile, "wt")
    # add headers
    fout.write("cue,target,cond,occurence\n")
    # replace spaces with commas and transform to lowercase
    for line in fin:
        fout.write(re.sub(' +', ',', line.lower()))
    fin.close()
    fout.close()


for inputFile in input_files:
    inFile = os.path.join(current_dir, input_prefix) + inputFile
    outFile = os.path.join(
        current_dir, output_prefix) + inputFile.replace(".csv", "_s.csv")
    replace_spaces(inFile, outFile)