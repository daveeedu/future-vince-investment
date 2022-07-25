const {
  update,
  createTransaction
} = require('../../services/bank.service');
const BankService = require('../../services/bank.service');
const NotificationService = require('../../services/notification.service');

exports.update = async (body, id, nid) => {
  if(nid) {
    await NotificationService.changeNotificationStatus(id, nid);
  }
  const res = await BankService.topUp(id,body);
  return res
}

exports.createTransaction = async (body, id) => {
  body.user = id;
  const bank = await BankService.createTransaction(body);

  const {
    data
  } = bank;
  const activity = {
    title: `$${data.amount} invested successfully`,
    transactionId: data._id,
  }
  const notification = await NotificationService.updateActivity(activity, id);
  bank.data._doc.activity = notification?.activities;
  return bank;
}