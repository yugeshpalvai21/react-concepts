const getDetails = () => {
    console.log("exploring es6 imports and exports");
}

const getName = (name) => {
    return name.toUpperCase()
}

const person = { 
                firstName: 'yugesh', 
                lastName: 'palvai', 
                getFullName: function() {
                    return `${this.firstName} ${this.lastName}`
                }}

export {getDetails, getName as default, person};