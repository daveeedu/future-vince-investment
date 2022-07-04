const mongoose = require('mongoose');
mongoose.set("returnOriginal", false);

// destructure mongoose.Schema and mongoose.model
const {
  Schema,
  model
} = mongoose;

const bankSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'Profile',
    required: true,
    trim: true,
  },
  balance: {
    type: Number,
    default: 0
  },
  invested: {
    type: Number,
    default: 0
  },
  profits: {
    type: Number,
    default: 0
  },
  walletId: {
    type: String,
    trim: true,
    default: null,
    maxlength: 200,
  },
}, {
  timestamps: true
});

module.exports = model('bank', bankSchema);
