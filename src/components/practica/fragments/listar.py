
#import os
#contenido = os.listdir('./')
#for elemento in contenido:
#    print('import', elemento.split('.')[0] ,'from', '"./fragments/'+elemento+'";')

import os
contenido = os.listdir('./')
for elemento in contenido:
    print(elemento.split('.')[0]+'":'+elemento.split('.')[0]+',')

