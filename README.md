# 📁 File Manager - User Guide

## 🚀 Introduction
Welcome to the File Manager! This CLI tool lets you perform file operations, check system info, calculate hashes, and work with file compression.

## ⚙️ Installation & Startup

### Prerequisites
- Node.js v22.14.0 or higher

### Launch Command
```bash
npm run start -- --username=your_username
You'll see:

Welcome to the File Manager, your_username!
You are currently in /Users/your_username
� Basic Navigation
📌 Current Directory
Always displayed before the prompt:

You are currently in /current/path
🗂️ Available Commands
📂 Navigation
Command	Description
up	Move to parent directory
cd path	Change directory (relative/absolute)
ls	List contents (folders first, sorted)
📄 File Operations
Command	Description
cat file	Show file content
add file	Create new file
mkdir dir	Create new directory
rn old new	Rename file
cp src dest	Copy file
mv src dest	Move file
rm file	Delete file
💻 System Info
Command	Description
os --EOL	Show line endings
os --cpus	Show CPU details
os --homedir	Show home directory
os --username	Show system user
os --architecture	Show CPU arch
🔐 Hash Operations
bash
hash path/to/file
🗜️ Compression
bash
compress input output.br
decompress input.br output
🚪 Exiting
Press Ctrl+C or type:

bash
.exit
To see:

Thank you for using File Manager, username, goodbye!
❌ Error Handling
Invalid commands: Invalid input

Failed operations: Operation failed

You can retry after errors

🧑‍💻 Examples
Basic Operations
bash
cd Documents
ls
add notes.txt
cat notes.txt
System Info
bash
os --cpus
os --homedir
File Compression
bash
compress report.pdf report.br
decompress report.br report_restored.pdf
⚠️ Limitations
Can't navigate above root directory

All paths are case-sensitive

No wildcard support in file operations

💡 Tip: Use Tab for path autocompletion in most terminals