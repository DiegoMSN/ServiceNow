//client script
//make all fields read only
var fields = g_form.getEditableFields(); 
for (var x = 0; x < fields.length; x++) { 
    g_form.setReadOnly(fields[x], true); 
}
