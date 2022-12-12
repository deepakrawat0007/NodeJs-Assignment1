const fs = require('fs/promises')

//creating a file

const myFileWriter = async (fileName, fileContent) => {
	const data = await fs.writeFile(`${fileName}`,`${fileContent}`,(err)=>{
		console.log(err)
	})
}

//reading a file

const myFileReader = async (fileName) => {
	const read = await fs.readFile(`${fileName}`,{encoding:'utf-8'},(err)=>{
		console.log(err)
	})
	console.log(read)
}

//updating a file

const myFileUpdater = async (fileName, fileContent) => {
	const update = await fs.appendFile(`${fileName}` , `${fileContent}`, (err) =>{
		console.log(err)
	})
}

//deleting a file

const myFileDeleter = async (fileName) => {
	const del = await fs.unlink(`${fileName}` , (err)=>{
		console.log(err)
	})
}

//creating a file
// myFileWriter("okgoogle.txt","welcome to google page");

//reading file
// myFileReader('okgoogle.txt');

//updating file
// myFileUpdater('okgoogle.txt','\nHello Google');

//deleting file
// myFileDeleter('okgoogle.txt');

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }