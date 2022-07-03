const bank = require('../modules/bank/model');

class Bank extends bank {
 static async open (id) {
  await this.create({user:id})
 }


 static async deleteByOwner (id) {
  await this.findOneAndRemove({user:id})
  return {
   name: "Bank",
   acknowledged: true,
   deletedCount: 1
  }
 }
}

module.exports = Bank;