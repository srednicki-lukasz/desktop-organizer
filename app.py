import os
import shutil

desktop = f'{os.environ["USERPROFILE"]}\Desktop'

for file in os.listdir(desktop):
    if '.' in file and file != 'desktop.ini':
        ext = os.path.splitext(file)[1]
        dir = f'{desktop}/{ext}'
        if not os.path.isdir(dir):
            os.mkdir(dir)
        shutil.move(os.path.join(desktop, file), os.path.join(dir, file))
