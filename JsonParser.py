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



def subtract_lists(a, b):
    for i, val in enumerate(a):
            val = val - b[i]
    return a


array =[]

array = subtract_lists(arrayOfS1A, arrayOfS1W)
print (array[0:14])

    

        

        
