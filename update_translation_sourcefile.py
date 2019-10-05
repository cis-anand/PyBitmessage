from subprocess import call
#code for generating translation source file
print "Updating translation source files"
call(["pylupdate4", "src/translations/bitmessage.pro"])
