import os
import json

folder_path = "report"

def singleJson(keys, values):
    json = {}
    for key, value in zip(keys, values):
        json[key] = value

    return json


def reportsName():
    reports = []
    for file in os.listdir(folder_path):
        full_path = os.path.join(folder_path, file)
        if os.path.isfile(full_path):
            reports.append(file)

    return reports

def fieldsEndPosition(text):
    positions = []
    start = 0
    word = "field"
    while True:
        index = text.find(word, start)
        if index == -1:
            break
        positions.append(index+8)
        start = index+1
    return positions

def headersEndPosition(text):
    positions = []
    start = 0
    word = "header"
    while True:
        newIndex = text.find(word, start)
        if newIndex == -1:
            break
        positions.append(newIndex+9)
        start = newIndex+1
    return positions

def getFieldHeaderFromReport(text):
    fieldsName = []
    for index in fieldsEndPosition(text):
        oneField = ""
        for findColon in range(50):
            if text[index+findColon] == '\'':
                fieldsName.append(oneField)
                oneField = ""
                break
            oneField += text[index+findColon]

    # search for headers
    headersName = []
    for index in headersEndPosition(text)[1:]:
        newOneField = ""
        for findColon in range(50):
            if text[index+findColon] == '\'':
                headersName.append(newOneField)
                newOneField = ""
                break
            newOneField += text[index+findColon]

    return {"fieldsName": fieldsName, "headersName": headersName}
    

def reportTitle(report):
    separateBy_ = report.split("_")
    return f"{separateBy_[0]} Report {separateBy_[1][0: -4]}"


def translateHeaderValues(text, fieldAndHeader, report):
    start = 0
    count = -1
    word = "header"
    newContent = text
    while True:
        newIndex = newContent.find(word, start)
        if newIndex == -1:
            break
        start = newIndex+1
        count += 1
        if count == 0:
            continue
        endIndex = newContent.find("'", newIndex+9)
        translateVar = f"translationsForReport{"".join(report.split(".")[0].split("_"))}"
        newContent = newContent[:newIndex+8] + f"t(`${{{translateVar}Columns}}.{fieldAndHeader["fieldsName"][count-1]}`)" + newContent[endIndex+1:]

    return newContent


def translationVars(text, report, reportJsonName):
    start = 0
    word = "import"
    lastImportIndex = text.rfind(word, start)
    findLineEnd = text.find('\n', lastImportIndex)

    translateVar = f"translationsForReport{"".join(report.split(".")[0].split("_"))}"

    theString = f"""import {{ useTranslation }} from 'react-i18next';

const translationsForBasedOnError: string = "errors"
const translationsForBasedOn: string = "basedOn"
const {translateVar}: string = "reports.{reportJsonName}"
const {translateVar}Columns: string = "reports.{reportJsonName}.columns"
"""
    print(findLineEnd)
    newText = text[:findLineEnd+1] + theString + text[findLineEnd+1:]
    
    return newText

def addTranslatedtitle(text, report):
    start = 0
    word = "SimpleCard"
    first = text.find(word, start)
    index = text.find(word, first+1)
    endIndex = text.find('"', index+18)
    translateVar = f"translationsForReport{"".join(report.split(".")[0].split("_"))}"
    title = f"{{t(`${{{translateVar}}}.title`)}}"
    newText = text[:index+17] + title + text[endIndex+1:]

    return newText

def doIt():
    fieldsAndHeadersDict = {}
    for report in reportsName():
        with open(f"report/{report}", "r") as file:
            content = file.read()
            # Field And Headers from Report in this variable
            fieldAndHeaderDict = getFieldHeaderFromReport(content)
            # from field and headers make dict to later when whole is added in jsonData variable write to a json file
            reportJson = singleJson(fieldAndHeaderDict["fieldsName"], fieldAndHeaderDict["headersName"])
            title = reportTitle(report)
            joinTitleReport = (singleJson(["title", "columns"], [title, reportJson]))
            reportJsonName = report.lower()[0: -4]
            fieldsAndHeadersDict[reportJsonName] = joinTitleReport
            print(report)
            # make variable for headers to support translations
            newContent = translateHeaderValues(content, fieldAndHeaderDict, report)
            # Add translation compatibality to title
            newContent = addTranslatedtitle(newContent, report)
            # Add to file the variables for translations
            newContent = translationVars(newContent, report, reportJsonName)
            # Write it to report file
            with open(f"report/{report}", "w") as file:
                file.write(newContent)

        jsonData = json.dumps(fieldsAndHeadersDict)
        with open("newFile.json", "w") as file:
            file.write(jsonData)
    
doIt()
