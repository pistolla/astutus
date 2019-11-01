const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String, required: true },
  canonical_url: { type: String, required: true },
  date_published: { type: String, required: true },
  domain: { type: String, required: true },
  number_of_tweets: { type: Number, required: true },
  score: { type: Number, required: true },
  site_type: { type: Number, required: true },
  wallet_address: { type: String, required: true },
  seed_amount: { type: Number, required: true },
  date_published: { type: Date, required: true }
}, {
  timestamps: true,
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
