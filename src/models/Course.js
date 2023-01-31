const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongoose_delete = require('mongoose-delete');
const { Schema } = mongoose;

const Course = new Schema(
  {
    name: { type: String, maxLength: 255, require: true },
    description: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 255 },
    videoId: { type: String, maxLength: 255, require: true },
    level: { type: String, maxLength: 255 },
    slug: { type: String, slug: 'name', unique: true },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
    deletedAt: { type: Date },
  },
  {
    timestamps: true,
  },
);

//Add plugin
mongoose.plugin(slug);
Course.plugin(mongoose_delete, { overrideMethods: 'all'});

module.exports = mongoose.model('Course', Course);
