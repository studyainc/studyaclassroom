# Studya Virtual Classroom
Studya Virtual Classroom try to create a virtual classroom environment for study. 

## Features
It includes the following features:
 - Presentation
 - Discussion
 - Whiteboard
 - Photo/Camera pickup

### Presentation
Presentation is a view in app. With audio/video and slides/documents display, presentation view provides a channel for teacher/instructor a possibility to broadcast their thoughts.

### Discussion
Discussion is an interaction view in app, sort like chat view in other apps. Discussion view provides a channel for instructor to students, students to students or students to instructor to discuss.

### Whiteboard
Whiteboard is a drawing tool to create sketch draft for exchanging thoughts, besides text message. The drawing should be inserted into discussion instantly and send out to a specific target, or all.

### Photo/Camera pickup
Similiar as Whiteboard, photo/camera pickup just have pictures from camera/photo library then send out via discussion view.

## Design
![Studya Classroom Top][studya_classroom_top]

[studya_classroom_top]: doc/d/studya_classroom_top.png

## Technologies
##### Audio/video streaming
##### React Native / iOS / Android
##### Youtube Live / Mixlr / Spreaker (TBD)
##### QRcode
##### Multimedia Editor (with Audio/video/picture, of course text)
##### HTML 5 / Audio/video player





#### How to create a patch with diff and apply the patch
```
diff -ru origin_file updated_file > file_name.patch
cd folder && patch < ../../patch/react.gradle.patch && cd -
```
Reference:
http://www.thegeekstuff.com/2014/12/patch-command-examples
