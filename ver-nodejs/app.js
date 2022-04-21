const fs = require('fs');

// desktop directory
const desktopDirectory = `${require('os').homedir()}/Desktop`;

// destination directory - NodeJS Organizer
const destinationDirectory = `${require('os').homedir()}/Desktop/NodeJS Organizer`;

// desktop files
const dekstopFiles = fs.readdirSync(desktopDirectory).filter(
    file => file !== 'desktop.ini' && fs.lstatSync(`${desktopDirectory}/${file}`).isFile()
);

// move desktop files to organizer directory
const organize = () => {
    dekstopFiles.forEach(file => {
        if (file.includes('.')) {
            const ext = file.split('.').pop().toUpperCase();
            const extDirectory = `${destinationDirectory}/${ext}`;
            if (!fs.existsSync(extDirectory)) {
                fs.mkdirSync(extDirectory);
                console.log(
                    `New directory has been successfully created.\n${extDirectory}\n`
                );

                fs.renameSync(`${desktopDirectory}/${file}`, `${destinationDirectory}/${ext}/${file}`);
                console.log(
                    `The file has been moved to the destination directory.\n${destinationDirectory}/${ext}/${file}\n`
                );
            } else {
                fs.renameSync(`${desktopDirectory}/${file}`, `${destinationDirectory}/${ext}/${file}`);
                console.log(
                    `The file has been moved to the destination directory.\n${destinationDirectory}/${ext}/${file}\n`
                );
            }
        } else {
            fs.renameSync(`${desktopDirectory}/${file}`, `${destinationDirectory}/${file}`);
            console.log(
                `The file has been moved to the destination directory.\n${destinationDirectory}/${file}\n`
            );
        }
    });
}

// organize desktop files
if (fs.existsSync(destinationDirectory)) {
    organize();
} else {
    fs.mkdirSync(destinationDirectory);
    console.log(
        `New directory has been successfully created.\n${destinationDirectory}\n`
    );

    organize();
}
