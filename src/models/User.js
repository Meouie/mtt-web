import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  discord: { type: String, required: true, unique: true },
  ign: { type: String, required: false },
  tiers: {
    type: Map,
    of: Number,
    required: true,
    default: {},
  },
});
userSchema.index({ ign: "text" }, { sparse: true });

export const User = mongoose.models.User || mongoose.model("User", userSchema);
