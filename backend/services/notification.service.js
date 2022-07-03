const Notif = require('../modules/notification/model');
class Notification extends Notif {
 static async init (id) {
  await this.create({user:id})
 }

 
 static async deleteByOwner (id) {
  await this.findOneAndRemove({user:id})
  return {
   name: "Notification",
   acknowledged: true,
   deletedCount: 1
  }
 }
}

module.exports = Notification;