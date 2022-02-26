import csv
import json
import os

current_dir = os.path.abspath(os.path.dirname(__file__))

input_prefix = "in/"
output_prefix = "out/"
input_files = ["output1_s.csv", "output2_s.csv",
               "output3_s.csv", "output4_s.csv", "translations.csv"]

csv.register_dialect('comma-seperated', delimiter=',')


def csv_to_json(csvFilePath, jsonFilePath):
    jsonArray = []
    # read csv file
    with open(csvFilePath, encoding='utf-8') as csvf:
        # load csv file data using csv library's dictionary reader
        csvReader = csv.DictReader(csvf, dialect='comma-seperated')
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
        current_dir, output_prefix) + inputFile.replace("csv", "json")
    csv_to_json(csvFilePath, jsonFilePath)
