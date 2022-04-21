import os
import shutil

desktop = f'{os.environ["USERPROFILE"]}\Desktop'
organizer = f'{desktop}/Organizer'

if not os.path.isdir(organizer):
    os.mkdir(organizer)

for file in os.listdir(desktop):
    if '.' in file and file != 'desktop.ini':
        ext = os.path.splitext(file)[1]
        dir = f'{organizer}/{ext}'
        if not os.path.isdir(dir):
            os.mkdir(dir.lower())
        shutil.move(os.path.join(desktop, file), os.path.join(dir, file))
