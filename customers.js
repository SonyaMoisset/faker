var faker = require('faker')

function generateCustomers () {
  var customers = []

  for (var id = 0; id < 50; id++) {
    var firstName = faker.name.firstName()
    var lastName = faker.name.firstName()
    var phoneNumber = faker.phone.phoneNumberFormat()
    var jobTitle = faker.name.jobTitle()
    var country = faker.address.country()

    customers.push({
      "id": id,
      "first_name": firstName,
      "last_name": lastName,
      "phone": phoneNumber,
      "jobTitle": jobTitle,
      "country": country
    })
  }

  return { "customers": customers }
}

module.exports = generateCustomers
