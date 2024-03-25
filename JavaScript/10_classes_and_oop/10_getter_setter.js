class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email() {
        return this._email.toUpperCase()
    }
    set email(value) {
        this._email = value
    }

    get password() {
        return `${this._password}ashfaq`
    }
    set password(value) {
        this._password = value
    }
}

const ashfaq = new User("ashfaq@example.com", "abcd")
console.log(ashfaq.email);
console.log(ashfaq.password);