import csv
import json
import os

current_dir = os.path.abspath(os.path.dirname(__file__))

input_prefix = "in/"
output_prefix = "out/"
input_files = ["outputF1.txt", "outputF2.txt", "outputF3.txt", "outputF4.txt"]

csv.register_dialect('tab-seperated', delimiter='\t')

def csv_to_json(csvFilePath, jsonFilePath):
    jsonArray = []

    # read csv file
    with open(csvFilePath, encoding='utf-8') as csvf:
        
        # load csv file data using csv library's dictionary reader
        csvReader = csv.DictReader(csvf, dialect='tab-seperated')

        # convert each csv row into python dict
        for row in csvReader:
            # add this python dict to json array
            jsonArray.append(row)

    # convert python jsonArray to JSON String and write to file
    with open(jsonFilePath, 'w', encoding='utf-8') as jsonf:
        jsonString = json.dumps(jsonArray, indent=4)
        jsonf.write(jsonString)


for inputFile in input_files:
    csvFilePath = os.path.join(current_dir, input_prefix) + inputFile
    jsonFilePath = os.path.join(
        current_dir, output_prefix) + inputFile.replace("txt", "json")
    csv_to_json(csvFilePath, jsonFilePath)
