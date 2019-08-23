from subprocess import call
print "Updating translation source files"
call(["pylupdate4", "src/translations/bitmessage.pro"])