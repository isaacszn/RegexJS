/***RegexJS***/

/*
  A JavaScript library built to clear the worries of developers to create RegExp patterns...Easy to integrate.
*/

const RegexJS = {
  validateEmail: function(email) {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (pattern.test(email)) {
      console.log('Valid email')
      return true
    } else {
      console.log('Invalid email')
      return false
    }
  },
  validateURL: function(url) {
    const pattern = /^(https?|ftp):\/\/[^\s/.?#].[^]*/;
    if (pattern.test(url)) {
      console.log('Valid URL')
      return true
    } else {
      console.log('Invalid URL')
      return false
    }
  },
  validatePhoneNo: function(phone) {
    const pattern = /^(?:\+234|0)(?:7[0-9]|8[0-9]|9[0-9])[0-9]{7}/;
    if (pattern.test(phone)) {
      console.log('Valid phone number')
      return true
    } else {
      console.log('Invalid phone number')
      return false
    }
  },
  validateDateFormat: function(date) {
    const pattern = /^(0[1-9]|[12][0-9]|3[01])(0[1-9]|1[0-2])4̣/;
    if (pattern.test(date)) {
      console.log('Valid date')
      return true
    } else {
      console.log('Invalid date')
      return false
    }
  },
  validateUsername: function(username) {
    const pattern = /^[A-Za-z0-9_]{3,16}$/;
    if (pattern.test(username)) {
      console.log('Valid username')
      return true
    } else {
      console.log('Invalid username')
      return false
    }
  },  
  validatePassword: function(password) {
    const pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;
    if (pattern.test(password)) {
      console.log('Valid password')
      return true
    } else {
      console.log('Invalid password')
      return false
    }
  }
}

window.RegexJS = RegexJS;

/*Ah, I see you're refining your RegexJS library—nice! Let's tackle those regex patterns to ensure they meet your requirements.

---

🔐 Password Validation Regex

*Requirement:* At least 6 characters, including at least one number and one special character.

*Regex Pattern:*
```regex
^(?=.*[0-9])(?=.*[!@#%^&*]{6,}“`


*Explanation:*
- `^` asserts the start of the string.
- `(?=.*[0-9])` ensures at least one digit.
- `(?=.*[!@#%^&*])` ensures at least one special character.
- `[A-Za-z\d!@#- `` asserts the end of the string.

This pattern ensures that the password includes at least one number and one special character, with a minimum length of 6 characters.

---

📞 Nigerian Phone Number Validation Regex

*Requirement:* Validate Nigerian phone numbers that start with `+234` or `0`, followed by valid prefixes and 8 digits.

*Regex Pattern:*
```regex
^(?:\+234|0)(?:7[0-9]|8[0-9]|9[0-9])[0-9]{7}“`


*Explanation:*
- `^` asserts the start of the string.
- `(?:234|0)` matches either `+234` or `0`.
- `(?:7[0-9]|8[0-9]|9[0-9])` matches valid Nigerian mobile prefixes.
- `[0-9]7` matches the remaining 7 digits of the phone number.
- `` asserts the end of the string.

This pattern ensures that the phone number is valid for Nigerian mobile numbers.

---

🧪 Testing the Patterns*/