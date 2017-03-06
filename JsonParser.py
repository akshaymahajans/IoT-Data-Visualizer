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


diffArray = []

diffArray = subtract_lists(arrayOfS1A, arrayOfS1W)

i = 0;
diffArray = [str(i) for i in diffArray]

j=0
for n in diffArray:
    stringToAdd = ("[" + str(j) + ", ")
    stringToAdd = stringToAdd + n + '],'
    diffArray[j] = stringToAdd
    j = j+1


print("\n".join(diffArray))
        

        
