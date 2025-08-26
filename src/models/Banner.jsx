import mongoose from 'mongoose';

const BannerSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  imageUrl: String,
});

export default mongoose.models.Banner || mongoose.model('Banner', BannerSchema);
