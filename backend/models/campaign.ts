import mongoose from "mongoose";

const CampaignSchema = new mongoose.Schema({
  socialLink: {
    type: String,
    required: [true, "Please provide a social link"],
    minlength: 10,
  },
  rewardType: {
    type: Number,
    required: [true, "Please provide a reward"],
    default:0
  },
  referralCode: {
    type: String,
    required: [true, "Please provide a referral code"],
  },
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: 'Auth',
    required: [true, "Please provide user"]
  }
}, { timestamps: true })

const Campaign = mongoose.models['Campaign'] ?? mongoose.model('Campaign', CampaignSchema);

export {Campaign}