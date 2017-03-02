# Studya Virtual Classroom


### How to create a patch with diff and apply the patch
```
diff -ru origin_file updated_file > file_name.patch
cd folder && patch < ../../hacks/react.gradle.patch && cd -
```
Reference:
http://www.thegeekstuff.com/2014/12/patch-command-examples