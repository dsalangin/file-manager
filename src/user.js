export const getUserName = () => {
    let userName = 'Some User';

    const userNameArg = process.argv.find((arg) => arg.startsWith('--username'));

    console.log(process.argv);

    if(userNameArg) {
        userName = userNameArg.split('=')[1];
    }

    return userName; 
}

export const sayHi = (userName) => {
    process.stdout.write(`Welcome to the File Manager, ${userName}!\n`);
}

export const sayBye = (userName) => {
    process.stdout.write(`Thank you for using File Manager, ${userName}, goodbye!`);
}