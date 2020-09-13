---
id: compiling
title: "编译构建"
sidebar_label: "编译构建"
original_id: compiling
---

Crystal MD使用CMake工具进行编译构建，如果你不熟悉CMake，可以参考CMake的相关文档。
在正式进行构建之前，确保你的系统已经安装并配置了CMake工具、相符版本的c++编译器、MPI环境等，
且确保已经正确配置了环境相关变量(如**CC** **CXX**环境变量)。

## 1.使用CMake工具编译
我们强烈推荐使用CMake外部构建(out-of-source build)方式进行构建：
```bash
cd $MD_PATH
cmake -B./build -H./
cmake --build ./build -j 4  # build using 4 processors.
```
执行以上步骤后，编译完成的可执行Crystal MD程序会放在`$MD_PATH/build/bin`目录。

## 2.构建选项
如果你需要将编译完成的二进制文件安装到指定目录，可以用以下命令进行构建,并安装：
```bash
cd $MD_PATH
cmake -B./build -H./ -DCMAKE_INSTALL_PREFIX=/your/desirable/path/
cmake --build ./build -j 4
make install
```

在执行cmake命令的时候，除了可以指定`CMAKE_INSTALL_PREFIX`等CMake构建工具内置的参数外，还可以指定以下参数：

|  参数 | 取值 | 默认值  |  说明 |
| :-   | :-:  | :-:	| :-   |
| TEST_ENABLE_FLAG       | ON/OFF	| ON | 是否构建test (单元测试) |

例如，如果你不希望构建单元测试和tools目录，可以使用如下的命令进行构建：
```bash
cd $MD_PATH
cmake -B./build -H./ -DTEST_ENABLE_FLAG=OFF
cmake --build ./build -j 4
```

## v0.2.0 版本已知的编译问题
1.  no matching function for call to `toml:: Value::as<long int>() const`
```long
config.cpp: In member function 'void config::resolveConfig(std::__cxx11::string)':
CrystalMD-v0.2.0/src/config.cpp:94:45: error: no matching function for call to 'toml::Value::as<long int>() const'
         timeSteps = tomlTimeSteps->as<long>();
                                             ^
In file included from CrystalMD-v0.2.0/src/config.cpp:4:
CrystalMD-v0.2.0/src/include/toml.hpp:1406:49: note: candidate: 'template<class T> typename toml::call_traits<T>::return_type toml::Value::as() const'
     inline typename call_traits<T>::return_type Value::as() const {
```

编辑 `$MD_PATH/src/config.cpp`文件:
```diff
-    if (tomlTimeSteps && tomlTimeSteps->is<long>()) {
-        timeSteps = tomlTimeSteps->as<long>();
+    if (tomlTimeSteps && tomlTimeSteps->is<int>()) {
+        timeSteps = tomlTimeSteps->as<int>();
    }
    ...
-    if (tomlCollisionSteps && tomlCollisionSteps->is<long>()) {
-        collisionSteps = tomlCollisionSteps->as<long>();
+    if (tomlCollisionSteps && tomlCollisionSteps->is<int>()) {
+        collisionSteps = tomlCollisionSteps->as<int>();
    }

```

2. No rule to make target `src/CMakeFiles/CrystalMD.dir/depend'.

```log
[ 88%] Linking CXX static library ../lib/libcrystalmd.a
[ 88%] Built target crystalmd
make[2]: *** No rule to make target `src/CMakeFiles/CrystalMD.dir/depend'.  Stop.
make[1]: *** [src/CMakeFiles/CrystalMD.dir/all] Error 2
make: *** [all] Error 2
```

编辑 `src/CMakeLists.txt` 文件:
```diff
# make crystal-md lib
-set(MD_LIB_NAME crystalmd)
+set(MD_LIB_NAME md)
```
