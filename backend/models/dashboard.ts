import mongoose from "mongoose";

const DashBoardSchema = new mongoose.Schema({
  walletBalance: {
    type: Number,
    required: true,
    default:0
  },
  referrals: {
    type: Number,
    required: true,
    default:0
  },
  linksCount: {
    type: Number,
    required: true,
    default:0
  },
  linkGenerated: {
    type: String,
    required: true,
    minlength:10
  },
  userDashboard: {
    type: mongoose.Types.ObjectId,
    ref: 'Auth',
    required: true
  },
  referralCode: {
    type: String,
    required: [true, "Please provide a referral code"],
  },
  activity: {
    type: [
      {
        name: String,
        title: String,
        email: {
          type: String,
          unique: true,
        },
        info: {
          type: String,
          enum:['link','payment']
        },
        createdAt: {
          type: Date,
          default:Date.now()
        },
        amount: Number,
      }
    ],
  }
});

const Dashboard = mongoose.models['Dashboard'] ?? mongoose.model('Dashboard', DashBoardSchema)

export {Dashboard}