import json

arrayOfS1A = []
arrayOfS1W = []
with open('dataTest.json') as f:
    for line in f:
        dictionary = json.loads(line)
        if 'raw' in dictionary:
            arrayOfS1A.append(dictionary['raw']['S1A'])
            arrayOfS1W.append(dictionary['raw']['S1W'])
        else:
            continue
       
print(arrayOfS1W[0:10])

        
