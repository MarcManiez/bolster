const db = require('../database');
const Account = require('./account');
const Address = require('./address');
const Transaction = require('./transaction');
const Goal = require('./goal');

module.exports = db.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  accounts: () => this.hasMany(Account),
  address: () => this.belongsTo(Address),
  transactions: () => this.hasMany(Transaction),
  goals: () => this.hasMany(Goal),
});
