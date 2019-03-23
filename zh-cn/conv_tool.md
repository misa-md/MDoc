# conv Tool Manual

CrystalMD 模拟结束后，会产生二进制的原子信息文件，我们需要使用conv工具将其转化为可读的文本文件。

> conv工具目前支持windows, linux系统；linux版本中包含i386，amd64， arm, mpis等主流架构版本，windows包含主流的i386和amd64版本。

!> __TODO__ 编译

## 1. 基本命令
### 1.1 conv --help命令
查看帮助信息。
```bash
$ conv --help
this program convert binary atom file to SQLite database file (default) or text file (by setting --text argument).
conv for CrystalMD 0.3.0
Usage: conv --atomfile ATOMFILE [--text] --ranks RANKS [--outfile OUTFILE]

Options:
  --atomfile ATOMFILE, -a ATOMFILE
                         path of binary atom file.
  --text, -t             output to text file.
  --ranks RANKS, -n RANKS
                         the count of MPI ranks.
  --outfile OUTFILE, -o OUTFILE
                         path of output file(text or SQLite). [default: md-atoms.db]
  --help, -h             display this help and exit
  --version              display version and exit
```

### 1.2 转换模拟结果文件到文本文件
命令示例：
```bash
$ conv -a ./crystal_md.out -o md.txt -n 16 --text
```
上面的例子中，-a 选项（或--atomfile选项）指定MD模拟结果的二进制文件路径； -o （或--outfile） 选项指定转换的可读文本文件路径； -n选项（或--ranks）指定模拟时使用的MPI进程数(这里是16个MPI进程)；--text选项指定转换成文本文件，如果不指定--text选项，则程序默认转换为sqlite3数据库文件。

### 1.3 转换模拟结果文件到sqlite3数据库文件
命令示例：
```bash
$ conv -a ./crystal_md.out -o md_sqlite3.db -n 16 --text
```
如果不指定--text选项，则程序默认转换为sqlite3数据库文件。
上面示例中，在转换完成后，会生成名为md_sqlite3.db的sqlite3数据库文件，可以使用一些工具(如[DB Browser for SQLite](https://sqlitebrowser.org/)[1])进行查看。

### 1.4 链接：
1. DB Browser for SQLite [https://sqlitebrowser.org/]( https://sqlitebrowser.org/)