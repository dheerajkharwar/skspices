function ValidateForm(frm) {
    if (frm.Name.value == "") { alert('Name is required.'); frm.Name.focus(); return false; }
    if (frm.PhoneNumber.value == "") { alert('PhoneNumber is required.'); frm.PhoneNumber.focus(); return false; }
    if (!frm.PhoneNumber.value.match(/^\d{10}$/)) { alert('PhoneNumber should be a 10 digit number.'); frm.PhoneNumber.focus(); return false; }
    if (frm.EmailAddress.value.indexOf("@") < 1 || frm.EmailAddress.value.indexOf(".") < 1) { alert('Please enter a valid email address.'); frm.FromEmailAddress.focus(); return false; }
    if (frm.Message.value == "") { alert('Please enter comments or questions.'); frm.Message.focus(); return false; }
    return true;
  }